<template>
    <div class="hero">
        <div class="hero-content">
            <div class="text">
                <h1>Hubert Kasperek</h1>
                <p>Architecting Tomorrow's Digital Landscape: A passionate <strong>full-stack developer</strong>, continually evolving and embracing the dynamic synergy between <strong>Back-end</strong> finesse and <strong>Front-end</strong> artistry. Navigating realms of <strong>Cybersecurity</strong> and <strong>Articifial Intelligence</strong>, sculpting seamless user experiences and robust foundations.</p>
                <blockquote>"Programming is my life. Every line of code is a piece of my <strong>passion</strong> and <strong>continuous growth</strong>. With expertise in full-stack development, artificial intelligence, and cybersecurity, I'm ready to shape the <strong>future of technology</strong>, create <strong>innovative solutions</strong>, and execute my visions with <strong>precision</strong> and <strong>determination.</strong>"</blockquote>
                <a-button>Contact me</a-button>
                <a-button>See my work</a-button>
            </div>
            <div class="image">
                <img src="../../assets/logo.png" alt="Obrazek hero" />
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero {
  background-color: #f0f0f0;
  height: 100vh;
  padding: 20px;
}

.hero-content {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  flex: 1;
  padding: 20px;
}

.image {
  flex: 1;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}
</style>