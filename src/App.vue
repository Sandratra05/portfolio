<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import SiteFooter from './components/SiteFooter.vue'

// Theme management
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<template>
  <div id="site-root">
    <Navbar :isDark="isDark" @toggle-theme="toggleTheme" />
    <router-view />
    <SiteFooter />
  </div>
</template>

<style>
</style>