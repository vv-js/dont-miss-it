<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function select(category) {
    dispatch("select", { category });
  }

  const services = [
    {
      name: "olx",
      icon: "../public/icons/olx.png",
    },
    {
      name: "facebook",
      icon: "../public/icons/facebook.png",
    },
  ];
</script>

<h2>Available services</h2>
<nav class="nav-services">
  {#each services as service}
    <button on:click={() => select(service.name)}>
      <img src={service.icon} alt={service.name} />
    </button>
  {/each}
</nav>

<style>
  nav {
    display: flex;
  }
  nav button {
    border: none;
    outline: none;
    border-radius: 20px;
    overflow: hidden;
    padding: 0;
    width: 150px;
    height: 150px;
    filter: grayscale(35%);
    box-shadow: 0px 5px 5px #7a7a7a;
    cursor: pointer;
  }
  nav button:hover {
    filter: grayscale(0%);
    box-shadow: 0px 8px 8px #7a7a7a;
  }
  nav button:not(:last-child) {
    margin-right: 20px;
  }
  nav button img {
    width: 100%;
    height: 100%;
  }
</style>
