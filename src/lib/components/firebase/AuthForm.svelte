<script lang="ts">
  import { getFirebaseContext } from "$lib/firebase/firebase.svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { Loader2, TriangleAlert, CheckCheck } from "lucide-svelte";
  import { base } from "$app/paths";
  import type { Snippet } from "svelte";
  import { cn } from "$lib/utils";

  let { onSuccessfulLogin = ()=>{}, children, class: className = "" }: { onSuccessfulLogin?: () => void; children?: Snippet; class?: string } = $props();
  
  const firebase = getFirebaseContext();

  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let alertTitle = $state("");
  let alertDescription = $state("");

  let failedLogin = $state(false);
  let emailSent = $state(false);
  let isLoading = $state(false);
  let forgotPassword = $state(false);
  let failedSignUp = $state(false);
  let signUp = $state(false);

  function parseError(err: any) {
    if (err.code === "auth/user-not-found") {
      alertTitle = "User not found.";
      alertDescription = "Try creating an account";
    } else if (err.code === "auth/wrong-password") {
      alertTitle = "Incorrect password.";
      alertDescription = "Please check your password and try again.";
    } else if (err.code === "auth/invalid-email") {
      alertTitle = "Invalid email.";
      alertDescription = "Please enter a valid email address.";
    } else if (err.code === "auth/weak-password") {
      alertTitle = "Password is too weak.";
      alertDescription = "Please choose a stronger password.";
    } else if (err.code === "auth/email-already-in-use") {
      alertTitle = "Email address is already in use.";
      alertDescription = "Please use a different email address.";
    } else {
      alertTitle = "An unexpected error occurred.";
      alertDescription = "Uh that's awkward...";
    }
  }

  async function handleLogin(e: SubmitEvent) {
    e.preventDefault();

    firebase
      .login(email, password)
      .then(() => {
        failedLogin = false;
        isLoading = true;
        onSuccessfulLogin();
      })
      .catch((err) => {
        failedLogin = true;

        alertTitle = "Username or password is incorrect."; 
        alertDescription = "Please check your credentials and try again."; 
      })
      .finally(() => {
        isLoading = false;
      });
  }

  async function handlePasswordReset(e: SubmitEvent) {
    e.preventDefault();

    firebase
      .resetPassword(email)
      .then(() => {
        emailSent = true;
        isLoading = true;
        
        alertTitle = "Password Reset Email Sent";
        alertDescription = "Please check your inbox for further instructions.";
      })
      .catch((err) => {
        emailSent = false;
        parseError(err);
      })
      .finally(() => {
        isLoading = false;
      });
  }

  async function handleSignUp(e: SubmitEvent) {
    if (password !== confirmPassword) {
      alertTitle = "Passwords do not match."; 
      alertDescription = "Please check your password and try again."; ;
      failedSignUp = true;
      return;
    }

    e.preventDefault();

    isLoading = true;
    failedSignUp = false;
    await firebase
      .signUp(email, password)
      .then(() => {
        onSuccessfulLogin();
      })
      .catch((err) => {
        failedSignUp = true;
        parseError(err);
      })
      .finally(() => {
        isLoading = false;
      });
  }

  $effect(() => {
    if (firebase.user) {
      onSuccessfulLogin();
    }
  });
</script>

{#snippet FeedbackAlert(error: boolean = false)}
  <Alert.Root class="py-2" variant={error ? "destructive" : "default"}>
    {#if error}
      <TriangleAlert class="size-4" />
    {:else}
      <CheckCheck class="size-4" />
    {/if}
    <Alert.Title>{alertTitle}</Alert.Title>
    <Alert.Description>{alertDescription}</Alert.Description>
  </Alert.Root>
{/snippet}

{#if firebase.user}
  <div class="w-full flex justify-center">
    <div
      class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"
    ></div>
  </div>
{:else}
  <Card.Root class={cn("w-full max-w-sm mx-auto", className)}>
    <Card.Header class="flex items-center">
      {@render children?.()}
    </Card.Header>
    <Card.Content>
      {#if forgotPassword}
        <form class="flex flex-col gap-4" onsubmit={handlePasswordReset}>
          <Input bind:value={email} type="email" placeholder="Email" required class="w-full" />
          {#if emailSent}
            {@render FeedbackAlert()}
          {/if}
          <Button type="submit" class="w-full" disabled={isLoading || emailSent}>
            {#if isLoading}
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            {emailSent ? "Email Sent!" : "Reset Password"}
          </Button>
          <Button
            class="pl-2"
            variant="link"
            onclick={() => {
              forgotPassword = false;
              failedLogin = false;
              failedSignUp = false;
            }}>Back to sign in</Button
          >
        </form>
      {:else if signUp}
        <form class="flex flex-col gap-4" onsubmit={handleSignUp}>
          <Input bind:value={email} type="email" placeholder="Email" required class="w-full" />
          <Input
            bind:value={password}
            type="password"
            placeholder="Password"
            required
            class="w-full"
          />
          <Input
            bind:value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            required
            class="w-full"
          />

          {#if failedSignUp}
            {@render FeedbackAlert(true)}
          {/if}

          <Button type="submit" class="w-full" disabled={isLoading}>
            {#if isLoading}
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            Create account
          </Button>
          <Button
            variant="link"
            class=""
            onclick={() => {
              signUp = false;
              failedSignUp = false;
            }}>Back to sign in</Button
          >
        </form>
      {:else}
        <form class="flex flex-col gap-4" onsubmit={handleLogin}>
          <Input bind:value={email} type="email" placeholder="Email" required class="w-full" />
          <Input
            bind:value={password}
            type="password"
            placeholder="Password"
            required
            class="w-full"
          />

          {#if failedLogin}
            {@render FeedbackAlert(true)}
          {/if}

          <Button type="submit" class="w-full" disabled={isLoading}>
            {#if isLoading}
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            Login
          </Button>
          <div class="flex justify-between">
            <Button
              variant="link"
              class=""
              onclick={() => {
                signUp = true;
                emailSent = false;
              }}>Create an account</Button
            >
            <Button
              variant="link"
              class=""
              onclick={() => {
                forgotPassword = true;
                emailSent = false;
              }}>Forgot password?</Button
            >
          </div>
        </form>
      {/if}
    </Card.Content>
  </Card.Root>
{/if}
