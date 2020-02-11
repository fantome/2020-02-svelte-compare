<script>
	import ToDo from './components/ToDo.svelte'

	export let list;
</script>

<ToDo list={list}/>
<p></p>
<style>  p {
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
	background: linear-gradient(#dcaeff, #ff6a3d);
	height: auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
  }</style>