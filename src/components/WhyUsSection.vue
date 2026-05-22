<template>
  <section id="why-us" class="section-pad">
    <div class="container">
      <div class="text-center reveal">
        <div class="section-tag">Why SK Cars</div>
        <h2 class="section-title">Why <span>Choose Us?</span></h2>
        <p class="section-sub">Over a decade of trust, transparency, and thousands of happy customers across Tirunelveli.</p>
      </div>

      <!-- Counters -->
      <div class="stats-grid reveal-stagger">
        <div class="glass-gold stat-card" v-for="s in stats" :key="s.label">
          <div class="stat-num">
            <span :data-target="s.target" :data-decimal="s.decimal" data-counter>0</span>
            <span class="stat-suffix" :class="{ 'star-gold': s.suffix === '★' }">{{ s.suffix }}</span>
          </div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>

      <!-- Feature cards -->
      <div class="features-grid reveal-stagger">
        <div class="feature-item" v-for="f in features" :key="f.title">
          <div class="feature-icon"><i :class="f.icon"></i></div>
          <div class="feature-text">
            <strong>{{ f.title }}</strong>
            <span>{{ f.desc }}</span>
          </div>
        </div>
      </div>

      <!-- Promise strip -->
      <div class="promise-strip reveal">
        <div class="promise-item" v-for="p in promises" :key="p.text">
          <i :class="p.icon"></i>
          <span>{{ p.text }}</span>
        </div>
      </div>

      <!-- Process steps -->
      <div class="text-center reveal" style="margin-top:4rem;">
        <div class="section-tag">How It Works</div>
        <h3 class="steps-title">Buy a Car in <span>3 Simple Steps</span></h3>
      </div>
      <div class="steps-grid reveal-stagger">
        <div class="step-card" v-for="(step, i) in steps" :key="step.title">
          <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="step-icon"><i :class="step.icon"></i></div>
          <div class="step-title">{{ step.title }}</div>
          <div class="step-desc">{{ step.desc }}</div>
          <div class="step-connector" v-if="i < steps.length - 1"></div>
        </div>
      </div>

      <!-- Comparison table -->
      <div class="text-center reveal" style="margin-top:4rem;">
        <div class="section-tag">The SK Cars Difference</div>
        <h3 class="steps-title">Us vs <span>The Rest</span></h3>
      </div>
      <div class="compare-wrap reveal">
        <table class="compare-table">
          <thead>
            <tr>
              <th class="compare-feature-col">Feature</th>
              <th class="compare-sk">
                SK Cars
              </th>
              <th class="compare-other">Other Dealers</th>
              <th class="compare-other">Private Sellers</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in compareRows" :key="row.feature">
              <td class="compare-feature-col">{{ row.feature }}</td>
              <td class="compare-sk">
                <span :class="row.sk === true ? 'ci ci-yes' : 'ci ci-text'">
                  <template v-if="row.sk === true"><i class="fas fa-check"></i></template>
                  <template v-else>{{ row.sk }}</template>
                </span>
              </td>
              <td>
                <span :class="row.others === false ? 'ci ci-no' : row.others === true ? 'ci ci-yes' : 'ci ci-text'">
                  <template v-if="row.others === true"><i class="fas fa-check"></i></template>
                  <template v-else-if="row.others === false"><i class="fas fa-xmark"></i></template>
                  <template v-else>{{ row.others }}</template>
                </span>
              </td>
              <td>
                <span :class="row.private === false ? 'ci ci-no' : row.private === true ? 'ci ci-yes' : 'ci ci-text'">
                  <template v-if="row.private === true"><i class="fas fa-check"></i></template>
                  <template v-else-if="row.private === false"><i class="fas fa-xmark"></i></template>
                  <template v-else>{{ row.private }}</template>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bottom CTA banner -->
      <div class="cta-banner reveal">
        <div class="cta-banner-left">
          <div class="cta-banner-title">Ready to Find Your Perfect Car?</div>
          <div class="cta-banner-sub">Talk to our team today — we'll match you with the right car at the right price.</div>
        </div>
        <div class="cta-banner-right">
          <a href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20I%27d%20like%20help%20finding%20a%20car"
             target="_blank" rel="noopener" class="btn btn-whatsapp">
            <i class="fab fa-whatsapp"></i> Chat with Us
          </a>
          <a href="tel:+919944866887" class="btn btn-outline">
            <i class="fas fa-phone"></i> Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const stats = [
  { target: 25,   decimal: false, suffix: '+', label: 'Years Experience' },
  { target: 3000, decimal: false, suffix: '+', label: 'Cars Sold' },
  { target: 5000, decimal: false, suffix: '+', label: 'Happy Customers' },
  { target: 4.1,  decimal: true,  suffix: '★', label: 'Justdial Rating' },
]

const features = [
  { icon: 'fas fa-shield-halved',  title: 'Multi-Point Inspection',   desc: 'Every car is checked across 100+ quality points before listing — engine, body, electricals, and more.' },
  { icon: 'fas fa-file-contract',  title: 'RC Transfer Assistance',   desc: 'We handle all RTO paperwork end-to-end so you never have to stand in a queue.' },
  { icon: 'fas fa-piggy-bank',     title: 'Loan & Finance Help',      desc: 'Tie-ups with HDFC, SBI, ICICI, Bajaj & more. Get loan approval within 24 hours.' },
  { icon: 'fas fa-road',           title: 'Test Drive Available',     desc: 'Take the car for a spin before you decide. No pressure, no time limit.' },
  { icon: 'fas fa-rotate-left',    title: '7-Day Return Policy',      desc: 'Not satisfied? Return the car within 7 days — no questions asked.' },
  { icon: 'fas fa-tag',            title: 'Fair Market Pricing',      desc: 'No hidden costs, no inflated MRP. You pay exactly what the car is worth.' },
  { icon: 'fas fa-handshake',      title: 'Transparent Dealing',      desc: 'Full service history and ownership records shared upfront, always.' },
  { icon: 'fas fa-arrows-rotate',  title: 'Easy Car Exchange',        desc: 'Trade in your old vehicle and upgrade — we give you the best exchange value.' },
]

const promises = [
  { icon: 'fas fa-check-circle', text: 'No hidden charges' },
  { icon: 'fas fa-check-circle', text: 'Same-day payment for sellers' },
  { icon: 'fas fa-check-circle', text: 'Doorstep RC delivery' },
  { icon: 'fas fa-check-circle', text: 'Insurance assistance' },
  { icon: 'fas fa-check-circle', text: 'Post-sale support' },
]

const steps = [
  { icon: 'fas fa-magnifying-glass', title: 'Browse & Pick',    desc: 'Call us or visit our showroom to explore available stock. We\'ll match you with the right car for your budget.' },
  { icon: 'fas fa-car',              title: 'Inspect & Drive',  desc: 'Review the inspection report, check the car in person, and take a test drive to make sure it\'s perfect.' },
  { icon: 'fas fa-key',              title: 'Pay & Drive Home', desc: 'Finalise your deal, complete the paperwork, and drive your new car home — all in one day.' },
]

const compareRows = [
  { feature: '100+ Point Inspection',       sk: true,         others: 'Sometimes',  private: false },
  { feature: 'RC Transfer Handled',         sk: true,         others: 'Extra cost', private: false },
  { feature: 'Finance / Loan Assistance',   sk: true,         others: true,         private: false },
  { feature: 'Test Drive',                  sk: true,         others: true,         private: 'Rarely' },
  { feature: '7-Day Return Policy',         sk: true,         others: false,        private: false },
  { feature: 'Service History Provided',    sk: true,         others: 'Partial',    private: false },
  { feature: 'Transparent Pricing',         sk: true,         others: false,        private: false },
  { feature: 'Post-Sale Support',           sk: true,         others: false,        private: false },
  { feature: 'Insurance Assistance',        sk: true,         others: 'Sometimes',  private: false },
]

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target)
  const decimal  = el.dataset.decimal === 'true'
  const duration = 2000
  const start    = performance.now()
  function step(now) {
    const p = Math.min((now - start) / duration, 1)
    const e = 1 - Math.pow(1 - p, 3)
    el.textContent = decimal ? (e * target).toFixed(1) : Math.floor(e * target)
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('[data-counter]').forEach(el => obs.observe(el))
})
</script>

<style scoped>
#why-us { background: var(--black); }

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.stat-card { text-align: center; padding: 2rem 1.5rem; transition: transform 0.3s ease; }
.stat-card:hover { transform: translateY(-4px); }
.stat-num { font-family: var(--font-heading); font-size: 3rem; font-weight: 700; color: var(--gold); line-height: 1; margin-bottom: 0.3rem; }
.stat-suffix { font-size: 1.8rem; color: var(--gold); }
.star-gold { color: #FFD700; }
.stat-label { font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.5rem; }

/* Feature cards */
.features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
.feature-item {
  display: flex; flex-direction: column; gap: 0.75rem;
  padding: 1.5rem 1.25rem;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}
.feature-item:hover {
  background: rgba(216,64,64,0.05);
  border-color: rgba(216,64,64,0.25);
  transform: translateY(-4px);
}
.feature-icon {
  width: 44px; height: 44px; border-radius: 10px;
  background: rgba(216,64,64,0.10);
  border: 1px solid rgba(216,64,64,0.18);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold); font-size: 1.05rem; flex-shrink: 0;
}
.feature-text strong { display: block; font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 0.35rem; }
.feature-text span   { font-size: 0.8rem; color: var(--text-muted); line-height: 1.6; }

/* Promise strip */
.promise-strip {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 1rem 2.5rem;
  margin-top: 3rem;
  padding: 1.25rem 2rem;
  background: rgba(216,64,64,0.05);
  border: 1px solid rgba(216,64,64,0.15);
  border-radius: var(--radius);
}
.promise-item {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.85rem; color: var(--text-muted);
  font-family: var(--font-heading); font-weight: 600; letter-spacing: 0.03em;
}
.promise-item i { color: #D84040; font-size: 0.8rem; }

/* Steps */
.steps-title {
  font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700;
  color: var(--text); margin: 0.75rem 0 2.5rem;
}
.steps-title span { color: var(--gold); }
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  position: relative;
}
.step-card {
  position: relative;
  padding: 2rem 1.5rem;
  background: rgba(30,10,10,0.60);
  border: 1px solid rgba(216,64,64,0.18);
  border-radius: var(--radius);
  text-align: center;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.step-card:hover { border-color: rgba(216,64,64,0.45); transform: translateY(-5px); }
.step-number {
  font-family: var(--font-heading); font-size: 3.5rem; font-weight: 900;
  color: rgba(216,64,64,0.12); line-height: 1;
  position: absolute; top: 1rem; right: 1.25rem;
  letter-spacing: -0.02em;
}
.step-icon {
  width: 56px; height: 56px; border-radius: 14px;
  background: linear-gradient(135deg, rgba(216,64,64,0.20), rgba(216,64,64,0.06));
  border: 1px solid rgba(216,64,64,0.28);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold); font-size: 1.4rem;
  margin: 0 auto 1.25rem;
}
.step-title {
  font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700;
  color: var(--text); margin-bottom: 0.6rem;
}
.step-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; }

/* Connector arrow between steps */
.step-connector {
  position: absolute;
  top: 50%; right: -1rem;
  transform: translateY(-50%);
  width: 1.5rem; height: 2px;
  background: rgba(216,64,64,0.35);
  z-index: 1;
}
.step-connector::after {
  content: '';
  position: absolute; right: -1px; top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: rgba(216,64,64,0.50);
}

/* Comparison table */
.compare-wrap {
  overflow-x: auto;
  border-radius: var(--radius);
  border: 1px solid rgba(216,64,64,0.20);
  margin-top: 0;
}
.compare-table {
  width: 100%; border-collapse: collapse;
  font-size: 0.88rem;
}
.compare-table thead tr {
  background: rgba(216,64,64,0.10);
  border-bottom: 1px solid rgba(216,64,64,0.25);
}
.compare-table th {
  padding: 1rem 1.25rem;
  font-family: var(--font-heading); font-weight: 700;
  font-size: 0.85rem; letter-spacing: 0.05em;
  color: var(--text); text-align: center;
}
.compare-table th.compare-feature-col { text-align: left; color: var(--text-muted); }
.compare-table th.compare-sk { color: var(--gold); }
.compare-logo { width: 28px; height: 28px; object-fit: contain; vertical-align: middle; margin-right: 0.4rem; }
.compare-table tbody tr {
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.2s ease;
}
.compare-table tbody tr:last-child { border-bottom: none; }
.compare-table tbody tr:hover { background: rgba(255,255,255,0.02); }
.compare-table td {
  padding: 0.9rem 1.25rem;
  text-align: center; color: var(--text-muted);
}
.compare-table td.compare-feature-col {
  text-align: left; color: var(--text);
  font-family: var(--font-heading); font-weight: 600; font-size: 0.85rem;
}
.compare-table td.compare-sk { background: rgba(216,64,64,0.04); }
.ci { display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem; }
.ci-yes { color: #4ade80; font-size: 1rem; }
.ci-no  { color: #ef4444; font-size: 1rem; }
.ci-text { color: #888; font-style: italic; }

/* Bottom CTA banner */
.cta-banner {
  margin-top: 3rem;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, rgba(142,22,22,0.18), rgba(216,64,64,0.08));
  border: 1px solid rgba(216,64,64,0.30);
  border-radius: var(--radius);
  position: relative; overflow: hidden;
}
.cta-banner::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, #D84040, transparent);
}
.cta-banner-title {
  font-family: var(--font-heading); font-size: 1.3rem; font-weight: 800;
  color: var(--text); margin-bottom: 0.35rem;
}
.cta-banner-sub { font-size: 0.88rem; color: var(--text-muted); }
.cta-banner-right { display: flex; gap: 1rem; flex-shrink: 0; flex-wrap: wrap; }

@media (max-width:1024px) {
  .stats-grid    { grid-template-columns: repeat(2,1fr); }
  .features-grid { grid-template-columns: repeat(2,1fr); }
  .steps-grid    { grid-template-columns: 1fr; }
  .step-connector { display: none; }
}
@media (max-width:768px) {
  .features-grid { grid-template-columns: 1fr; }
  .cta-banner { flex-direction: column; text-align: center; padding: 1.5rem; }
  .cta-banner-right { justify-content: center; }
}
@media (max-width:480px) {
  .compare-table th, .compare-table td { padding: 0.7rem 0.75rem; font-size: 0.78rem; }
}
</style>
