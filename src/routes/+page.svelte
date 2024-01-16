<script>
	export let data
</script>

<main class="content-grid grow gap-y-4 text-lg lg:gap-y-8">
	<h2 class="breakout text-4xl font-bold">100xify</h2>
	{#if data.session}
		<p>You are logged in as: {data.session.user.email}</p>
	{:else}
		<p>You are not logged in!</p>
	{/if}
</main>
