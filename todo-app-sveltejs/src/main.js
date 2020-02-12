import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		list: [
			{ id: 1, text: "Create Vue.js apps"},
			{ id: 2, text: "Create React apps"},
			{ id: 3, text: "Create Svelte apps"}
		]
	}
});

export default app;