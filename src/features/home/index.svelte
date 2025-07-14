<script lang="ts">
	import { route, p } from "@/router";
</script>

<div>
	<h1 class="text-3xl font-bold underline">Home {route.pathname}</h1>
	<a class="text-xl pt-4 block" href={p("/foo")}>go to Foo page</a>
</div>
