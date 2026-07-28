<template>
  <section id="available-cars" class="section-pad">
    <div class="container">
      <div class="text-center reveal">
        <div class="section-tag">In Stock Now</div>
        <h2 class="section-title">Available <span>Cars</span></h2>
        <p class="section-sub">Handpicked, inspected and ready for a test drive. Tap a car to view it larger or enquire directly on WhatsApp.</p>
      </div>

      <div class="cars-grid reveal-stagger">
        <div
          v-for="(car, i) in cars"
          :key="car.name"
          class="car-card glass-gold"
          :style="{ '--i': i }"
          @click="openLightbox(car)"
        >
          <div class="car-photo-wrap">
            <img :src="car.image" :alt="car.name" class="car-photo" loading="lazy">
            <span class="available-badge">Available</span>
          </div>
          <div class="car-info">
            <div class="car-type">{{ car.type }}</div>
            <div class="car-name">{{ car.name }}</div>
          </div>
        </div>
      </div>

      <div class="text-center" style="margin-top:3rem;">
        <a href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20please%20share%20your%20current%20stock"
           target="_blank" rel="noopener" class="btn btn-gold reveal">
          <i class="fab fa-whatsapp"></i> See Full Stock on WhatsApp
        </a>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="selected" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox" aria-label="Close">&times;</button>
        <div class="lightbox-content">
          <img :src="selected.image" :alt="selected.name" class="lightbox-img">
          <div class="lightbox-caption">
            <div class="car-type">{{ selected.type }}</div>
            <div class="lightbox-name">{{ selected.name }}</div>
            <a :href="selected.waLink" target="_blank" rel="noopener" class="btn btn-whatsapp">
              <i class="fab fa-whatsapp"></i> Enquire About This Car
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const WA_NUMBER = '919944866887'
const waLinkFor = (name) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi SK Cars, I'm interested in the ${name}`)}`

const rawCars = [
  { name: 'Mahindra XUV700',              type: 'SUV',   image: '/car-photos/mahindra-xuv700.jpg' },
  { name: 'Toyota Fortuner',               type: 'SUV',   image: '/car-photos/toyota-fortuner.jpg' },
  { name: 'Maruti Suzuki Ertiga',          type: 'MPV',   image: '/car-photos/maruti-ertiga.jpg' },
  { name: 'Toyota Innova Crysta',          type: 'MPV',   image: '/car-photos/toyota-innova-crysta-white.jpg' },
  { name: 'Volkswagen Virtus GT',          type: 'Sedan', image: '/car-photos/vw-virtus-gt.jpg' },
  { name: 'Toyota Innova Crysta',          type: 'MPV',   image: '/car-photos/toyota-innova-crysta-silver.jpg' },
  { name: 'Toyota Innova',                 type: 'MPV',   image: '/car-photos/toyota-innova.jpg' },
  { name: 'Maruti Suzuki XL6',             type: 'MPV',   image: '/car-photos/maruti-xl6-black.jpg' },
  { name: 'Maruti Suzuki XL6',             type: 'MPV',   image: '/car-photos/maruti-xl6-grey.jpg' },
  { name: 'KIA Seltos',                    type: 'SUV',   image: '/car-photos/kia-seltos.jpg' },
  { name: 'KIA Sonet',                     type: 'SUV',   image: '/car-photos/kia-sonet.jpg' },
]

const cars = rawCars.map(c => ({ ...c, waLink: waLinkFor(c.name) }))

const selected = ref(null)

function openLightbox(car) {
  selected.value = car
}
function closeLightbox() {
  selected.value = null
}
function onKeydown(e) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
#available-cars { background: var(--black); }

.cars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Card reveal — self-contained per-card stagger, independent of the
   global .reveal-stagger CSS (which only defines nth-child rules up to 6
   and would otherwise leave cards 7+ stuck at opacity:0). */
.car-card {
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transform: translateY(44px) scale(0.94);
  filter: blur(6px);
  transition:
    opacity 0.8s cubic-bezier(0.16,1,0.3,1),
    transform 0.8s cubic-bezier(0.16,1,0.3,1),
    filter 0.8s cubic-bezier(0.16,1,0.3,1),
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  transition-delay: calc(var(--i) * 0.18s), calc(var(--i) * 0.18s), calc(var(--i) * 0.18s), 0s, 0s;
}
.reveal-stagger.visible .car-card {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}
.reveal-stagger.visible .car-card:hover {
  transform: translateY(-6px) scale(1);
  border-color: rgba(216,64,64,0.55);
  box-shadow: 0 16px 40px rgba(216,64,64,0.18);
  transition-delay: 0s;
}

.car-photo-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
.car-photo {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease, filter 0.4s ease;
}
.car-card:hover .car-photo {
  transform: scale(1.06);
  filter: brightness(1.05);
}

.available-badge {
  position: absolute;
  top: 0.75rem; right: 0.75rem;
  padding: 0.3rem 0.7rem;
  font-family: var(--font-heading);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(135deg,#25D366,#128C7E);
  border-radius: 999px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.35);
}

.car-info {
  padding: 1rem 1.15rem 1.2rem;
}
.car-type {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.25rem;
}
.car-name {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.01em;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10,4,4,0.92);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.lightbox-content {
  max-width: 720px;
  width: 100%;
  background: rgba(29,22,22,0.98);
  border: 1px solid var(--gold-border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6);
}
.lightbox-img {
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  background: #000;
  display: block;
}
.lightbox-caption {
  padding: 1.5rem 1.75rem 1.75rem;
  text-align: center;
}
.lightbox-name {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1.1rem;
}
.lightbox-close {
  position: absolute;
  top: 1.25rem; right: 1.5rem;
  width: 44px; height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.06);
  color: var(--text);
  font-size: 1.6rem;
  line-height: 1;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}
.lightbox-close:hover {
  background: rgba(216,64,64,0.25);
  border-color: var(--gold);
  transform: rotate(90deg);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 1024px) {
  .cars-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .cars-grid { grid-template-columns: 1fr; gap: 1rem; }
  .lightbox { padding: 1rem; }
  .lightbox-name { font-size: 1.2rem; }
  .car-name { font-size: 1.05rem; }
}
</style>
