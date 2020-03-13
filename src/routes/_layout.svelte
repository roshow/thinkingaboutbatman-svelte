<svelte:head>
  <style>
    body {
      color: white;
      background: black;
    }
  </style>
</svelte:head>

<style>
	main {
		position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    margin: auto;
	}
  .title-treatment {
    max-width: 356px;
    width: 100%;
    margin: 10px 0;
  }
</style>

<script>
  import titleTreatmentSrc from './../images/titletreatment.png'
</script>

<main>
  <img class="title-treatment" src={titleTreatmentSrc} alt="thinking about batman title">
	<slot></slot>
</main>