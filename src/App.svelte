<script>
  import Service from "./screens/Service.svelte";
  import Welcome from "./screens/Welcome.svelte";
  import { onMount } from "svelte";

  var state = "welcome"; // 'welcome' or service
  var needLogin = 0;

  function start(params) {
    state = params.detail.category.name;
    needLogin = params.detail.category.needLogin;
  }

  onMount(() => {
    window.ipc.send("getData");
    window.ipc.receive("loadedData", (data) => {
      console.log(data);
    });
  });
</script>

<main>
  {#if state === "welcome"}
    <Welcome on:select={start} />
  {:else}
    <Service selection={state} {needLogin} />
  {/if}
</main>

<style>
  main {
    min-width: 400px;
    padding: 25px 125px;
  }
</style>
