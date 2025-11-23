<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Section principale -->
        <div class="footer-section">
          <div class="footer-brand">Sandratra Rabenanahary</div>
          <p class="footer-description">Développeur passionné, spécialisé dans la création d'applications robustes et d'interfaces utilisateur intuitives.</p>
        </div>

        <!-- Navigation -->
        <div class="footer-section">
          <div class="footer-brand">Navigation</div>
          <ul class="footer-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#tech">Technologies</a></li>
            <li><a href="#projects">Projets</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
          <div class="footer-brand">Contact</div>
          <div class="social-links">
            <a href="mailto:sandratrahasinarivelo5@gmail.com" class="social-link">
              <svg class="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>sandratrahasinarivelo5@gmail.com</span>
            </a>
            <a href="tel:+261123456789" class="social-link">
              <svg class="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span>+261 63 648 85</span>
            </a>
            <a href="https://github.com/Sandratra05" target="_blank" rel="noopener noreferrer" class="social-link">
              <i class="devicon-github-original"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/sandratra-raben" target="_blank" rel="noopener noreferrer" class="social-link">
              <i class="devicon-linkedin-plain"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/Sandratra.rabenanahary/" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg class="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Ligne de copyright -->
      <div class="footer-bottom">
        <div class="copyright">© {{ year }} Sandratra Rabenanahary — Tous droits réservés</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  /*border-top: 1px solid rgba(10,10,10,0.03);*/
  background-color: var(--color-primary);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}
.footer-section {
  text-align: left;
}
.footer-section h4 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.footer-brand {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-bg);
  margin-bottom: 1rem;
}

.footer-description {
  color: #999bad;
  line-height: 1.6;
  max-width: 300px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #999bad;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #999bad;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #999bad;
  text-decoration: none;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: #87899b;
}

.social-link i {
  font-size: 1.25rem;
}

.social-icon {
  width: 20px;
  height: 20px;
}

.footer-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 1.5rem;
  text-align: center;
}

.copyright {
  color: var(--color-bg);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-section:first-child {
    text-align: center;
  }
  
  .footer-description {
    max-width: none;
  }
}
</style>
