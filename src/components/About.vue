<template>
  <div class="about-grid">
    <div>
      <h1 style="text-align: center;">À Propos</h1>
        <p style="color:var(--muted); text-align: center;">Je suis actuellement en 3e année à l'IT University Madagascar.
          Développeur surtout orienté backend, j'aime concevoir des API robustes, scalables et faciles à maintenir. Je
          m'intéresse aussi au frontend : créer des interfaces simples, accessibles et réactives
        </p>
          <p style="margin-top:1rem">Basé à Madagascar — ouvert aux missions freelance et au stage ! N'hésitez pas à me
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
