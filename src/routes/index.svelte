<svelte:head>
	<title>Thinking About Batman</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

  import Thought from './../components/Thought.svelte';

  let isLoading = true;
  let batThought = {};
  let imgSrc = '';

  async function getRandomBatThought (isFirstThought) {
    if (!isFirstThought) {
      isLoading = true;
    }
    
		// get the random thought info from API
    const response = await axios.get('/thought.json', {
      params: {
        exclude: batThought._id && batThought._id.$oid, // don't show the same bat-thought twice
      },
    });
    batThought = response.data;
		
		// preload image before rendering it
    const image = new Image();
    image.src = `https://thinking-about-batman.s3.us-east-2.amazonaws.com/images/${batThought.img.src}`;
    image.decode().then(() => {
      // add a little timeout so people can see the fun spinner between thoughts
      setTimeout(() => {
        isLoading = false;
        imgSrc = image.src;
      }, 1000);
    });
  }
  
  const onClick = () => {
    if (!isLoading) getRandomBatThought();
  }

  onMount(() => {
   getRandomBatThought(true);
  });
  
</script>

<Thought {...{ batThought, imgSrc, isLoading, onClick}} />
