<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView: Boolean = false;
</script>

<style lang="scss">
    .strengths {
        display: flex;
        flex-grow: 1;
        align-items: center;
        gap: 5%;
        margin-left: 5%;
        margin-right: 5%;
        @media (max-width: 778px) {
            flex-direction: column;
        }
        @media (min-width: 742px) { 
            height: 50%;
        }
        .item {
            display: flex;
            text-align: center;
            @media (max-width: 778px) {
                height: 30%; 
            }
            flex-direction: column;
            svg {
                align-self: center;
            }
            h3 {
                font-size: 1.5rem;
                align-self: center;
            }
            p {
                font-size: 1.3rem;
                @media (max-width: 778px) {
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>

<div class="strengths"
use:inview={{ unobserveOnEnter: true, rootMargin: '50px' }}
on:inview_change={({ detail }) => {
    isInView = detail.inView;
}}
>
    {#if isInView}
    <div class="item animate" transition:fly="{{ x: -200, duration: 2000 }}">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" style="fill: rgba(42, 195, 222, 1);"><path d="M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z"></path></svg>
        <h3>Lightweight software</h3>
        <p>In my projects I mainly focus on lightness and minimalism, which makes projects cheap and easy to maintain, fast and energy-efficient</p>
    </div>
    <div class="item animate" transition:fly="{{ x: -400, duration: 1500 }}">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" style="fill: rgba(42, 195, 222, 1);"><path d="M6.787 7h10.426c-.108-.158-.201-.331-.318-.481l2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812c-.118.151-.21.323-.319.481zM5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58.204.052.411.085.618.118V16h2v5.914a6.23 6.23 0 0 0 .618-.118 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9H5.756z"></path></svg>
        <h3>Security</h3>
        <p>My knowledge in the field of cybersecurity helps me write secure code, which results in less number of vulnerabilities. I can also conduct penetration tests of web applications</p>
    </div>
    <div class="item animate" transition:fly="{{ x: -600, duration: 1000 }}">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" style="fill: rgba(42, 195, 222, 1);"><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
        <h3>one-man army</h3>
        <p>Knowledge of Frontend, Backend and Penetration testing allows me to better understand the project and deal with various aspects of the project</p>
    </div>
    {/if}
</div>
