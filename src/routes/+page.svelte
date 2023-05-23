<script lang="ts">
    import Navbar from "./components/navbar.svelte";
    import Projects from "./components/projects.svelte";
    import Skills from "./components/skills.svelte";
    import Strengths from "./components/strengths.svelte";
</script>

<style lang="scss">
    p {
        color: $txt-color;
    }

    main {
        width: 500px;
        margin-left: 7%;
        display: grid;
        .primary {
            color: $primary-color;
            margin-top: 120px;
            width: 300px;
        }
        .btn {

        }
    }
</style>

<Navbar />

<main>
    <h1 class="primary">Hi, my name is Hubert</h1>
    <p>
        I am a young programmer with a passion for web development. I have skills in Backend, Frontend and penetration testing with a focus on web applications and networks - which makes me a one-man army in the field of web development
    </p>
    <button class="btn">Contact me</button>
</main>

<h2>My projects</h2>
<Projects />

<h2>Skills</h2>
<Skills />

<h2>Strengths</h2>
<Strengths />
