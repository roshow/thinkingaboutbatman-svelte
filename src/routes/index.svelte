<svelte:head>
	<title>Thinking About Batman</title>
</svelte:head>

<style>
	@keyframes spin {
		0% {
      transform: rotate(0deg);
		}
		100% {
      transform: rotate(720deg);
		}
	}
  
  @keyframes zoom-in-out {
    0% {
      transform: scale(0.1);
		}
    50% {
      transform: scale(1.2);
    }
		100% {
      transform: scale(0.1);
		}
  }
  
  .title-treatment {
    max-width: 356px;
    width: 100%;
    margin: 10px 0;
  }
  
  .bat-thought-container {
    position: relative;
    height: 0px;
    width: 95%;
    padding-bottom: 63%;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    background: #fff url("") no-repeat center;
    border: 10px solid #D1AC25;
    border-radius: 50%;
    cursor: pointer;
  }
  
   @media screen and (max-width: 750px) {
    .bat-thought-container {
      border-width: 7px;
    }
  }
	.loading-img {
    position: absolute;
    width: 100%;
    height: 150%;
    top: -25%;
    object-fit: cover;
		animation: spin 1s linear infinite;
	}
  .loading-logo {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: zoom-in-out 1.5s ease infinite;
	}
</style>

<script>
  
  import { onMount } from 'svelte';
  
  let imgSrc = '';
  let loadingThought = true;
  let batThought = {};


  async function getRandomBatThought (isFirstThought) {
    if (!isFirstThought) {
      imgSrc = '';
      loadingThought = true;
    }
    
		// get the random thought info from API
   	const res = await fetch('/thought.json');
   	batThought = await res.json();
		
		// preload image before rendering it
    const image = new Image();
    image.src = `https://thinking-about-batman.s3.us-east-2.amazonaws.com/images/${batThought.img.src}`;
    image.decode().then(() => {
      // add a little timeout so people can see the fun spinner between thoughts
      setTimeout(() => {
        loadingThought = false;
        imgSrc = image.src;
      }, 1000);
    });
  }
  
  const handleOnClick = () => {
   getRandomBatThought();
  }
  
  
  onMount(() => {
   getRandomBatThought(true);
  });
  
</script>


<img class="title-treatment" src="https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Fthinkingaboutbatman_title.png?v=1583426604177" alt="thinking about batman title">

<div
  class="bat-thought-container" 
  style="background-image: url({imgSrc}); background-size: { (!loadingThought && batThought.img && batThought.img.scale) || 'cover'};"
  on:click={handleOnClick}
>
  {#if loadingThought}
    <img class="loading-img" src="https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Fbatspin2.jpg?v=1583965428499">
    <img class="loading-logo" src="https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Floadingbatlogo.png?v=1583975904157">
  {/if}
</div>


  <caption>
    {#if !loadingThought}
      credit: <a href="{batThought.credit.link}">{batThought.credit.name}</a>
    {:else}
      thinking...
    {/if}
</caption>

<button on:click={handleOnClick} disabled="{loadingThought}">think a new bat-thought</button>
