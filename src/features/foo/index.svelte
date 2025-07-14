<script lang="ts">
	import { route, p } from "@/router";
</script>

<div>
	<h1 class="text-3xl font-bold underline">{route.pathname}</h1>
	<a class="mt-4 block" href={p("/")}>go to Home page</a>
</div>
