<template>
  <div class="projects">
    <h1>Projets</h1>
    <p style="color:var(--muted);margin-bottom:1rem; text-align: center;">Quelques projets récents — cliquez pour voir en détail.</p>

    <div class="projects-grid">
      <article class="card" v-for="p in projects" :key="p.title">
        <div class="card-hero"><img :src="p.image" :alt="p.title"></div>
        <div>
          <h4>{{p.title}}</h4>
          <p style="color:var(--muted);margin:6px 0">{{p.description}}</p>
          
          <!-- Technologies utilisées -->
          <div class="tech-badges" v-if="p.technologies">
            <span 
              v-for="tech in p.technologies" 
              :key="tech" 
              class="tech-badge"
            >
              {{tech}}
            </span>
          </div>
          
          <div style="display:flex;gap:.5rem;margin-top:.5rem">
            <a class="cta" :href="p.link" target="_blank">Voir</a>
            <a class="cta secondary" :href="p.repo" target="_blank">Code</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import cafeDashboardImage from '../assets/images/cafe-dashboard-vente.png'
import loginLycee from '../assets/images/nan-login.png'

const projects = [
  { 
    title: 'Gestion de la production de café.', 
    description: 'Gestion de la production de café avec tableau de bord interactif, permettant de suivre la production en temps réel.', 
    link: '#', 
    repo: '#', 
    image: cafeDashboardImage,
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript']
  },
  { 
    title: 'Système de gestion de d\'emploi du temps.', 
    description: 'Contribution dans la conception et la réalisation d\'une application web pour gérer les emplois du temps du lycée Nanisana.', 
    link: '#', 
    repo: '#', 
    image: loginLycee,
    technologies: ['PHP', 'Flight PHP', 'MySQL', 'HTML/CSS', 'JavaScript']
  },
  { 
    title: 'Projet C', 
    description: 'Micro-site performant optimisé SEO', 
    link: '#', 
    repo: '#',
    technologies: ['Vue.js', 'Vite', 'CSS']
  },
  { 
    title: 'Projet D', 
    description: 'Application mobile avec interface moderne', 
    link: '#', 
    repo: '#',
    technologies: ['React', 'Node.js', 'MongoDB']
  }
]
</script>

<style scoped>
h1 {
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}
.projects {
  max-width: 70%;
}
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.card {
  width: calc(33.333% - 1rem);
  height: 50vh;
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(10, 10, 10, 0.04);
  display: flex;
  flex-direction: column;
  gap: .75rem;
}

.card-hero {
  height: 30vh;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #14539a, #4ea700);
}

.card-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.card h4 {
  margin: 0;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0;
}

.tech-badge {
  background: rgba(16, 54, 125, 0.1);
  color: var(--color-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(16, 54, 125, 0.2);
}

/* Responsive pour petits écrans */
@media (max-width: 768px) {
  .card {
    width: calc(50% - 0.625rem);
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}
</style>
