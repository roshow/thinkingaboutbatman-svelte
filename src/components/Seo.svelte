<script>
  export let description = 'a fansite by roshow';
  export let url = 'https://thinkingaboutbatman.com';
  export let image = 'https://cdn.glitch.com/7a8fe666-2a22-45bf-90af-1ff85fad87ea%2Floadingbatlogo.png?v=1583975904157';
</script>

<svelte:head>
  <title>Thinking About Batman</title>
  <meta name="description" content="{description}" />
  <meta name="keywords" content="batman"/>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="{url}">
  <meta property="og:title" content="Thinking About Batman">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="{image}">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="{url}">
  <meta property="twitter:title" content="Thinking About Batman">
  <meta property="twitter:description" content="{description}">
  <meta property="twitter:image" content="{image}">
</svelte:head>