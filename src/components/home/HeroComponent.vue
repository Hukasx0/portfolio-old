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
                <div class="cup">
                  <div class="cuptop">
                    <div class="vapour">
                      <span style="--i:1;"></span>
                      <span style="--i:3;"></span>
                      <span style="--i:16;"></span>
                      <span style="--i:5"></span>
                      <span style="--i:13;"></span>
                      <span style="--i:20;"></span>
                      <span style="--i:6;"></span>
                      <span style="--i:7;"></span>
                      <span style="--i:10;"></span>
                      <span style="--i:8;"></span>
                      <span style="--i:17;"></span>
                      <span style="--i:11;"></span>
                      <span style="--i:12;"></span>
                      <span style="--i:14;"></span>
                      <span style="--i:2;"></span>
                      <span style="--i:9;"></span>
                      <span style="--i:15;"></span>
                      <span style="--i:4;"></span>
                      <span style="--i:19;"></span>
                      <span style="--i:1;"></span>
                    </div>
                    <div class="cuptopopen">
                      <div class="coffee"></div>
                    </div>
                  </div>
                  <div class="handle"></div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero {
  background-color: #16161D;
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

.cup {
  position: relative;
  width: 280px;
  height: 300px;
  background: linear-gradient(to left, #F9F9F9, #D9D9D9);
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
}

.cuptop {
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #F9F9F9, #D9D9D9);
  border-radius: 50%;
}

.cuptopopen {
  position: absolute;
  top: 5px;
  left: 10px;
  width: calc(100% - 20px);
  height: 50px;
  background: linear-gradient(to left, #F9F9F9, #D9D9D9);
  box-sizing: border-box;
  border-radius: 50%;
  overflow: hidden;
}

.coffee {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#704f37, #6F4E37);
  border-radius: 50%;
}
.handle {
  position: absolute;
  right: -70px;
  top: 40px;
  width: 160px;
  height: 180px;
  border: 25px solid #D9D9D9;
  border-left: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-radius: 50%;
  transform: rotate(42deg);
}

.vapour {
  position: relative;
  display: flex;
  z-index: 1;
  padding: 0 20px;
}

.vapour span {
  position: relative;
  bottom: 50px;
  display: block;
  margin: 0 2px 50px;
  min-width: 8px;
  height: 120px;
  background: #FFF;
  border-radius: 50%;
  animation: animate 5s linear infinite;
  opacity: 0;
  filter: blur(8px);
  animation-delay: calc(var(--i) * -0.5s );
}
@keyframes animate {
  0% {
    transform: translateY(0) scaleX(1);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translateY(-150px) scaleX(5);
  }
  95% {
    opacity: 0;
  }
  100% {
    transform: translateY(-300px) scaleX(10);
  }
}
</style>