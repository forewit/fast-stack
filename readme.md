# FaST Stack Overview
> **F**irebase **a**nd **S**veltekit **T**ailwind

A simple stack for creating minimum viable PWAs quickly. This repo can be used as a template as well with basic auth and app state management

 <code>&emsp;Typescript&emsp;<img align="center" src="static/svg/typescript.svg" width="24"/>&emsp;</code>

<code><strong>Framework&emsp;&emsp;</strong></code>&emsp;Svelte&emsp;<img align="center" src="static/svg/svelte.svg" width="20"/>

<code><strong>Routing&emsp;&emsp;&emsp;&emsp;</strong></code>&emsp;<a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a>

<code><strong>UI&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</strong></code>&emsp;<a href="https://v3.tailwindcss.com/docs/installation">Tailwind v3</a>&emsp;<img align="center" src="static/svg/tailwind.svg" width="20"/>&emsp;+&emsp;<a href="https://next.shadcn-svelte.com/docs/installation/sveltekit">shadcn-svelte</a>&emsp;<img align="center" src="static/svg/shadcn.svg" width="20"/>

<code><strong>Hosting&emsp;&emsp;&emsp;&emsp;</strong></code>&emsp;GitHub&emsp;<img align="center" src="static/svg/github.svg" width="20"/>

<code><strong>Deploy&emsp;&emsp;&emsp;&emsp;&emsp;</strong></code>&emsp;<a href="https://github.com/tschaub/gh-pages">gh-pages</a>

<code><strong>Auth&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</strong></code>&emsp;<a href="https://firebase.google.com/docs/auth">Firebase Auth</a>&emsp;<img align="center" src="static/svg/firebase-auth.svg" width="20"/>

<code><strong>Database&emsp;&emsp;&emsp;</strong></code>&emsp;<a href="https://firebase.google.com/docs/firestore/quickstart">Firestore</a>&emsp;<img align="center" src="static/svg/firebase-firestore.svg" width="20"/>





### Initial setup
#### Create app with shadcn-svelte and tailwind see [install instructions](https://next.shadcn-svelte.com/docs/installation/sveltekit):
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

#### Setup Firebase. Copy the following files from this repo:
- `/.env`
- `src/lib/firebase/firebase.client.js`
- `src/lib/firebase/firebase.svelte.ts`
    
#### Setup PWA. Copy the following files from this repo:
- `src/service-worker.js`
- `static/manifest.json`
    - Update to match your GitHub repo!
    - add `<link rel="manifest" href="%sveltekit.assets%/manifest.json" />` to `/src/app.html` an
### Optional niceties
#### Custom deploy scripts
```json
"deploy": "touch build/.nojekyll && gh-pages -d build",
"magic":"git add . && git commit -am 'na' && git push origin main && vite build && touch build/.nojekyll && gh-pages -d build",
```

> Yes, I know that committing to main with "na" is worse than doing pull requests... sue me. This is for **minimum** viable products, not prod 😊