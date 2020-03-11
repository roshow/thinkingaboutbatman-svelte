<svelte:head>
	<title>Thinking About Batman</title>
</svelte:head>

<style>
	@keyframes spin {
		0% {
      transform: rotate(0deg);
		}
		100% {
      transform: rotate(360deg);
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
    width: 50%;
    top: 25%;
    left: 25%;
		animation: spin 0.75s linear infinite;
	}
</style>

<script>
  
  import { onMount } from 'svelte';
  
  let loadingThought = true;
  let imgSrc = '';
  let batThought = { img: {} };
  let spinner;
  let loadingGif = 'https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Fezgif-7-92ba9df93b15.gif?v=1583894863557';
  
  const spinners = [
    'https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Fmethod-draw-image.svg?v=1583549242710',
    'https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Ftdklogo.svg?v=1583808420370',
    'https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Fbatmang66logo.svg?v=1583809179302',
  ];
  
  spinner = spinners[Math.floor(Math.random()*spinners.length)];

  async function getRandomBatThought () {
    imgSrc = '';
    spinner = spinners[Math.floor(Math.random()*spinners.length)];
    loadingThought = true;
    
		// get the random thought info from API
   	const res = await fetch('/thought.json');
   	batThought = await res.json();
		
		// preload image before rendering it
		return new Promise((resolve) => {
			const image = new Image();
			image.src = `https://thinking-about-batman.s3.us-east-2.amazonaws.com/images/${batThought.img.src}`;
			image.decode().then(() => {
				// add a little timeout so people can see the fun spinner between thoughts
				setTimeout(() => {
          loadingThought = false;
          imgSrc = image.src;
					resolve(batThought);
				}, 500);
			});
		});
  }
  
  const handleOnClick = () => {
   getRandomBatThought();
  }
  
  
  onMount(() => {
   getRandomBatThought();
  });
  
</script>


<img class="title-treatment" src="https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Fthinkingaboutbatman_title.png?v=1583426604177" alt="thinking about batman title">

<div
  class="bat-thought-container" 
  style="background-image: url({loadingThought? loadingGif : imgSrc}); background-size: { batThought.img.scale || 'cover'}; background-color: {loadingThought ? '#D1AC25' : '#fff'};"
  on:click={handleOnClick}
>
</div>


  <caption>
    {#if !loadingThought}
      credit: <a href="{batThought.credit.link}">{batThought.credit.name}</a>
    {:else}
      thinking...
    {/if}
</caption>

<button on:click={handleOnClick} disable={loadingThought}>think a new bat-thought</button>
