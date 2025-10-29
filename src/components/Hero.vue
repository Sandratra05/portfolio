<template>
  <div class="hero-container">
    <div class="hero-inner">
      <h1 class="hero-title">RABENANAHARY <br> <span style="color: black;">Sandratra Hasinarivelo</span></h1>
      <p class="hero-sub">Je conçois des interfaces minimalistes et des expériences front-end performantes. Ici vous trouverez mes compétences, technologies et mes projets récents.</p>
      <div style="display:flex;gap:1rem;align-items:center">
        <a class="cta" href="#projects">Voir mes projets</a>
        <a class="cta secondary" href="#about">En savoir plus</a>
      </div>
    </div>
    
    <div class="hero-photo">
      <div class="photo-frame">
        <img src="../assets/images/sandratra.jpeg" alt="Sandratra Hasinarivelo" />
      </div>
    </div>
  </div>
</template>

<script setup>
// static hero — personnalisez le texte ici
</script>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-inner {
  flex: 1;
  min-width: 300px;
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
}

.hero-sub {
  margin-top: 4px;
}

.hero-photo {
  flex-shrink: 0;
}

.photo-frame {
  width: 425px;
  height: 425px;
  border-radius: 12px;
  overflow: hidden;
  border: 4px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  position: relative;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
  
  .photo-frame {
    width: 200px;
    height: 200px;
  }
}
</style>
