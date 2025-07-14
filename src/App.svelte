<script lang="ts">
	import Counter from "./lib/Counter.svelte";
	import { Router } from "sv-router";
	import { navigate } from "./router";
	// navigate("/");
</script>

<main>
	<h1>Vite + Svelte</h1>
	<Counter />
	<div class="mt-6">
		<Router />
	</div>
</main>

<style>
</style>
