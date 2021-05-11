<script>
  import { onMount } from "svelte";
  import Login from "../components/Login.svelte";

  export let selection;
  export let needLogin;
</script>

{#if needLogin}
  <Login />
{:else}
  <h2>{selection}</h2>
  
{/if}

<style>
</style>
