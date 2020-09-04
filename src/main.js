import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Pierre',
		lastname: 'Chavez'
	}
});

export default app;
