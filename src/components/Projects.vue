<template>
  <div class="projects">
    <span class="section-label">Portfolio</span>
    <h1>{{ t('projects.title') }}</h1>
    <p>{{ t('projects.subtitle') }}</p>

    <div class="projects-grid">
      <article class="card" v-for="p in projects" :key="p.id">
        <div class="card-hero"><img :src="p.image" :alt="p.title"></div>
        <div class="card-body">
          <h4>{{p.title}}</h4>
          <p class="card-description">{{p.shortDescription || p.description}}</p>
          
          <!-- Technologies utilisées -->
          <div class="tech-badges" v-if="p.technologies">
            <span 
              v-for="tech in p.technologies.slice(0, 3)" 
              :key="tech" 
              class="tech-badge"
            >
              {{tech}}
            </span>
            <span v-if="p.technologies.length > 3" class="tech-badge more">
              +{{ p.technologies.length - 3 }}
            </span>
          </div>
          
          <div class="card-actions">
            <router-link :to="`/project/${p.id}`" class="cta primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
              {{ t('projects.view') }}
            </router-link>
            <a v-if="p.repo && p.repo !== '#'" class="cta secondary" :href="p.repo" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clip-rule="evenodd" />
              </svg>
              Code
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { useTranslation } from '../composables/useTranslation'
import { useProjects } from '../composables/useProjects'

const { t } = useTranslation()
const { projects } = useProjects()
</script>

<style scoped>
.section-label {
  display: flex;
  justify-content: center;
}
</style>
