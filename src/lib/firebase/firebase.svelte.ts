import { auth, db } from "$lib/firebase/firebase.client";
import { type User, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, collection, onSnapshot, type DocumentData, setDoc } from "firebase/firestore";
import { debounce } from "$lib/utils";
import { getContext, setContext } from 'svelte';

function createFirebase() {
    const DEBOUNCE_DELAY = 1000;
    const USER_ID = "USER_ID_PENDING";

    let isLoading = $state(true)
    let isPublishing = $state(false)
    let user: User | null = $state(null);

    let pendingSubscriptions: (() => void)[] = []
    let cleanupFunctions: (() => void)[] = []


    /**
     * Synchronizes local $state variables with a Firestore document, supporting user-dependent paths and debounced publishing.
     *
     * This function listens to changes in a Firestore document and updates the local state accordingly.
     * It also observes local state changes and publishes them back to Firestore with a debounce to avoid excessive writes.
     * If the user is not yet available, the subscription is deferred until the user is set.
     *
     * @param get - A function that returns the current local state as a `DocumentData` object.
     * @param set - A function that updates the local state with a given `DocumentData` object.
     * @param collection - The Firestore collection name.
     * @param path - Additional path segments for the Firestore document. If uses the uidPlaceholder (`USER_ID_PENDING`), it will be replaced with the current user's UID.
     * @example
     * ```typescript
     * const firebase = getFirebaseContext();
     * let username = $state("")
     * firebase.syncState(
     *      () => ({ username }),
     *      (v) => { if (v.username != undefined) username = v.username },
     *      "users",
     *      firebase.USER_ID_PENDING
     *  );
     * ```
     */
    function syncState(get: () => DocumentData, set: (v: DocumentData) => void, collection: string, ...path: string[]) {
        if (user == null) {
            pendingSubscriptions.push(() => syncState(get, set, collection, ...path));
            return;
        }
        const uid = user.uid
        const newPath = path.map(segment => segment === USER_ID ? uid : segment);

        let initialSync = false;
        const docRef = doc(db, collection, ...newPath);

        const unsub = onSnapshot(docRef, (snap) => {
            if (snap.exists()) {
                set(snap.data())
                initialSync = true;
            } else {
                initialSync = true;
            }
        }, err => {
            console.warn("Error while listening to firestore doc", path, err);
        });
        cleanupFunctions.push(unsub);


        const debouncedPublish = debounce(async () => {
            setDoc(docRef, get(), { merge: true })
                .then(() => console.info("Synced with firestore"))
                .catch(err => console.warn("Failed to sync with firestore:", err))
                .finally(() => isPublishing = false);
        }, DEBOUNCE_DELAY)


        $effect.root(() => {
            $effect(() => {
                get(); // triggers reactivity
                isPublishing = true;
                if (initialSync) debouncedPublish();
            })
        })

    }


    /**
     * Subscribes to real-time updates of a Firestore document and invokes a callback on changes.
     *
     * @param collection - The name of the Firestore collection containing the document.
     * @param path - An array of strings representing the path segments to the document within the collection.
     * @param fn - A callback function that is called whenever the document changes. Receives the document ID and its data (or `null` if the document does not exist).
     *
     * @remarks
     * The subscription is automatically cleaned up by pushing the unsubscribe function to `cleanupFunctions`.
     *
     * @throws Will throw an error if there is an issue syncing the Firestore document.
     */
    function subscribeToDoc(collection: string, path: string[], fn: (id: string, doc: DocumentData | null) => void) {
        const docRef = doc(db, collection, ...path);
        const unsub = onSnapshot(docRef,
            (snap) => { fn(snap.id, snap.exists() ? snap.data() : null) },
            (error) => { console.warn("Error while syncing firestore doc", path, error); throw error }
        )
        cleanupFunctions.push(unsub)
    }

    /**
     * Subscribes to real-time updates from a Firestore collection at the specified path.
     *
     * @param path - The base path to the Firestore collection.
     * @param pathSegments - Additional path segments to further specify the collection location.
     * @param fn - A callback function invoked for each document change. Receives the document ID and its data,
     *             or `null` if the document was removed.
     *
     * @remarks
     * - Uses Firestore's `onSnapshot` to listen for changes.
     * - Logs document fetches and their source (local/server).
     * - Pushes the unsubscribe function to `cleanupFunctions` for later cleanup.
     * - Handles and logs errors during synchronization.
     */
    function subscribeToCollection(path: string, pathSegments: string[], fn: (id: string, doc: DocumentData | null) => void) {
        const colRef = collection(db, path, ...pathSegments);
        const unsub = onSnapshot(colRef,
            (snap) => {
                snap.docChanges().forEach(change => {
                    console.info("Fetched doc", change.doc.id, (snap.metadata.fromCache || snap.metadata.hasPendingWrites) ? "(local)" : "(server)");
                    fn(change.doc.id, change.type === "removed" ? null : change.doc.data())
                });
            },
            (error) => { console.warn("Error while syncing firestore collection", path, error) }
        )
        cleanupFunctions.push(unsub)
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    /**
     * Sends a password reset email to the specified email address using Firebase authentication.
     *
     * @param email - The email address of the user requesting a password reset.
     * @returns A promise that resolves when the password reset email is sent successfully.
     * @throws Will throw an error if sending the password reset email fails.
     */
    async function resetPassword(email: string) {
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                console.info("Password reset email sent to:", email,);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn("Error during password reset:", errorCode, errorMessage);
                throw error
            });
    }

    /**
     * Signs up a new user using the provided email and password with Firebase Authentication.
     *
     * @param email - The email address of the user to sign up.
     * @param password - The password for the new user.
     * @returns A Promise that resolves when the user is successfully created, or rejects with an error if sign up fails.
     *
     * @throws Will throw an error if the sign up process fails.
     *
     * @example
     * ```typescript
     * signUp('user@example.com', 'securePassword123')
     *   .then(() => console.log('Sign up successful'))
     *   .catch((error) => console.error('Sign up failed', error));
     * ```
     */
    async function signUp(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.info("User signed up:", user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn("Error during sign up:", errorCode, errorMessage);
                throw error
            });
    }

    const unsubAuth = auth.onAuthStateChanged((currentUser) => {
        user = currentUser
        isLoading = false

        if (user === null) {
            console.info(`Logged out. Cleaned up ${cleanupFunctions.length} subscribers`);
            cleanupFunctions.forEach((unsub) => unsub())
            cleanupFunctions = [];
        } else {
            console.info(`Logged in. Starting ${pendingSubscriptions.length} subscriptions`);
            pendingSubscriptions.forEach(fn => fn())
            pendingSubscriptions = []
        }
    })

    function destroy() {
        console.info(`Closing. Cleaned up ${cleanupFunctions.length} subscribers`);
        cleanupFunctions.forEach(unsub => unsub())
        cleanupFunctions = []
        unsubAuth()
    }

    return {
        // state
        get user() { return user },
        get isLoading() { return isLoading },
        get isPublishing() { return isPublishing },

        USER_ID,
        syncState,
        resetPassword,
        signUp,
        login,
        logout,
        destroy,
        subscribeToCollection,
        subscribeToDoc,
    }
}

const FIREBASE_KEY = Symbol('firebase')

export const setFirebaseContext = () => {
    const nFirebase = createFirebase()
    return setContext(FIREBASE_KEY, nFirebase)
}

export const getFirebaseContext = (): ReturnType<typeof setFirebaseContext> => {
    return getContext(FIREBASE_KEY)
}