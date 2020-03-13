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
  
  .bat-thought-container {
    position: relative;
    height: 0px;
    width: 100%;
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
  import loadingBkgSrc from './../images/loadingbackground.jpg';
  import loadingBatLogoSrc from './../images/loadingbatlogo.png';

  export let batThought = {};
  export let imgSrc = '';
  export let onClick = () => {};
  export let isLoading = true;

</script>

<div
  class="bat-thought-container" 
  style="background-image: url({!isLoading ? imgSrc : ''}); background-size: { (!isLoading && batThought.img && batThought.img.scale) || 'cover'};"
  on:click={onClick}
>
  {#if isLoading}
    <img class="loading-img" src={loadingBkgSrc} alt="loading background">
    <img class="loading-logo" src={loadingBatLogoSrc} alt="loading bat logo">
  {/if}
</div>

<h3>
  {#if !isLoading}
    credit: <a href="{batThought.credit.link}">{batThought.credit.name}</a>
  {:else}
    thinking...
  {/if}
</h3>

<button on:click={onClick} disabled={isLoading}>think a new bat-thought</button>
