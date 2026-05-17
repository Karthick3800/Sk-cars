<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/sk-logo.png" alt="SK Cars" class="footer-logo-img">
          </div>
          <p class="footer-tagline">Tirunelveli's trusted destination for quality pre-owned vehicles. Honest pricing. Transparent dealings.</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/sk_cars_tirunelveli/" target="_blank" rel="noopener" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/919944866887" target="_blank" rel="noopener" aria-label="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="tel:+919944866887" aria-label="Phone">
              <i class="fas fa-phone"></i>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <div class="footer-col-title">Quick Links</div>
            <ul>
              <li v-for="link in navLinks" :key="link.href">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Contact</div>
            <ul>
              <li><i class="fas fa-location-dot"></i> Tachanallur, Tirunelveli — 627358</li>
              <li><i class="fas fa-phone"></i> +91 99448 66887</li>
              <li><i class="fab fa-instagram"></i> @sk_cars_tirunelveli</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ year }} SK Cars. All rights reserved.</span>
        <span class="footer-divider">·</span>
        <span>Tachanallur, Tirunelveli</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const navLinks = [
  { href: '#about',        label: 'About Us' },
  { href: '#services',     label: 'Services' },
  { href: '#cars',         label: 'Car Brands' },
  { href: '#finance',      label: 'Finance' },
  { href: '#why-us',       label: 'Why Choose Us' },
  { href: '#contact',      label: 'Contact' },
]
</script>

<style scoped>
#footer {
  background: #080404;
  border-top: 1px solid rgba(216,64,64,0.18);
  padding: 4rem 0 2rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}
.footer-logo {
  display: flex; align-items: center; gap: 0.75rem;
  margin-bottom: 1rem;
}
.footer-logo-img {
  width: 52px; height: 52px; border-radius: 0;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(216,64,64,0.45));
}
.footer-logo-text {
  font-family: var(--font-heading); font-size: 1.3rem; font-weight: 900;
  color: var(--gold); letter-spacing: 0.12em;
}
.footer-tagline {
  font-size: 0.85rem; color: var(--text-muted); line-height: 1.7;
  max-width: 320px; margin-bottom: 1.5rem;
}
.footer-social { display: flex; gap: 0.75rem; }
.footer-social a {
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(216,64,64,0.10);
  border: 1px solid rgba(216,64,64,0.22);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted); font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.footer-social a:hover {
  background: rgba(216,64,64,0.20);
  border-color: rgba(216,64,64,0.50);
  color: var(--gold);
}
.footer-links { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.footer-col-title {
  font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--gold); margin-bottom: 1rem;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.footer-col ul li { font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: flex-start; gap: 0.5rem; }
.footer-col ul li i { color: rgba(216,64,64,0.60); font-size: 0.8rem; margin-top: 0.15rem; flex-shrink: 0; }
.footer-col ul li a { color: var(--text-muted); text-decoration: none; transition: color 0.2s ease; }
.footer-col ul li a:hover { color: var(--gold); }
.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  text-align: center;
  font-size: 0.8rem; color: var(--text-muted);
}
.footer-divider { margin: 0 0.6rem; opacity: 0.4; }

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
  .footer-links { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .footer-links { grid-template-columns: 1fr; gap: 1.5rem; }
}
</style>
