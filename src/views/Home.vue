<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Techs from '../components/Techs.vue'
import Projects from '../components/Projects.vue'
</script>

<template>
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
</template>
