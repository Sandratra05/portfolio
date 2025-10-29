<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Techs from './components/Techs.vue'
import Projects from './components/Projects.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div id="site-root">
    <Navbar />

    <!-- animated background container -->
    <div class="bg-effect" aria-hidden="true">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
      <div class="floating-shape shape-5"></div>
      <div class="floating-shape shape-6"></div>
    </div>

    <main>
      <section id="home" class="section section-hero">
        <Hero />
      </section>

      <section id="about" class="section section-about">
        <About />
      </section>

      <section id="tech" class="section section-techs">
        <Techs />
      </section>

      <section id="projects" class="section section-projects">
        <Projects />
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style>
/* layout helpers are in global stylesheet */

/* Conteneur des animations d'arrière-plan global */
.bg-effect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Formes flottantes */
.floating-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
  filter: blur(60px);
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: 10%;
  left: -100px;
  animation: float 25s ease-in-out infinite;
}

.shape-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  top: 30%;
  right: -80px;
  animation: float 20s ease-in-out infinite reverse;
  animation-delay: -3s;
}

.shape-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  top: 60%;
  left: 15%;
  animation: float 22s ease-in-out infinite;
  animation-delay: -6s;
}

.shape-4 {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  bottom: 15%;
  right: 20%;
  animation: float 28s ease-in-out infinite;
  animation-delay: -10s;
}

.shape-5 {
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 24s ease-in-out infinite;
  animation-delay: -15s;
}

.shape-6 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  bottom: 10%;
  left: 10%;
  animation: float 26s ease-in-out infinite reverse;
  animation-delay: -18s;
}

/* Animation de flottement */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(30px, -30px) rotate(5deg) scale(1.05);
  }
  50% {
    transform: translate(-20px, 20px) rotate(-5deg) scale(0.95);
  }
  75% {
    transform: translate(20px, 15px) rotate(3deg) scale(1.02);
  }
}

/* S'assurer que le contenu principal est au-dessus */
#site-root > :not(.bg-effect) {
  position: relative;
  z-index: 1;
}
</style>
