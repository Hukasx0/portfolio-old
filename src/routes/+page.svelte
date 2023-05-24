<script lang="ts">
    import Navbar from "./components/navbar.svelte";
    import Projects from "./components/projects.svelte";
    import Skills from "./components/skills.svelte";
    import Strengths from "./components/strengths.svelte";
    import Contact from "./components/contact.svelte";
    import Footer from "./components/footer.svelte";
</script>

<style lang="scss">
    p {
        color: $txt-color;
    }
    main {
        display: flex;
        .intro {
            width: 500px;
            margin-left: 7%;
            display: grid;
            .primary {
                color: $primary-color;
                margin-top: 120px;
                width: 300px;
            }
            span {
                color: #FFFFFF;
            }
            .btn {

            }
        }
    }

    .bg-text {
        color: #24283B;
        display: flex;
        flex-direction: column;
        font-size: 60px;
        span {
            margin: 20px;
            margin-left: 240px;
        }
    }
</style>

<Navbar />

<main>
    <div class="intro">
        <h1 class="primary">Hi, my name is Hubert</h1>
        <p>
            I am a young programmer with a passion for web development. I have skills in <span>Backend</span>, <span>Frontend</span> and <span>penetration testing</span> with a focus on web applications and networks - which makes me a one-man army in the field of web development
        </p>
        <button class="btn">Contact me</button>
    </div>
    <div class="bg-text">
        <span>&lt;Frontend /&gt;</span>
        <span>Back.end()</span>
        <span>$ Pentesting</span>
    </div>
</main>

<h2>My strengths</h2>
<Strengths />

<h2>My skills</h2>
<Skills />

<h2>My projects</h2>
<Projects />

<h2>Contact me</h2>
<Contact />

<Footer />
