<script >
    import ButtonCount from './ButtonCount.svelte';

    let someText = `Backend Developer at My Home`;
    let count = 0;

    let styles = { darkMode: false }

    function handleClick() {
      count+=1;
    }

    function toggle() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }
</script>

<style>
    .About .some-text{
        color: var(--theme-color);
    }

    .dark-mode .About .some-text{
        color: #FFF;
    }
</style>


<div class="About">
    {#if !styles.darkMode}
        <p class="some-text">{someText}</p>
    {:else}
        <p class="some-text">Hello Dark Mode</p>
    {/if}

    <button on:click={handleClick}>Click {count == 0 ? '':count}</button>
    <button on:click={toggle}>Dark Mode</button>
    <ButtonCount />
</div>
