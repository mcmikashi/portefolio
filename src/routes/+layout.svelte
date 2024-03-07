<script>
    import "../app.css";
    import LinkedinIcon from "$lib/Icons/Linkedin.svelte";
    import TwitterIcon from "$lib/Icons/Twitter.svelte";
    import RedditIcon from "$lib/Icons/Reddit.svelte";
    import CopyrightIcon from "$lib/Icons/Copyright.svelte";
  </script>
  
<div class="h-screen flex flex-col justify-between">
<header  class="navbar bg-neutral">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="/">Mickaël Anicette</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Projects</a></li>
        <li><a>Projects</a></li>
        <li><a>Projects</a></li>
      </ul>
    </div>
</header>

<main class="p-4">
  <slot />
</main>

<footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <aside class="items-center grid-flow-col">
    <CopyrightIcon/>
    <p>Copyright © 2024 - Tous droits réservés</p>
  </aside> 
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><LinkedinIcon/></a>
    <a><TwitterIcon/></a>
    <a><RedditIcon/></a>
  </nav>
</footer>

</div>
