# FaST Stack Overview
> **F**irebase **a**nd **S**veltekit **T**ailwind

A simple stack for creating minimum viable PWAs quickly. This repo can be used as a template as well with basic auth and app state management.

<p align="center">
  <code>&emsp;Typescript&emsp;<img align="center" src="static/svg/typescript.svg" width="20"/>&emsp;</code>
  <code>&emsp;<a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a>&emsp;<img align="center" src="static/svg/svelte.svg" width="20"/>&emsp;</code>
</p>

<p align="center">
  <code>&emsp;<strong><a href="https://next.shadcn-svelte.com/docs/installation/sveltekit">shadcn-svelte</a></strong>&emsp;<img align="center" src="static/svg/shadcn.svg" width="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://v3.tailwindcss.com/docs/installation">Tailwind v3</a></strong>&emsp;<img align="center" src="static/svg/tailwind.svg" width="20"/>&emsp;</code>
</p>

<p align="center">
  <code>&emsp;<strong><a href="https://github.com/tschaub/gh-pages">gh-pages</a></strong>&emsp;</code> OR 
  <code>&emsp;<strong><a href="https://firebase.google.com/docs/hosting">Firebase Hosting</a></strong>&emsp;<img align="center" src="static/svg/firebase-hosting.svg" width="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://firebase.google.com/docs/auth">Firebase Auth</a></strong>&emsp;<img align="center" src="static/svg/firebase-auth.svg" width="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://firebase.google.com/docs/firestore/quickstart">Firestore</a></strong>&emsp;<img align="center" src="static/svg/firebase-firestore.svg" width="20"/>&emsp;</code>
</p>

<p align="center">
  <code>&emsp;<a href="https://svelte.dev/docs/svelte/testing">Vitest</a>&emsp;<img align="center" src="static/svg/vitest.svg" width="20"/>&emsp;</code>
  <code>&emsp;GitHub CI/CD&emsp;<img align="center" src="static/svg/github.svg" width="20"/>&emsp;</code>
  <code>&emsp;<strong><a href="https://bitwarden.com/products/secrets-manager">Bitwarden Secrets</a></strong>&emsp;<img align="center" src="static/svg/bitwarden.svg" width="20"/>&emsp;</code>
</p>


### Initial setup
#### Create app with shadcn-svelte and tailwind. See [install instructions](https://next.shadcn-svelte.com/docs/installation/sveltekit):
```bash
npx sv@0.6.18 create my-app
```
#### Install dependancies
```bash
npx sv@0.6.18 add tailwindcss
npx shadcn-svelte@next init
npm i tailwindcss-animate
npm i bits-ui -D
npm i lucide-svelte
npm i mode-watcher@0.5.1
npm i gh-pages --save-dev
npm i --save-dev @types/node
npm i -D @sveltejs/adapter-static
npm i firebase
npm i -D vitest
firebase init
```

#### Setup static site rendering. 
 
- Update `svelte.config.js`:

```ts
// Change adapter-auto to adapter-static...
import adapter from '@sveltejs/adapter-static';


const config = {
    // ...
    kit: {
        // ...
        // Add the folowing:
        appDir: 'app',
        paths: {
            base: process.env.NODE_ENV === "production" ? "/YOUR_GITHUB_REPO" : "",
        }
    }
}
```

- add the following to `/src/routes/+layout.ts` (or create the file):

```ts
export const prerender = true;
export const trailingSlash = "always";
```

#### Setup Firebase
Copy the following files from this repo:
- `src/lib/firebase/firebase.client.js` **update with your Firebase config**
- `src/lib/firebase/firebase.svelte.ts`
    
#### Setup PWA. Copy the following files from this repo:
- `src/service-worker.js`
- `static/manifest.json`
    - Update to match your GitHub repo!
    - add `<link rel="manifest" href="%sveltekit.assets%/manifest.json" />` to `/src/app.html` an
    
### Optional Niceties
#### Custom deploy scripts
```json
"deploy": "touch build/.nojekyll && gh-pages -d build",
"magic":"git add . && git commit -am 'na' && git push origin main && vite build && touch build/.nojekyll && gh-pages -d build",
```

> Yes, I know that committing to main with "na" is worse than doing pull requests... sue me. This is for **minimum** viable products, not prod 😊

#### how tos
run locally:
```bash
firebase emulators:start
npm run dev
```

#### Setup vitest

#### Setup up Firebase Hosting and CI/CD with GitHub Actions
1. **Add GitHub Secrets**
   - Go to: `Repo → Settings → Secrets and variables → Actions`
   - Add the following secrets:
     - `FIREBASE_TOKEN` – Get via `firebase login:ci`
     - `FIREBASE_API_KEY` – Your Firebase API key

2. **setup your .env file**
   - Create a `.env` file in the root of your project and add the following:
     ```env
     VITE_FIREBASE_API_KEY=${FIREBASE_API_KEY}
     VITE_FIREBASE_AUTH_DOMAIN=${FIREBASE_AUTH_DOMAIN}
     VITE_FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}
     VITE_FIREBASE_STORAGE_BUCKET=${FIREBASE_STORAGE_BUCKET}
     VITE_FIREBASE_MESSAGING_SENDER_ID=${FIREBASE_MESSAGING_SENDER_ID}
     VITE_FIREBASE_APP_ID=${FIREBASE_APP_ID}
     ```
2. **Create GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:

   ```yaml

   ```