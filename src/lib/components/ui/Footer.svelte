<script>
    import LinkedinIcon from "$lib/components/icons/Linkedin.svelte";
    import TwitterIcon from "$lib/components/icons/Twitter.svelte";
    import RedditIcon from "$lib/components/icons/Reddit.svelte";
    import CopyrightIcon from "$lib/components/icons/Copyright.svelte";
</script>


<footer class="footer items-center p-4 bg-neutral text-neutral-content">
    <aside class="items-center grid-flow-col">
      <CopyrightIcon/>
      <p>Copyright © 2024 - Tous droits réservés</p>
    </aside> 
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://www.linkedin.com/in/micka%C3%ABl-anicette-484002245/" target="_blank">
        <LinkedinIcon/>
    </a>
      <a href="https://twitter.com/mcmikashi973" target="_blank">
        <TwitterIcon/>
    </a>
      <a href="https://www.reddit.com/user/mcmikashi973/" target="_blank">
        <RedditIcon/>
    </a>
    </nav>
</footer>