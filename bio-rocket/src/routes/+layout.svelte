<script lang="ts">
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';

	import {AppShell, AppBar, initializeStores, Drawer, getDrawerStore, storePopup, type DrawerSettings} from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	let isHovered = false;

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}
	function drawerClose(): void {
		drawerStore.close();
	}
	let listboxItemActive: (href: string) => string;

	$: {
		listboxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '');
	}

</script>


<AppShell>
	<slot />
</AppShell>