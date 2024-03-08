
<script>
  import "../app.css";
	import Header from "$lib/components/ui/Header.svelte";
	import Footer from "$lib/components/ui/Footer.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
  <link href="https://fonts.googleapis.com/css2?family=Norican&family=Pacifico&display=swap" rel="stylesheet">
</svelte:head>

<div class="h-screen flex flex-col justify-between">
  <Header/>
  <main class="p-4">
    <slot />
  </main>
  <Footer/>
</div>
