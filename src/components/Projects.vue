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
import ticketCRM from '../assets/images/ticketing.png'
import adoption from '../assets/images/adoptMe.png'

const projects = [
  { 
    title: 'Gestion de la production de café.', 
    description: 'Gestion de la production de café avec tableau de bord interactif, permettant de suivre la production, de la torréfaction à la distribution, en temps réel.', 
    link: '#', 
    repo: '#', 
    image: cafeDashboardImage,
    technologies: ['Spring MVC', 'JavaScript',  'MySQL', 'Tailwind CSS', 'JSP']
  },
  { 
    title: 'Système de gestion de d\'emploi du temps.', 
    description: 'Contribution à la conception et à la réalisation d\'une application web pour gérer les emplois du temps du lycée Nanisana.', 
    link: '#', 
    repo: '#', 
    image: loginLycee,
    technologies: ['Spring Boot', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'JSP']
  },
  { 
    title: 'Système de gestion de ticketing pour CRM', 
    description: 'Site web de ticketing dans une entrepise, facilitant la gestion CRM des clients, ainsi que le suivi des demandes et des résolutions au sein des équipes techniques.', 
    link: '#', 
    repo: '#',
    image: ticketCRM,
    technologies: ['Flight PHP', 'JavaScript', 'CSS', 'PostgreSQL']
  },
  { 
    title: 'Plateforme d\'adoption d\'animaux', 
    description: 'Une application web avec une interface moderne permettant aux utilisateurs de parcourir et d\'adopter des animaux de compagnie.', 
    link: '#', 
    repo: '#',
    image: adoption,
    technologies: ['PHP', 'CSS', 'MySQL']
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
  width: 100%;
  height: 200px;
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
  
  .card-hero {
    height: 150px;
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }
  
  .card-hero {
    height: 180px;
  }
}
</style>
