<script lang="ts">
  import { Sun, Moon, LogOut, Github } from "lucide-svelte";
  import { toggleMode } from "mode-watcher";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import { getAppContext } from "$lib/app/app.svelte";
  import Label from "$lib/components/ui/label/label.svelte";

  const app = getAppContext();
  const firebase = getFirebaseContext();
</script>

<div class="p-6 grid place-items-center">
  <div class="text-2xl text-center">
    Welcome to
    <img src="{base}/favicon.png" alt="logo" class="inline w-24" />
    stack
    <Button onclick={toggleMode} variant="outline" size="icon" class="ml-2">
      <Sun class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  </div>
  <div class="grid gap-4 justify-items-center">
    <div class="relative">
      <Label class="bg-background absolute px-1 -top-2.5 right-3 text-xs">synced $state</Label>
    <Input bind:value={app.username} />
    </div>
    <div class="relative">
      <Label class="bg-background absolute px-1 -top-2.5 right-3 text-xs">synced prop</Label>
    <Input bind:value={app.test.test} />
    </div>
    
    <Button href="https://github.com/forewit/fast-stack" class="w-min"><Github /> View on GitHub</Button>
    <Button variant="destructive" onclick={firebase.logout} class="w-min" size="sm">
      <LogOut class="h-4 w-4" />
      Logout
    </Button>
  </div>
</div>
