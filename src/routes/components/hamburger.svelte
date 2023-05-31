<script lang="ts">
    import { fly } from 'svelte/transition';

    let menuOpen: Boolean = false;

    function toggleMenu(): void {
        menuOpen = !menuOpen;
    }

    function menuClose(): void {
        menuOpen = false;
    }
</script>

<style lang="scss">
    .hamburger {
        cursor: pointer;
    }

    .hamburger-menu {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            li {
                margin-top: 40%;
            }
        }

        li a {
            color: $primary-color;
            font-size: 1.5rem;
            &:hover {
                color: #FFFFFF;
            }
        }

        .contact {
            a button {
                font-size: 1.3rem;
            }
            margin-right: 2%;
        }
    }

@media (min-width: 742px) { 
    .hamburger {
        display: none;
    }

    .hamburger-menu {
        display: none;
    }
}
</style>

{#if menuOpen}
<div class="hamburger-menu" on:click={menuClose} transition:fly="{{ x: 1000, duration: 800 }}">
    <ul class="items">
        <li><a href="#strengths">strengths</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><div>
            <a href="https://github.com/Hukasx0"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(42, 195, 222, 1);"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg></a>
            <a href="https://www.buymeacoffee.com/Hukasx0"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(42, 195, 222, 1);"><path d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z"></path></svg></a>
        </div></li>
        <li class="contact"><a href="mailto:hubertkasp13@gmail.com"><button class="btn-rnd">Contact me</button></a></li>
    </ul>    
</div>
{/if}

<svg class="hamburger" on:click={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" style="fill: rgba(42, 195, 222, 1);"></path>
</svg>
