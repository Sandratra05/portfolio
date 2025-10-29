<template>
  <nav class="nav-root" role="navigation">
    <div class="nav-inner">
      <a class="brand" href="#home" @click.prevent="goToSection('#home')">
        <!--<span class="logo" aria-hidden></span>-->
        <span>Sandratra Raben</span>
      </a>

      <div class="nav-links">
        <a 
          v-for="l in links" 
          :key="l.href" 
          :href="l.href"
          @click.prevent="goToSection(l.href)">
          {{ l.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À Propos' },
  { href: '#tech', label: 'Technos' },
  { href: '#projects', label: 'Projets' }
]

function goToSection(href){
  const el = document.querySelector(href)
  
  if(el){
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '64')
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.nav-root{box-shadow:none}
.brand{
  font-size:0.98rem;
  text-decoration:none;
  cursor: pointer;
}
.nav-links a{
  font-size:0.95rem;
  transition: all 0.2s ease;
  cursor: pointer;
}
.nav-links a:hover, .brand:hover{
  color: var(--color-primary);
  background: rgba(16,54,125,0.04);
}
</style>
