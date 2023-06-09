<script lang="ts">
    import Navbar from "./components/navbar.svelte";
    import Projects from "./components/projects.svelte";
    import Skills from "./components/skills.svelte";
    import Strengths from "./components/strengths.svelte";
    import Footer from "./components/footer.svelte";

    import { onMount } from "svelte";
    import { fly, fade } from 'svelte/transition';

    let ready: Boolean = false;
    onMount(() => ready = true);
</script>

<style lang="scss">
    p {
        color: $txt-color;
    }
    main {
        display: flex;
        align-items: center;
        height: 100%;
        .intro {
            width: 80%;
            max-width: 500px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .primary {
                color: $primary-color;
                width: 300px;
                font-size: 2.8rem;
            }
            p {
                font-size: 1.2rem;
            }
            span {
                color: #FFFFFF;
            }
            .btn-container {
                display: flex;
                gap: 5%;
                .btn {
                    width: 45%;
                }
            }
        }
    }
    .bg-text {
        color: #24283B;
        display: flex;
        flex-direction: column;
        font-size: 60px;
        margin-top: 30px;
        span {
            margin: 40px;
            margin-left: 240px;
            font-size: 70px;
        }
    }
    .heading {
        text-align: center;
    }

    @media (min-width: 1024px) {
        main .intro {
            width: 60%;
            max-width: 800px;
            margin: 0 auto;
            .primary {
                font-size: 3.5rem;
            }
            p {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 1480px) {
        .bg-text {
            display: none;
        }
    }
</style>

<Navbar />
{#if ready}
<main loading="lazy"  transition:fly="{{ x: -100, duration: 500 }}" style="background:url(./background.jpg)  center / cover no-repeat; background-color:#444; background-blend-mode: overlay; height: 100vh;">
    <div class="intro">
        <h1 class="primary" transition:fly="{{ x: -200, duration: 1000 }}">Hi, my name is <span class="gradient-logo">Hubert</span></h1>
        <p transition:fly="{{ x: -200, duration: 1500 }}">
            I am a young programmer with a passion for web development. I have skills in <span>Backend</span>, <span>Frontend</span> and <span>penetration testing</span> with a focus on web applications and networks - which makes me a one-man army in the field of web development
        </p>
        <div class="btn-container">
            <a href="mailto:hubertkasp13@gmail.com" class="btn" transition:fly="{{ y: 200, duration: 500 }}">Contact me</a>
            <a href="#projects" class="btn" transition:fly="{{ y: 200, duration: 1000 }}">Check out my projects</a>
        </div>
    </div>
</main>
{/if}

<h2 class="heading" id="strengths">My strengths</h2>
<Strengths />

<h2 class="heading" id="skills">My skills</h2>
<Skills/>

<h2 class="heading" id="projects">My projects</h2>
<Projects />

<Footer />
