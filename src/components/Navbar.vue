<template>
  <nav class="nav-root" role="navigation">
    <div class="nav-inner">
      <a class="brand" href="#home">
        <span class="logo" aria-hidden></span>
        <span>MonPortfolio</span>
      </a>

      <div class="nav-links" ref="links">
        <a v-for="l in links" :key="l.href" :href="l.href" :class="{active: active===l.href}">{{ l.label }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À Propos' },
  { href: '#tech', label: 'Technos' },
  { href: '#projects', label: 'Projets' }
]

const active = ref('#home')

let observer
onMounted(()=>{
  const sections = Array.from(document.querySelectorAll('section'))
  observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        active.value = `#${e.target.id}`
      }
    })
  },{threshold:0.45})
  sections.forEach(s=>observer.observe(s))
})
onBeforeUnmount(()=>{ if(observer) observer.disconnect() })
</script>

<style scoped>
/* component-scoped small tweaks */
.nav-root{box-shadow:none}
.brand{font-size:0.98rem}
.nav-links a{font-size:0.95rem}
</style>
