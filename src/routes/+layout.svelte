<script lang="ts">
  import "../app.css";
  import { setAppContext } from "$lib/app/app.svelte";
  import { setFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import PublishingStatus from "$lib/components/firebase/PublishingStatus.svelte";
  import { Loader2 } from "lucide-svelte";
  import { ModeWatcher, mode } from "mode-watcher";

  let { children } = $props();

  const firebase = setFirebaseContext();
  const app = setAppContext();

  $effect(() => {
    app.authRedirect = window.location.pathname;
  });

  $effect(() => {
    if (!firebase.user && !firebase.isLoading) {
      goto(`${base}/login/`);
    }
  });

  onMount(() => {
    window.addEventListener("beforeunload", (e) => {
      if (firebase.isPublishing) e.preventDefault();
    });

    return () => {
      firebase.destroy();
    };
  });
</script>

<svelte:head>
  <title>FaST Stack</title>
</svelte:head>

<ModeWatcher />

{#snippet content()}
  <ScrollArea type="scroll">
    <div class="max-w-[1200px] m-auto pt-[env(safe-area-inset-top)]">
      {@render children?.()}
    </div>
    <div class="pb-[env(safe-area-inset-bottom)]"></div>
  </ScrollArea>
{/snippet}

{#if firebase.isLoading}
  <!-- Firebase is still loading -->
  <div class="h-svh w-svw grid place-items-center">
    <Loader2 class="h-4 w-4 animate-spin" />
  </div>
{:else if firebase.user}
  <!-- Firebase loaded and authenticated -->
  <div class="z-10 pointer-events-none fixed bottom-8 right-8">
    <PublishingStatus />
  </div>
  <div
    class="h-screen w-screen grid relative pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
  >
    {@render content()}
  </div>
{:else}
  <!-- Firebase loaded but NOT authenticated -->
  {@render content()}
{/if}
