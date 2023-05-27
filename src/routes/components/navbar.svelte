<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from 'svelte/transition';

    let ready: Boolean = false;
    onMount(() => ready = true);
</script>

<style lang="scss">
    @media (min-width: 742px) { 
        .navbar {
        background-color: $second-bg-color;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            color: $txt-color;
            font-size: 1.4rem;
            &:hover {
                color: #FFFFFF;
            }
        }
        ul {
            list-style-type: none;
        }
        li {
            display: inline-block;
        }
        .logo {
            color: $logo-color;
            font-size: 2rem;
            margin-left: 2%;
            &:hover {
                color: $logo-color;
            }
        }
        .contact {
            a button {
                font-size: 1.2rem;
            }
            margin-right: 2%;
        }

        .hamburger {
            display: none;
        }
    }
}

@media (max-width: 741px) { 
    .navbar {
        background-color: $second-bg-color;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            color: $txt-color;
            &:hover {
                color: #FFFFFF;
            }
        }
        ul {
            list-style-type: none;
        }
        li {
            display: inline-block;
        }
        .logo {
            color: $logo-color;
            font-size: 1.5rem;
            margin-left: 2%;
            &:hover {
                color: $logo-color;
            }
        }
        .contact {
           display: none;
        }
        .regNav {
            display: none;
        }
    }
}
</style>

{#if ready}
<nav class="navbar" transition:fly="{{ y: -400, duration: 500 }}">
    <a href="/" class="logo gradient-logo">Hubert Kasperek</a>
    <ul class="regNav">
        <li><a href="#strengths">strengths</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
    </ul>
    <li class="contact"><a href="#contact"><button class="btn-rnd">Contact me</button></a></li>
    <svg class="hamburger" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" style="fill: rgba(42, 195, 222, 1);"></path>
      </svg>
</nav>
{/if}
  
