<template>
  <div class="about-grid">
    <div class="about">
      <h1 style="text-align: center;">À Propos</h1>
        <p style=" text-align: center; max-width: 50%;">Je suis actuellement en 3ème année à l'IT University Madagascar.
          Développeur surtout orienté backend, j'aime concevoir des API robustes, scalables et faciles à maintenir. Je
          m'intéresse aussi au frontend : créer des interfaces simples, accessibles et réactives.
        </p>
          <p style="margin-top:1rem; max-width: 50%;">Je suis ouvert aux missions freelance et au stage ! N'hésitez pas à me
          contacter pour en discuter !</p>
    </div>

    <!--<div style="display:flex;justify-content:center;align-items:center">
      <div class="avatar">Sandratra</div>
    </div>-->
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-grid h1 {
  margin: 0 0 .5rem 0;
  /*font-size: 2rem;*/
  color: var(--color-primary)
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #083;
  font-weight: 700
}
</style>
