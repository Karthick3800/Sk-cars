<template>
  <section id="cars" class="section-pad">
    <div class="container">
      <div class="text-center reveal">
        <div class="section-tag">Brands We Deal In</div>
        <h2 class="section-title">Popular <span>Car Brands</span></h2>
        <p class="section-sub">We deal in all major brands trusted across Tamil Nadu. Call us for current stock.</p>
      </div>

      <div class="brands-grid reveal-stagger">
        <div
          v-for="(brand, i) in brands"
          :key="brand.name"
          class="brand-tile"
          :style="{ '--i': i }"
        >
          <div class="brand-tile-inner">
            <img :src="brand.logo" :alt="brand.name" class="brand-img"
                 @error="e => e.target.style.opacity='0.3'">
            <div class="brand-name">{{ brand.name }}</div>
            <div class="brand-models">{{ brand.models }}</div>
          </div>
        </div>
      </div>

      <div class="text-center" style="margin-top:3rem;">
        <a href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20please%20share%20your%20current%20stock"
           target="_blank" rel="noopener" class="btn btn-gold reveal">
          <i class="fab fa-whatsapp"></i> Check Current Stock
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const BASE = 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb'

const brands = [
  { name: 'Toyota',        logo: `${BASE}/toyota.png`,      models: 'Innova · Innova Crysta' },
  { name: 'Maruti Suzuki', logo: `${BASE}/suzuki.png`,      models: 'Swift · Dzire · Alto' },
  { name: 'Mahindra',      logo: `${BASE}/mahindra.png`,    models: 'Bolero · Scorpio · XUV' },
  { name: 'KIA',           logo: `${BASE}/kia.png`,         models: 'Seltos · Sonet · Carens' },
  { name: 'Audi',          logo: `${BASE}/audi.png`,        models: 'A4 · Q3 · Q5' },
  { name: 'Volkswagen',    logo: `${BASE}/volkswagen.png`,  models: 'Polo · Vento · Taigun' },
  { name: 'Tata',          logo: `${BASE}/tata.png`,        models: 'Nexon · Tiago · Harrier' },
  { name: 'Hyundai',       logo: `${BASE}/hyundai.png`,     models: 'i10 · i20 · Creta' },
]
</script>

<style scoped>
#cars { background: var(--black); }

.brands-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1.25rem;
}
.brand-tile {
  --i: 0;
  animation: brand-float calc(3s + var(--i) * 0.4s) ease-in-out infinite alternate;
  animation-delay: calc(var(--i) * 0.15s);
}
@keyframes brand-float {
  from { transform: translateY(0px) rotate(-1deg); }
  to   { transform: translateY(-10px) rotate(1deg); }
}
.brand-tile-inner {
  padding: 1.75rem 1.25rem 1.5rem;
  background: rgba(30,10,10,0.70);
  border: 1px solid rgba(216,64,64,0.18);
  border-radius: var(--radius);
  text-align: center;
  cursor: default;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, transform 0.5s ease;
  transform-style: preserve-3d;
}
.brand-tile-inner::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg,transparent,#D84040,transparent);
  opacity: 0; transition: opacity 0.3s ease;
}
.brand-tile-inner::after {
  content: ''; position: absolute; top: -100%; left: 0; right: 0;
  height: 60%;
  background: linear-gradient(to bottom,transparent,rgba(216,64,64,0.05),transparent);
  transition: top 0.6s ease;
}
.brand-tile:hover .brand-tile-inner {
  border-color: rgba(216,64,64,0.50);
  box-shadow: 0 12px 40px rgba(216,64,64,0.15);
  background: rgba(50,15,15,0.80);
  transform: perspective(600px) rotateY(6deg) rotateX(-3deg) scale(1.04);
}
.brand-tile:hover .brand-tile-inner::before { opacity: 1; }
.brand-tile:hover .brand-tile-inner::after  { top: 100%; }

.brand-img {
  width: 120px; height: 70px;
  object-fit: contain;
  margin: 0 auto 1rem;
  display: block;
  opacity: 1;
  transition: opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease;
}
.brand-tile:hover .brand-img {
  transform: scale(1.08);
  filter: drop-shadow(0 0 10px rgba(216,64,64,0.45));
}
.brand-text-logo {
  font-family: var(--font-heading);
  font-weight: 900; font-size: 1.8rem;
  letter-spacing: 0.08em;
  color: rgba(238,238,238,0.75);
  text-align: center;
  margin-bottom: 1rem;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}
.brand-tile:hover .brand-text-logo {
  color: #EEEEEE;
  text-shadow: 0 0 12px rgba(216,64,64,0.6);
}
.brand-name   { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--text); margin-bottom: 0.3rem; }
.brand-models { font-size: 0.72rem; color: var(--text-muted); letter-spacing: 0.06em; }

@media (max-width:1024px) { .brands-grid { grid-template-columns: repeat(3,1fr); } }
@media (max-width:768px)  { .brands-grid { grid-template-columns: repeat(2,1fr); gap: 0.9rem; } }
@media (max-width:480px)  {
  .brands-grid    { grid-template-columns: repeat(2,1fr); gap: 0.75rem; }
  .brand-tile-inner { padding: 1.25rem 0.75rem 1rem; }
  .brand-img      { width: 80px; height: 50px; }
  .brand-name     { font-size: 0.85rem; }
  .brand-models   { font-size: 0.65rem; }
  .brand-text-logo { font-size: 1.3rem; }
}
</style>
