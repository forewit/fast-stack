import { auth, db } from "$lib/firebase/firebase.client";
import { type User, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, deleteDoc, collection, onSnapshot, type DocumentData, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { debounce } from "$lib/utils";
import { getContext, setContext, untrack } from 'svelte';

function createFirebase() {
    const DEBOUNCE_DELAY = 1000;

    let publishQueue: Record<string, { publish: () => void, data: any | null }> = $state({});
    let isLoading = $state(true)
    //let isPublishing = $derived(Object.keys(publishQueue).length > 0)
    let isPublishing = $state(false);
    let user: User | null = $state(null)
    let cleanupFunctions: (() => void)[] = []


    function syncStateToDoc(target: any, collection: string, ...path: string[]) {
        let initialSync = false;
        const docRef = doc(db, collection, ...path);

        const unsub = onSnapshot(docRef, (snap) => {
            if (snap.exists()) {
                const data = snap.data();
                //Object.assign(target, newData);
                Object.keys(target).forEach(key=>{if (data[key]) target[key] = data[key]})
                initialSync = true;
            } else {
                initialSync = true;
            }
        });
        cleanupFunctions.push(unsub);

        $effect(() => {
            JSON.stringify(target)
            untrack(() => { if (initialSync) publishDoc(collection, path, target); });
        });
    }

    /** subscribes to a Firestore document */
    function subscribeToDoc(collection: string, path: string[], fn: (id: string, doc: DocumentData | null) => void) {
        const docRef = doc(db, collection, ...path);
        const unsub = onSnapshot(docRef,
            (snap) => { fn(snap.id, snap.exists() ? snap.data() : null) },
            (error) => { console.warn("Error while syncing firestore doc", path, error); throw error }
        )
        cleanupFunctions.push(unsub)


    }

    /** subscribes to all the Firestore documents in a collection */
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

    /** publishes a document to Firestore at path: users (collection) -> userid (document) -> ...path */
    function publishDoc(collection: string, path: string[], data: DocumentData | null) {
        const pathStr = collection + "/" + path.join("/");
        if (publishQueue[pathStr] !== undefined) {
            publishQueue[pathStr].data = Object.assign(publishQueue[pathStr].data || {}, data);
            publishQueue[pathStr].publish(); // call it so that the debounce is triggered
            return;
        }

        publishQueue[pathStr] = {
            publish: debounce(async () => {
                try {
                    const docRef = doc(db, collection, ...path);
          
                    if (!data) {
                        deleteDoc(docRef)
                            .then(() => console.info("Deleted firestore doc"))
                            .catch(err => console.warn("Failed to delete firestore doc:", err));
                    } else {
                        const docSnap = await getDoc(docRef);
                        if (!docSnap.exists()) {
                            await setDoc(docRef, publishQueue[pathStr].data);
                            console.info("Created new firestore doc");
                            return;
                        }

                        updateDoc(docRef, publishQueue[pathStr].data)
                            .then(() => console.info("Synced with firestore"))
                            .catch(err => console.warn("Failed to sync with firestore:", err))
                    }
                } catch (err) {
                    console.warn("Unexpected error while publishing:", err)
                } finally {
                    delete publishQueue[pathStr];

                }
            }, DEBOUNCE_DELAY),
            data: Object.assign({}, data)
        }
        publishQueue[pathStr].publish();
    }


    async function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    async function logout() {
        return signOut(auth)
    }

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

        if (currentUser === null) {
            console.info("Logged out, cleaning up firebase listeners");
            cleanupFunctions.forEach((unsub) => unsub())
            cleanupFunctions = [];
        } else {
            console.info("Logged in")
        }
    })

    function destroy() {
        console.info("Cleaning up firebase listeners");
        cleanupFunctions.forEach(unsub => unsub())
        cleanupFunctions = []
        unsubAuth()
    }

    return {
        // state
        get user() { return user },
        get isLoading() { return isLoading },
        get isPublishing() { return isPublishing },

        // functions
        syncStateToDoc,
        resetPassword,
        signUp,
        login,
        logout,
        destroy,
        subscribeToCollection,
        subscribeToDoc,
        publishDoc,
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