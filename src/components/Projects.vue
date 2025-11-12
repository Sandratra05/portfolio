<template>
  <div>
    <h1>Projets</h1>
    <p style="color:var(--muted);margin-bottom:1rem; text-align: center;">Quelques projets récents — cliquez pour voir en détail.</p>

    <div class="projects-grid">
      <article class="card" v-for="p in projects" :key="p.title">
        <div class="card-hero"></div>
        <div>
          <h4>{{p.title}}</h4>
          <p style="color:var(--muted);margin:6px 0">{{p.description}}</p>
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
const projects = [
  { title: 'Projet A', description: 'Application web responsive — UI minimaliste', link: '#', repo: '#' },
  { title: 'Projet B', description: 'Dashboard interactif avec visualisation', link: '#', repo: '#' },
  { title: 'Projet C', description: 'Micro-site performant optimisé SEO', link: '#', repo: '#' },
  { title: 'Projet C', description: 'Micro-site performant optimisé SEO', link: '#', repo: '#' }
]
</script>

<style scoped>
h1 {
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.card {
  width: calc(33.333% - 1rem);
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(10, 10, 10, 0.04);
  display: flex;
  flex-direction: column;
  gap: .75rem;
}

.card-hero {
  background: linear-gradient(135deg, #14539a, #4ea700);
}

.card h4 {
  margin: 0;
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
