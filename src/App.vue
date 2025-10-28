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
    <div class="bg-effect" aria-hidden="true"></div>

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
</style>
