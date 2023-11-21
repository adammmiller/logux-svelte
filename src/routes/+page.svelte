<script lang="ts">
	import { nanoid } from 'nanoid';
	import { changeSyncMapById, createFilter, createSyncMap, deleteSyncMapById } from '@logux/client';
	import { authStore } from '$lib/stores/auth';
	import { tasksStore } from '$lib/stores/tasks';
	import { clientStore } from '$lib/stores/logux-client';
	import { Filter, filterStore as filter } from '$lib/stores/filter';
	import LoginForm from '$lib/components/login.svelte';

	const authorId = $authStore.id;
	const tasks = createFilter($clientStore, tasksStore, {
		authorId,
		...($filter === Filter.all ? {} : { completed: $filter === Filter.completed })
	});

	let description: string = '';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<LoginForm />

<pre>Auth ID: {JSON.stringify($authStore.id)}</pre>
<h2>Tasks</h2>
<ul>
	{#each $tasks.list as task, index}
		<li>
			<span>
				{task.id} - {task.text} - {task.completed}
			</span>
			<button
				on:click={() => {
					changeSyncMapById($clientStore, tasksStore, task.id, {
						text: 'Some other value'
					});
				}}>Change value
      </button>
			<button
				on:click={() => {
					changeSyncMapById($clientStore, tasksStore, task.id, {
						completed: true
					});
				}}>Complete
      </button>
			<button
				on:click={() => {
					deleteSyncMapById($clientStore, tasksStore, task.id);
				}}>Delete
      </button>
    </li>
	{/each}
</ul>

<h2>Add Todo</h2>
<form>
	<label for="todo">Todo:</label>
	<input id="todo" bind:value={description} />
	<button
		on:click={() => {
			createSyncMap($clientStore, tasksStore, {
				id: nanoid(),
				text: description,
				completed: false,
				authorId
			});
		}}>Add todo</button
	>
</form>
