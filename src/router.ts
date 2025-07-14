import { createRouter } from 'sv-router';
import Home from '@/features/home/index.svelte';
import Foo from '@/features/foo/index.svelte';


export const { p, navigate, isActive, preload, route } = createRouter({
	'/': Home,
	'/foo': {
		'/': Foo,
		// layout: Layout,
	},
	// '*notfound': NotFound,
});