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
    padding-bottom: 66%;
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
  .credit-block {
    margin: 10px 0 5px;
  }
  button {
    background-color:#D1AC25;
    border-radius:8px;
    cursor:pointer;
    color:#000;
    font-weight:bold;
    padding:13px 32px;
    text-shadow:0px 1px 0px #3d768a;
    margin: 5px 0;
  }
  button:active {
    position:relative;
    top:1px;
  }
  button:disabled {
    opacity: 0.4;
  }
</style>

<script>
  import copy from 'copy-to-clipboard';
  
  import loadingBkgSrc from './../images/loadingbackground.jpg';
  import loadingBatLogoSrc from './../images/loadingbatlogo.png';

  export let batThought = {};
  export let imgSrc = '';
  export let onClick = () => {};
  export let isLoading = true;
  
  let isCopying = false;
  const copyLink = () => {
    isCopying = true;
    copy(`https://thinking-about-batman.glitch.me/thought/${batThought._id.$oid}`, {
      debug: true,
      onCopy: () => {
        alert('link to bat-thought copied to clipboard');
        isCopying = false;
      },
    });
  }

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

<h3 class="credit-block">
  {#if !isLoading}
    credit: <a href="{batThought.credit.link}">{batThought.credit.name}</a>
  {:else}
    thinking...
  {/if}
</h3>

<button on:click={copyLink} disabled={isLoading}>{isCopying ? 'copying link...' : 'copy link to this bat-thought'}</button>

<button on:click={onClick} disabled={isLoading}>think a new bat-thought</button>