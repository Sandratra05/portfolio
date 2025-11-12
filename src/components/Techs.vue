<script setup>
import { ref } from 'vue'

const langages = ref([
  { name: 'Java', level: 90, icon: 'devicon-java-plain colored' },
  { name: 'C#', level: 70, icon: 'devicon-csharp-plain colored' },
  { name: 'C', level: 60, icon: 'devicon-c-plain colored' },
  { name: 'Python', level: 70, icon: 'devicon-python-plain colored' },
  { name: 'PHP', level: 80, icon: 'devicon-php-plain colored' },
  { name: 'JavaScript', level: 70, icon: 'devicon-javascript-plain colored' },
  { name: 'Visual Basic', level: 50, icon: 'devicon-dot-net-plain colored' }
])

const frameworks = ref([
  { name: 'Spring Boot', level: 90, icon: 'devicon-spring-plain colored' },
  { name: 'ASP.NET', level: 50, icon: 'devicon-dot-net-plain colored' },
  { name: 'Flight PHP', level: 90, icon: 'devicon-php-plain colored' },
  { name: 'VueJS', level: 60, icon: 'devicon-vuejs-plain colored' }
])

const basesDonnees = ref([
  { name: 'MySQL', level: 95, icon: 'devicon-mysql-plain colored' },
  { name: 'PostgreSQL', level: 93, icon: 'devicon-postgresql-plain colored' },
  { name: 'Oracle', level: 50, icon: 'devicon-oracle-plain colored' }
])

const outils = ref([
  { name: 'Git', level: 70, icon: 'devicon-git-plain colored' },
  { name: 'Docker', level: 50, icon: 'devicon-docker-plain colored' },
  { name: 'Linux', level: 90, icon: 'devicon-linux-plain' },
  { name: 'Postman', level: 60, icon: 'devicon-postman-plain colored' },
  { name: 'Figma', level: 60, icon: 'devicon-figma-plain colored' }
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
          <div class="tech-name">
            <span class="tech-label">
              <i :class="t.icon" class="tech-icon"></i>
              {{t.name}}
            </span>
            <small>{{t.level}}%</small>
          </div>
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
          <div class="tech-name">
            <span class="tech-label">
              <i :class="t.icon" class="tech-icon"></i>
              {{t.name}}
            </span>
            <small>{{t.level}}%</small>
          </div>
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
          <div class="tech-name">
            <span class="tech-label">
              <i :class="t.icon" class="tech-icon"></i>
              {{t.name}}
            </span>
            <small>{{t.level}}%</small>
          </div>
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
          <div class="tech-name">
            <span class="tech-label">
              <i :class="t.icon" class="tech-icon"></i>
              {{t.name}}
            </span>
            <small>{{t.level}}%</small>
          </div>
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
  width: 70%;
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

.tech-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-icon {
  font-size: 1.5rem;
}

.tech-item small {
  color: var(--muted);
}
</style>
