import { getContext, onMount, setContext, untrack } from 'svelte';
import { getFirebaseContext } from '$lib/firebase/firebase.svelte';
import type { DocumentData } from 'firebase/firestore';


export type UserSettings = {
    username: string;
    theme: "light" | "dark" | "system"
}

function createApp() {
    const firebase = getFirebaseContext();

    let test = $state({test: ""})

    // permanent state backed up to firestore
    let userDoc: UserSettings = $state({
        username: "",
        theme: "light",
    });

    // ephemeral state
    let authRedirect = $state("")

    $effect(() => {
        if (firebase.user) firebase.syncStateToDoc(untrack(() => userDoc), "users", firebase.user.uid)
    })

    $effect(() => {
        if (firebase.user) firebase.syncStateToDoc(untrack(()=>test), "users", firebase.user.uid)
    })

    return {
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get username() { return userDoc.username },
        set username(value) { userDoc.username = value },
        get theme() { return userDoc.theme },
        set theme(value) { userDoc.theme = value },
        get test() { return test },
        set test(value) { test = value },
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