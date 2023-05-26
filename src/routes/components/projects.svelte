<script lang="ts">
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView_prj1: Boolean = false;
</script>

<style lang="scss">
    .projects {
        height: 100%;
        margin-left: 3%;
        .row {
            display: flex;
            gap: 5%;
            .project {
                width: 45%;
                img {
                    width: 100%;
                    height: 70%;
                }
            }
        }
    }
</style>

<div class="projects">
    <div class="row"
    use:inview={{ unobserveOnEnter: true, rootMargin: '50px' }}
    on:inview_change={({ detail }) => {
        isInView_prj1 = detail.inView;
}}
    >
        {#if isInView_prj1}
        <div class="project" transition:fade="{{ duration: 500 }}">
            <img src="./project-imgs/rogger-img.png" alt="rogger project preview">
            <h3><a href="https://github.com/Hukasx0/rogger" target="_blank">Rogger</a></h3>
            <p>Very lightweight, easy to use, secure, Rust-based Blogging Content Management System. Created with simplicity of use in mind (all operations on the blog are performed through the GUI in the admin panel), cms forces us to watch over security by generating secure, truly random passwords (no more passwords like password123), speed is obtained using the Rust language, optimization and saving Last 100 posts in ram for faster loading. The lightness of the software is due to the Rust language, the Sqlite library and the Redis database.</p>
            <p><a href="https://github.com/Hukasx0/rogger">Project repository</a></p>
            <p>Tech stack: Rust, Actix, SQLite, Redis, PicoCss, HTML, JavaScript, Docker, Shell/Bash</p>
        </div>
        <div class="project" transition:fade="{{ duration: 1500 }}">
            <img src="./project-imgs/zsp2-wagrowiec-img.png" alt="zsp2wagrowiec website project preview">
            <h3><a href="https://hukasx0.github.io/zsp2wagrowiec-strona/" target="_blank">ZSP2 Wagrowiec website</a></h3>
            <p>A dynamic, responsive website without a backend using the Rest API of the school website. The website took first place in the competition for a school website.</p>
            <p><a href="https://github.com/Hukasx0/zsp2wagrowiec-strona">Project repository</a></p>
            <p>Tech stack: HTML, CSS, Bootstrap, JavaScript, JQuery</p>
        </div>
        {/if}
    </div>
</div>
