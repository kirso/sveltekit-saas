<script lang="ts">
	import YouTubeIcon from '$lib/icons/YouTube.svelte'
	import GitHubIcon from '$lib/icons/GitHub.svelte'
	import DiscordIcon from '$lib/icons/Discord.svelte'
	import PulsingHeart from './PulsingHeart.svelte'
</script>

<footer
	class="bg-surface-1 mt-[5vh] flex items-center justify-center gap-2 py-2"
>
	<div class="flex shrink-0 items-center justify-center gap-2">
		Made with
		<PulsingHeart />
		by <a href="https://www.kirillso.com">kirso</a>
	</div>

	<a
		href="https://github.com/kirso/sveltekit-saas"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="link to the source code and github repository"
		class="hover:text-emphasis-hover"
	>
		<GitHubIcon class="w-5" />
	</a>
</footer>

<style>
	footer {
		view-transition-name: footer;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		&:hover {
			color: var(--text-emphasis-hover);
			transition: color 0.2s ease-in-out;
			text-decoration: underline;
			text-decoration-style: dotted;
			text-decoration-color: var(--text-emphasis-hover);
			text-decoration-thickness: 1px;
			text-underline-offset: 4px;
			text-decoration-skip-ink: none;
		}
	}
</style>
