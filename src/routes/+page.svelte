<script lang="ts">
  import { Sun, Moon, LogOut, Github } from "lucide-svelte";
  import { toggleMode } from "mode-watcher";
  import Button from "$lib/components/ui/button/button.svelte";
  import { base } from "$app/paths";
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";

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
  <Button href="https://github.com/forewit/fast-stack" class="mb-6"
    ><Github /> View on GitHub</Button
  >
  <Button variant="destructive" onclick={firebase.logout} size="sm">
    <LogOut class="h-4 w-4" />
    Logout
  </Button>
</div>
