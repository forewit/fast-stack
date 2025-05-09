import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from '$lib/firebase/firebase.svelte';


function createApp() {
    const firebase = getFirebaseContext();

    // ephemeral state
    let authRedirect = $state("")

    // persistent state
    let username = $state("")

    firebase.syncState(
        () => ({ username }),
        (v) => {
            if (v.username != undefined) username = v.username;
        },
        "users",
        firebase.USER_ID
    );


    return {
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get username() { return username },
        set username(value) { username = value },
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