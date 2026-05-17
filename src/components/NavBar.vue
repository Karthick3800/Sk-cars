<template>
  <nav id="navbar" :class="{ scrolled: isScrolled }">
    <a href="#hero" class="nav-logo">
      <img src="/sk-logo.png" alt="SK Cars" class="nav-logo-img">
    </a>

    <ul class="nav-links" :class="{ open: menuOpen }" id="nav-links">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" :class="{ active: activeSection === link.id }" @click="closeMenu">
          {{ link.label }}
        </a>
      </li>
      <li>
        <a href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20I%27m%20interested%20in%20buying%20a%20car"
           target="_blank" rel="noopener"
           class="btn btn-gold" style="padding:0.55rem 1.25rem;">
          <i class="fab fa-whatsapp"></i> Get Quote
        </a>
      </li>
    </ul>

    <div class="hamburger" :class="{ active: menuOpen }" @click="toggleMenu" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled  = ref(false)
const menuOpen    = ref(false)
const activeSection = ref('hero')

const navLinks = [
  { href: '#about',        id: 'about',        label: 'About' },
  { href: '#services',     id: 'services',     label: 'Services' },
  { href: '#cars',         id: 'cars',         label: 'Brands' },
  { href: '#finance',      id: 'finance',      label: 'Finance' },
  { href: '#why-us',       id: 'why-us',       label: 'Why Us' },
  { href: '#contact',      id: 'contact',      label: 'Contact' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 80
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onClickOutside(e) {
  const nav = document.getElementById('navbar')
  if (nav && !nav.contains(e.target)) menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)

  // Scroll spy
  const sections = document.querySelectorAll('section[id]')
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) activeSection.value = entry.target.id
    })
  }, { rootMargin: '-40% 0px -55% 0px' })
  sections.forEach(s => spy.observe(s))
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 1.1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
}
#navbar.scrolled {
  padding: 0.75rem 2rem;
  background: rgba(29,22,22,0.92);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(216,64,64,0.18);
  box-shadow: 0 4px 30px rgba(0,0,0,0.5);
}
.nav-logo {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.nav-logo-img {
  width: 48px; height: 48px;
  border-radius: 0;
  object-fit: contain;
  border: none;
  filter: drop-shadow(0 0 8px rgba(216,64,64,0.45));
}
.logo-sk   { color: var(--gold); }
.logo-cars {
  color: var(--text);
  position: relative;
}
.logo-cars::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg,var(--gold),transparent);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.2s ease;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transition: transform 0.25s ease;
  transform-origin: left;
}
.nav-links a:hover,
.nav-links a.active { color: var(--text); }
.nav-links a:hover::after,
.nav-links a.active::after { transform: scaleX(1); }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 0.4rem;
  z-index: 1001;
}
.hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--gold);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; }
  #nav-links {
    position: fixed;
    top: 0; right: -100%;
    width: 75vw; max-width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    background: rgba(18,3,9,0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid rgba(216,64,64,0.20);
    transition: right 0.35s cubic-bezier(0.4,0,0.2,1);
    z-index: 999;
    padding: 2rem;
  }
  #nav-links.open { right: 0; }
  #nav-links li { width: 100%; }
  #nav-links a {
    font-size: 1rem;
    padding: 0.5rem 0;
    display: block;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  #nav-links .btn { width: 100%; justify-content: center; margin-top: 0.5rem; }
  #navbar { padding: 0.9rem 1rem; }
  #navbar.scrolled { padding: 0.65rem 1rem; }
}
</style>
