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
        theme: "light"
    });

    // ephemeral state
    let authRedirect = $state("")

    $effect(()=>{
        if (firebase.user) firebase.syncToDoc(untrack(()=>settings), "users", [firebase.user.uid])
    })

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