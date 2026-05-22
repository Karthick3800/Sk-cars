<template>
  <section id="services" class="section-pad">
    <div class="container">
      <div class="text-center reveal">
        <div class="section-tag">What We Offer</div>
        <h2 class="section-title">Our <span>Services</span></h2>
        <p class="section-sub">From buying to selling, we've got every step of your car journey covered.</p>
      </div>
      <div class="grid-2 reveal-stagger">
        <div class="glass-gold service-card" v-for="s in services" :key="s.title">
          <div class="service-icon"><i :class="s.icon"></i></div>
          <div class="service-title">{{ s.title }}</div>
          <p class="service-desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: 'fas fa-car',                 title: 'Buy a Car',        desc: 'Browse our wide range of verified pre-owned vehicles. Every car comes with a thorough inspection report, service history, and fair market pricing.' },
  { icon: 'fas fa-hand-holding-dollar', title: 'Sell Your Car',    desc: 'Get the best market price for your vehicle. We offer instant evaluation, quick paperwork, and same-day payment.' },
  { icon: 'fas fa-arrows-rotate',       title: 'Car Exchange',     desc: 'Upgrade your existing vehicle with a hassle-free exchange. Get a fair valuation on your current car and apply it toward your new one.' },
  { icon: 'fas fa-shield-halved',       title: 'Quality Inspection', desc: 'Every car undergoes a comprehensive multi-point quality check covering engine, transmission, electricals, and bodywork.' },
]
</script>

<style scoped>
#services { background: #0E0808; }
@media (max-width: 480px) {
  .service-card { padding: 1.25rem; }
  .service-icon { width: 44px; height: 44px; font-size: 1.1rem; margin-bottom: 1rem; }
  .service-title { font-size: 1.1rem; }
  .service-desc { font-size: 0.85rem; }
}
.service-card {
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 50px rgba(0,0,0,0.5), 0 0 25px rgba(216,64,64,0.10);
  border-color: rgba(216,64,64,0.45);
}
.service-icon {
  width: 56px; height: 56px; border-radius: 14px;
  background: linear-gradient(135deg,rgba(216,64,64,0.18),rgba(216,64,64,0.05));
  border: 1px solid rgba(216,64,64,0.28);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; color: var(--gold); margin-bottom: 1.25rem;
}
.service-title { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.6rem; }
.service-desc  { font-size: 0.9rem; color: var(--text-muted); line-height: 1.7; }
</style>
