<script lang="ts">
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import { CheckCheck, Loader2 } from "lucide-svelte";

  const firebase = getFirebaseContext();
</script>

{#if !firebase.isLoading}
  {#if firebase.isPublishing}
    <Loader2 size="1.2em" class="animate-spin" />
  {:else}
    <CheckCheck size="1.2em" />
  {/if}
{/if}
