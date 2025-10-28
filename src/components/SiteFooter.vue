<template>
  <footer class="site-footer">
    <div style="max-width:1100px;margin:0 auto">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">
        <div style="font-weight:700;color:var(--color-primary)">MonPortfolio</div>
        <div style="color:var(--muted)">© {{ year }} — Tous droits réservés</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer{border-top:1px solid rgba(10,10,10,0.03)}
</style>
