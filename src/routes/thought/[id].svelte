<script context="module">

	export async function preload(page, session) {
    const { id } = page.params;
    
    const res = await this.fetch(`thought/${id}.json`);
    let batThought = {};
    let isLoading = true;
    if (res.status === 200) {
      batThought = await res.json();
      isLoading = false;
    }
    
		return { batThought, isLoading };
	}
</script>

<script>

  import { onMount } from 'svelte';

  import Thought from './../../components/Thought.svelte';

  export let batThought;
  export let isLoading;

</script>

<Thought
  batThought={batThought}
  imgSrc={`https://thinking-about-batman.s3.us-east-2.amazonaws.com/images/${batThought.img.src}`}
  isLoading={isLoading}
/>