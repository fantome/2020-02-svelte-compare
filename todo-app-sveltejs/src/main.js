import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		list: [
			{ id: 1, text: "Create Vus.js apps"},
			{ id: 2, text: "Create Svelte apps"}
		]
	}
});

export default app;