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
  { href: '#tech', label: 'Technologies' },
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
.nav-root {
  box-shadow: none;
}

.brand {
  font-size: 0.98rem;
  text-decoration: none;
  cursor: pointer;
}

.brand:hover {
  color: var(--color-primary);
}

.nav-links a {
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translateX(-50%);
}

.nav-links a:hover {
  color: var(--color-primary);
}

.nav-links a:hover::after {
  width: 80%;
}
</style>
