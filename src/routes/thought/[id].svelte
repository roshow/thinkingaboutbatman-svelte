<script context="module">

	export async function preload(page, session) {
    const { id } = page.params;
    
    const res = await this.fetch(`thought/${id}.json`);
    let batThought = {};
    let isLoading = true;
    if (res.status === 200) {
      batThought = await res.json();
      isLoading = false;
      return { batThought, isLoading };
    }
    
    this.error(404, 'Not found');
	}
</script>

<script>

  import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import Seo from './../../components/Seo.svelte';
  import Thought from './../../components/Thought.svelte';

  export let batThought;
  export let isLoading;
  
  const onClick = () => {
    goto('/');
  };

</script>

<Seo
  description="{batThought.credit.name}"
  url="https://thinkingaboutbatman.com/thought/{batThought._id.$oid}"
  image="{batThought.img.src}"
/>

<Thought
  batThought={batThought}
  isLoading={isLoading}
  onClick={onClick}
/>