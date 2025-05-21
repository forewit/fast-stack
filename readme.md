# FaST Stack
> **F**irebase **a**nd **S**veltekit **T**ailwind

A simple stack for creating minimum viable PWAs quickly. This repo can be used as a template as well with basic auth, state management, paymets, and hosting.

<p align="center">
  <code>&emsp;Typescript&emsp;<img align="center" src="static/svg/typescript.svg" height="20"/>&emsp;</code>
  <code>&emsp;<a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a>&emsp;<img align="center" src="static/svg/svelte.svg" height="20"/>&emsp;</code>
</p>

<p align="center">
  <code>&emsp;<strong><a href="https://next.shadcn-svelte.com/docs/installation/sveltekit">shadcn-svelte</a></strong>&emsp;<img align="center" src="static/svg/shadcn.svg" height="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://v3.tailwindcss.com/docs/installation">Tailwind v3</a></strong>&emsp;<img align="center" src="static/svg/tailwind.svg" height="20"/>&emsp;</code>
</p>

<p align="center">
  <code>&emsp;<strong><a href="https://firebase.google.com/docs/hosting">Firebase Hosting</a></strong>&emsp;<img align="center" src="static/svg/firebase-hosting.svg" height="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://firebase.google.com/docs/auth">Firebase Auth</a></strong>&emsp;<img align="center" src="static/svg/firebase-auth.svg" height="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://firebase.google.com/docs/firestore/quickstart">Firestore</a></strong>&emsp;<img align="center" src="static/svg/firebase-firestore.svg" height="20"/>&emsp;</code>
</p>

<p align="center">
  <code>&emsp;<strong><a href="https://docs.stripe.com/get-started">Stripe</a></strong>&emsp;<img align="center" src="static/svg/stripe.svg" height="20"/>&emsp;</code>
</p>

<p align="center">
  <code>&emsp;<a href="https://svelte.dev/docs/svelte/testing">Vitest</a>&emsp;<img align="center" src="static/svg/vitest.svg" height="20"/>&emsp;</code>
  <code>&emsp;GitHub CI/CD&emsp;<img align="center" src="static/svg/github.svg" height="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://github.com/tschaub/gh-pages">gh-pages</a></strong>&emsp;</code> 
  <!-- <code>&emsp;<strong><a href="https://bitwarden.com/products/secrets-manager">Bitwarden Secrets</a></strong>&emsp;<img align="center" src="static/svg/bitwarden.svg" height="20"/>&emsp;</code> -->
</p>


### Table of contents
- [FaST Stack Overview](#fast-stack-overview)
- [Initial setup](#initial-setup)
  - [Create app](#create-app)
  - [Install dependencies](#install-dependencies)
  - [Setup static site rendering](#setup-static-site-rendering)
  - [Setup Firebase](#setup-firebase)
  - [Setup PWA](#setup-pwa)
  - [Setup vitest](#setup-vitest)
- [How Tos](#how-tos)
  - [Run locally](#run-locally)
  - [Enable Firebase Hosting and CI/CD with GitHub Actions](#enable-firebase-hosting-and-cicd-with-github-actions)

## Initial setup
### Create app. 
See: [install instructions](https://next.shadcn-svelte.com/docs/installation/sveltekit)
```bash
npx sv@0.6.18 create my-app
```
### Install dependencies:
```bash
# UI with shadcn-svelte and tailwind
npx shadcn-svelte@next init
npx sv@0.6.18 add tailwindcss 
npm i tailwindcss-animate
npm i bits-ui -D
npm i lucide-svelte
npm i mode-watcher@0.5.1

# deploying to GitHub Pages
npm i gh-pages -D
npm i -D cross-env

# static site rendering
npm i -D @types/node
npm i -D @sveltejs/adapter-static

# firebase, testing, and payments
npm i firebase
npm i -D vitest
npm i stripe
```

### Setup static site rendering. 
1. Update `svelte.config.js`:

    ```ts
    import adapter from '@sveltejs/adapter-static'; // change to adapter-static
    import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

    // the DEPLOY_TARGET env variable should be set in the deploy script
    const outputDir = process.env.DEPLOY_TARGET === "gh-pages" ? "build_gh_pages" : "build";
    const basePath = process.env.DEPLOY_TARGET === "gh-pages" ? "/fast-stack" : "";

    /** @type {import('@sveltejs/kit').Config} */
    const config = {
      preprocess: vitePreprocess(),

      kit: {
        appDir: 'app', // gh-pages doesn't play with the default _app directory
        adapter: adapter({
          pages: outputDir,      
          assets: outputDir,    
          fallback: 'index.html', // good for firebase hosting?
        }),
        paths: {
          base: basePath,
        }
      }
    };

    export default config;
    ```
2. add the following to `/src/routes/+layout.ts` (or create the file):

    ```ts
    export const prerender = true;
    export const trailingSlash = "always";
    ```

3. setup custom deploy scripts

    ```json
    "build:gh-pages":  "cross-env DEPLOY_TARGET=gh-pages vite build",
    "deploy:gh-pages": "gh-pages -d build_gh_pages",
    "deploy": "firebase deploy --only hosting"
    ```

### Setup Firebase

1. initial setup

    ```bash
    npm i -g firebase-tools
    firebase init
    ```

2. add to your .env file:

    ```env
    FIREBASE_APIKEY=
    FIREBASE_AUTHDOMAIN=
    FIREBASE_PROJECTID=
    FIREBASE_STORAGEBUCKET=
    FIREBASE_MESSAGINGSENDERID=
    FIREBASE_APPID=
    ```

3. Copy the following files from this repo:
    - `src/lib/firebase/firebase.svelte.ts`
    - `src/lib/firebase/firebase.client.js` 👈 update with your Firebase config
    
### Setup PWA. 
1. Copy the following files from this repo:
    - `src/service-worker.js`
    - `static/manifest.json` 👈 Update to fit your GitHub repo!

2. Add to `/src/app.html`:

    ```html
    <link rel="manifest" href="%sveltekit.assets%/manifest.json" />
    ```

### Setup vitest
- Add the following to `vite.config.js`:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// ...
	// Tell Vitest to use the `browser` entry points in `package.json` files, even though it's running in Node
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined
});
```
## How Tos

### Run locally
```bash
firebase emulators:start
npm run dev
```

### Enable Firebase Hosting and CI/CD with GitHub Actions
1. **setup your .env file**
   - Go to: `Repo → Settings → Secrets and variables → Actions` and add `ENV_PR`: `.env` file contents

2. **Create GitHub Actions Workflow**
   Create `.github/workflows/deploy-on-merge.yml`:

   ```yaml
    name: Deploy to Firebase Hosting on merge
    on:
      push:
        branches:
          - main
    jobs:
      build_and_deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - name: Create .env file
            run: echo "${{ secrets.ENV_PR }}" > .env
          - run: npm ci && npm run build
          - uses: FirebaseExtended/action-hosting-deploy@v0
            with:
              repoToken: ${{ secrets.GITHUB_TOKEN }}
              firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_FAST_STACK_8A068 }}
              channelId: live
              projectId: fast-stack-8a068
   ```