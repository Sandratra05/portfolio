<script setup>
import { ref } from 'vue'

const langages = ref([
  { name: 'Java', level: 80 },
  { name: 'C#', level: 70 },
  { name: 'C', level: 60 },
  { name: 'Python', level: 70 },
  { name: 'PHP', level: 80 },
  { name: 'JavaScript', level: 70 },
  { name: 'Visual Basic', level: 50 }
])

const frameworks = ref([
  { name: 'Spring Boot', level: 90 },
  { name: 'ASP.NET', level: 50 },
  { name: 'Flight PHP', level: 90 },
  { name: 'VueJS', level: 60 }
])

const basesDonnees = ref([
  { name: 'MySQL', level: 95 },
  { name: 'PostgreSQL', level: 93 },
  { name: 'Oracle', level: 50 }
])

const outils = ref([
  { name: 'Git', level: 70 },
  { name: 'Docker', level: 50 },
  { name: 'Linux', level: 90 },
  { name: 'Postman', level: 60 },
  { name: 'Figma', level: 60 }
])
</script>

<template>
  <div class="tech-container">
    <h1>Technologies</h1>
    <p style="color:var(--muted);margin-bottom:1rem; text-align: center;">Voici quelques-unes des technologies que j'utilise et mon niveau approximatif.</p>

    <!-- Langages -->
    <div class="tech-section">
      <h3>Langages</h3>
      <div class="tech-list">
        <div v-for="t in langages" :key="t.name" class="tech-item">
          <div class="tech-name"><span>{{t.name}}</span><small>{{t.level}}%</small></div>
          <div class="progress" aria-hidden>
            <i :style="{width: t.level + '%'}" :class="{
              'level-master': t.level > 80,
              'level-intermediate': t.level > 50 && t.level <= 80,
              'level-basic': t.level <= 50
            }"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Frameworks -->
    <div class="tech-section">
      <h3>Frameworks</h3>
      <div class="tech-list">
        <div v-for="t in frameworks" :key="t.name" class="tech-item">
          <div class="tech-name"><span>{{t.name}}</span><small>{{t.level}}%</small></div>
          <div class="progress" aria-hidden>
            <i :style="{width: t.level + '%'}" :class="{
              'level-master': t.level > 80,
              'level-intermediate': t.level > 50 && t.level <= 80,
              'level-basic': t.level <= 50
            }"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Bases de données -->
    <div class="tech-section">
      <h3>Bases de données</h3>
      <div class="tech-list">
        <div v-for="t in basesDonnees" :key="t.name" class="tech-item">
          <div class="tech-name"><span>{{t.name}}</span><small>{{t.level}}%</small></div>
          <div class="progress" aria-hidden>
            <i :style="{width: t.level + '%'}" :class="{
              'level-master': t.level > 80,
              'level-intermediate': t.level > 50 && t.level <= 80,
              'level-basic': t.level <= 50
            }"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Outils -->
    <div class="tech-section">
      <h3>Outils</h3>
      <div class="tech-list">
        <div v-for="t in outils" :key="t.name" class="tech-item">
          <div class="tech-name"><span>{{t.name}}</span><small>{{t.level}}%</small></div>
          <div class="progress" aria-hidden>
            <i :style="{width: t.level + '%'}" :class="{
              'level-master': t.level > 80,
              'level-intermediate': t.level > 50 && t.level <= 80,
              'level-basic': t.level <= 50
            }"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: var(--color-primary);
}

h3 {
  text-align: center;
}

.tech-container {
  width: 100%;
}
.tech-section {
  margin-bottom: 2rem;
}

.tech-section h3 {
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-size: 1.2rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.tech-item {
  width: 250px;
}

.tech-item small {
  color: var(--muted);
}
</style>
