# FaST Stack Overview
> **F**irebase **a**nd **S**veltekit **T**ailwind

A simple stack for creating minimum viable PWAs quickly. This repo can be used as a template as well with basic auth and app state management

<pre>
 <strong>Language</strong> = Typescript <img src="static/svg/typescript.svg" width="16"/>
<strong>Framework</strong> = Svelte <img src="static/svg/svelte.svg" width="16"/>
  <strong>Routing</strong> = <a href="https://svelte.dev/docs/kit/creating-a-project">Sveltekit</a> 
       <strong>UI</strong> = <a href="https://next.shadcn-svelte.com/docs/installation/sveltekit">shadcn-svelte</a> <img src="static/svg/shadcn.svg" width="16"/>
              <a href="https://v3.tailwindcss.com/docs/installation">Tailwind v3</a> <img src="static/svg/tailwind.svg" width="16"/>
  <strong>Hosting</strong> = GitHub <img src="static/svg/github.svg" width="16"/>
   <strong>Deploy</strong> = <a href="https://github.com/tschaub/gh-pages">gh-pages</a>
     <strong>Auth</strong> = <a href="https://firebase.google.com/docs/auth">Firebase</a> <img src="static/svg/firebase-auth.svg" width="16"/>
 <strong>Database</strong> = <a href="https://firebase.google.com/docs/firestore/quickstart">Firestore</a> <img src="static/svg/firebase-firestore.svg" width="16"/>
</pre> 


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