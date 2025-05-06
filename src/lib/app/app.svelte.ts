import { getContext, setContext, untrack } from 'svelte';
import { getFirebaseContext } from '$lib/firebase/firebase.svelte';
import type { DocumentData } from 'firebase/firestore';


export type UserSettings = {
    username: string;
    theme: "light" | "dark" | "system"
}


function createApp() {
    const firebase = getFirebaseContext();

    // permanent state
    let settings: UserSettings = $state({
        username: "",
        color: "",
        theme: "system"
    });

    // ephemeral state
    let lastUpdated = 0;
    let remoteUpdate = $state(true);
    let authRedirect = $state("")

    const publish = () => { firebase.publishDoc([], { lastUpdated, settings }) }

    const loadDocAndValidate = (data: DocumentData) => { settings = data.settings }

    firebase.subscribeToDoc([], (id, doc) => {
        if (firebase.isLoading || doc === null) return
        if (doc.lastUpdated === undefined || doc.lastUpdated < lastUpdated) {
            publish()
        } else if (doc.lastUpdated > lastUpdated) {
            remoteUpdate = true;
            loadDocAndValidate(doc)
        } else if (doc.lastUpdated === lastUpdated) {
            console.log("app in sync with user doc")
        }
    })

    $effect(() => {
        JSON.stringify(settings);

        untrack(() => {
            if (remoteUpdate) {
                remoteUpdate = false
                return;
            }
            lastUpdated = Date.now();
            publish();
        })
    });

    return {
        // editable state
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get settings() { return settings },
        set settings(value: UserSettings) { settings = value },
    }
}

const APP_KEY = Symbol('App')

export const setAppContext = () => {
    const newApp = createApp();
    return setContext(APP_KEY, newApp)
}

export const getAppContext = (): ReturnType<typeof setAppContext> => {
    return getContext(APP_KEY)
}