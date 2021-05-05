<script>
  import Service from "./screens/Service.svelte";
  import Welcome from "./screens/Welcome.svelte";

  let state = "welcome"; // 'welcome' or 'service'

  function start(params) {
    state = params.detail.category;
  }
</script>

<main>
  {#if state === "welcome"}
    <Welcome on:select={start} />
  {:else}
    <Service selection={state} />
  {/if}
</main>

<style>
  main {
    height: 100vh;
    padding: 25px 125px;
  }
</style>
