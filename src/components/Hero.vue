<template>
  <div class="hero-container">
    <div class="hero-inner">
      <div class="hero-badge">
        <span class="dot"></span>
        {{ t('hero.available') }}
      </div>
      
      <h1 class="hero-title">
        <span class="highlight">Sandratra</span><br>
        Rabenanahary
      </h1>
      
      <p class="hero-sub">
        {{ t('hero.description') }}
      </p>
      
      <div class="hero-actions">
        <a class="cta primary" :href="cv" download target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M5 20h14v-2H5v2zM12 3v10.17l3.59-3.58L17 11l-5 5-5-5 1.41-1.41L11 13.17V3h1z"/>
          </svg>
          {{ t('hero.downloadCV') }}
        </a>
        <a class="cta secondary" href="#about">
          {{ t('hero.learnMore') }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
    
    <div class="hero-visual">
      <div class="photo-frame">
        <img src="../assets/images/sandratra.jpeg" alt="Sandratra Hasinarivelo" />
      </div>
      
      <!-- Decorative elements -->
      <div class="deco deco-1"></div>
      <div class="deco deco-2"></div>
      <div class="deco deco-3"></div>
    </div>
  </div>
</template>

<script setup>
import { useTranslation } from '../composables/useTranslation'
import cv from "../assets/cv/CV-Sandratra-v1.pdf"

const { t } = useTranslation()
</script>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--container-max);
}

.hero-inner {
  flex: 1;
  min-width: 320px;
}

.hero-visual {
  position: relative;
  flex-shrink: 0;
}

.photo-frame {
  width: 380px;
  height: 380px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 4px solid var(--color-surface);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
  position: relative;
  z-index: 2;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Decorative elements */
.deco {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.deco-1 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent-violet));
  top: -30px;
  right: -30px;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.deco-2 {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-accent-cyan), var(--color-accent-emerald));
  bottom: 40px;
  left: -40px;
  opacity: 0.5;
  animation: float 8s ease-in-out infinite reverse;
}

.deco-3 {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-accent-amber), var(--color-accent-rose));
  bottom: -20px;
  right: 60px;
  opacity: 0.4;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

/* Responsive */
@media (max-width: 900px) {
  .hero-container {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-sub {
    text-align: center;
  }
  
  .photo-frame {
    width: 280px;
    height: 280px;
  }
  
  .deco-1 {
    width: 80px;
    height: 80px;
    top: -20px;
    right: -20px;
  }
  
  .deco-2 {
    width: 60px;
    height: 60px;
    left: -20px;
  }
  
  .deco-3 {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .photo-frame {
    width: 220px;
    height: 220px;
  }
}
</style>
