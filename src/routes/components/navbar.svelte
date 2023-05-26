<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from 'svelte/transition';

    let ready: Boolean = false;
    onMount(() => ready = true);
</script>

<style lang="scss">
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
            margin-left: 2%;
        }
        .contact {
            margin-right: 2%;
        }
    }
</style>

{#if ready}
<nav class="navbar" transition:fly="{{ y: -400, duration: 500 }}">
    <span class="logo">Hubert Kasperek</span>
    <ul>
        <li><a href="#strengths">strengths</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
    </ul>
    <li class="contact"><a href="#contact"><button class="btn-rnd">Contact me</button></a></li>
</nav>
{/if}
