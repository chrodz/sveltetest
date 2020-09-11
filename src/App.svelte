<script>
    //Para importar otro componente desde la carpeta Components
    import About from "./components/About.svelte";
    import Text from "./components/Text.svelte";
    import Person from "./components/Person.svelte";
    import Skills from "./components/Skills.svelte";
    import Photos from "./components/Photos.svelte";
    import ButtonCount from "./components/ButtonCount.svelte";

    //export permite exportar la variable hacia otros componentes
	export let name;
	export let lastname;
	let sveltelogo = "https://arepa.s3.amazonaws.com/svelte-logo.png"

	const data = {
	    name: "Pierre",
	    lastname : "Chavez",
	    age: 32,
	}
</script>

<main>
	<h1>Hello {name} {lastname}!</h1>
    <About />
    <Text anotherText="Hola desde otro Componente" />
    <Text />
    <Person data={data} />
    <Skills />
    <img src="{sveltelogo}" alt="">
    <ButtonCount />
    <Photos />
</main>

<style>
    /* :global(--) Permite colocar un style global que afecta a otros componentes*/
    :global(body){
        background-color: #f2eee2;
        color: #0084f6;
    }

    :global(:root){
        /* Al colocar --VAR se puede declarar una variable CSS que podrá ser usada luego */
        --theme-color:purple;
    }

    :global(body.dark-mode){
        background-color: #1d3040;
        color: #bfc2c7;
    }


    p{
        /* Si queremos usar el valor de una variable declarada hacemos uso de var(--VAR) */
        color: var(--theme-color);
        font-size: 22px;
    }

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

    main img{
        width: 30%;
    }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}

        h1 {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }
	}
</style>
