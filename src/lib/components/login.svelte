<script lang="ts">
	import { auth } from '$lib/stores/auth';
	let name = 'admin';
	let password = 'admin';
</script>

<form>
	<label for="name">name:</label>
	<label for="password">name:</label>
	<input id="name" bind:value={name} type="text" />
	<input id="password" bind:value={password} type="password" />
	<button on:click|preventDefault={() => auth({ name, password })}>Login</button>
</form>
