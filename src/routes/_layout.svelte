<svelte:head>
  <style>
    body {
      color: white;
      background: black;
    }
  </style>
</svelte:head>

<style>
	.app-container {
		position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 5px;
	}
  .title-treatment {
    max-width: 356px;
    width: 100%;
    margin: 0 0 20px;
  }
  .disclaimer {
    color: gray;
    margin: 60px 0 0;
    text-align: left;
    width: 100%;
  }
</style>

<script>
  import titleTreatmentSrc from './../images/titletreatment.png'
</script>

<div class="app-container">

  <img class="title-treatment" src={titleTreatmentSrc} alt="thinking about batman title">

  <slot></slot>
  
  <h5 class="disclaimer">
    thinkingaboutbatman.com is an unofficial fansite by <a href="https://roshow.net">roshow</a>
  </h5>

</div>

