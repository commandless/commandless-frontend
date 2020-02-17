<script>
	import Chip from './Chip.svelte';
	import Recipe from './Recipe.svelte';
	import RecipeFlag from './RecipeFlag.svelte';
	import {mockRecipes, mockCommand} from './mock.js';
	export let name;
	export let value = '';
	export let chips = [];
	const recipes = mockRecipes;
	const command = mockCommand;
	let currentRecipe = command.recipes[0];
	let flagValues = command.inputs.flags.map(flag => '');
	let argValues = command.inputs.args.map(arg => '');

	$: parsedArgValues = argValues.join(' ');
	$: parsedFlags =  command.inputs.flags.map((flag,i) => {
		let flagString;
		let valueString = flagValues[i];
		if (flag.short) {
			flagString = `-${flag.short}`;
		} else if (flag.long) {
			flagString = `--${flag.long}`;
		}
		if (flagString && valueString){
			return (`${flagString}=${valueString}`);
		}
		return '';
	}).join(' ');
	const handleKeyUp = (event) => {
		console.log(event.key);
		if (value.trim() === '' && event.key !== 'Backspace') return;
		if (event.key === 'Enter') {
			chips = [...chips, ...value.split(' ').map(val => val.trim())];
			value = '';
		} else if (event.key === ' ' && value !== ' ') {
			chips = [...chips, value.trim()];
			value = '';
		} else if (event.key === 'Backspace' && value.length === 0) {
			chips = chips.slice(0, chips.length - 2);
		}
	}
</script>

<main>
	<div class="search-bar">
		🔍
		<span class="chip-holder">
			{#each chips as chip, i}
				<Chip chip={chip}/>
			{/each}
		</span>

		<input bind:value={value} on:keyup={handleKeyUp}>
	</div>
	{#each recipes as {description, link, stars}, i}
		<Recipe
				link={link}
				stars={stars}
				description={description}
		/>
	{/each}
	<div class="command">
		<h2>Recipe: {currentRecipe.description}</h2>
		<h2>Command: {command.description}</h2>
		<div>
			<h2>Args</h2>
			{#each command.inputs.args as arg, i}
				<RecipeFlag flag={arg} bind:value={argValues[i]} />
			{/each}
		</div>
		<div>
			<h2>Flags</h2>
			{#each command.inputs.flags as flag, i}
				<RecipeFlag flag={flag} bind:value={flagValues[i]}/>
			{/each}
		</div>
	</div>
	<div class="command-prompt">{command.resolution.bin} {parsedArgValues} {parsedFlags}</div>

</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	.chip-holder {
		min-height: 20px;
	}
	.search-bar {
		border: 1px solid #666666;
		border-radius: 50px;
		width: 500px;
		padding: 2px 2px 2px 20px;
	}
	input {
		border: none;
		outline: none;
		padding-top: 15px;
		display: inline-block;
	}

	h2 {
		margin-left: 10px;
	}

	.command {
		border: 3px solid gray;
		border-radius: 5px;
		margin-bottom: 80px;
	}
	.command-prompt {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: black;
		color: white;
		padding: 20px;
		border: 10px solid white;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


</style>
