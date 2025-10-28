<template>
  <div>
    <h2>Technologies</h2>
    <p style="color:var(--muted);margin-bottom:1rem">Voici quelques-unes des technologies que j'utilise et mon niveau approximatif.</p>

    <div class="tech-list">
      <div v-for="t in techs" :key="t.name" class="tech-item">
        <div class="tech-name"><span>{{t.name}}</span><small>{{t.level}}%</small></div>
        <div class="progress" aria-hidden>
          <i :style="{width: t.level + '%'}"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const techs = ref([
  { name: 'Vue.js', level: 85 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Vite', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'Tailwind / CSS', level: 75 }
])
</script>

<style scoped>
.tech-list{margin-top:0.5rem}
.tech-item small{color:var(--muted)}
</style>
