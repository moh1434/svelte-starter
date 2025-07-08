<script lang="ts">
	import { route, p } from '@/router';

</script>
<div>
  <h1>Home {route.pathname}</h1>
  <a href={p('/foo')}>go to Foo page</a>
</div>