<template>
  <section id="finance" class="section-pad">
    <div class="container">
      <div class="text-center reveal">
        <div class="section-tag">Easy Finance</div>
        <h2 class="section-title">Buy Now, <span>Pay Easy</span></h2>
        <p class="section-sub">We've partnered with India's leading finance companies to get you the best loan rates with minimal paperwork.</p>
      </div>

      <div class="finance-grid reveal-stagger">
        <div class="finance-card" v-for="f in financePartners" :key="f.name">
          <div class="finance-logo-wrap">
            <div class="finance-logo-text" :style="f.style" v-html="f.logoHtml"></div>
          </div>
          <div class="finance-name">{{ f.name }}</div>
          <ul class="finance-features">
            <li v-for="feat in f.features" :key="feat">
              <i class="fas fa-check"></i> {{ feat }}
            </li>
          </ul>
        </div>

        <div class="finance-card finance-card-cta">
          <div class="finance-cta-icon"><i class="fas fa-piggy-bank"></i></div>
          <div class="finance-name">Need Guidance?</div>
          <p class="finance-cta-text">Our finance team will help you choose the best loan option that fits your budget.</p>
          <a href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20I%20need%20help%20with%20car%20finance"
             target="_blank" rel="noopener" class="btn btn-gold" style="margin-top:1rem;width:100%;justify-content:center;">
            <i class="fab fa-whatsapp"></i> Get Finance Help
          </a>
        </div>
      </div>

      <div class="finance-note reveal">
        <i class="fas fa-circle-info"></i>
        EMI starts from <strong>₹3,999/month</strong> &nbsp;·&nbsp;
        Loan up to <strong>85%</strong> of car value &nbsp;·&nbsp;
        Tenure up to <strong>7 years</strong> &nbsp;·&nbsp;
        Subject to bank approval
      </div>
    </div>
  </section>
</template>

<script setup>
const financePartners = [
  {
    name: 'Bajaj Finance',
    logoHtml: 'Bajaj<br><span style="color:#1A1A1A;background:#FF6B00;padding:0.1rem 0.4rem;border-radius:3px;font-size:1rem;">Finance</span>',
    style: 'color:#FF6B00;font-size:1.5rem;font-weight:900;letter-spacing:0.04em;text-align:center;',
    features: ['Instant loan approval', '0% processing fee offers', 'Flexible EMI options'],
  },
  {
    name: 'HDFC Bank',
    logoHtml: 'HDFC<br><span style="font-size:0.85rem;color:#aaa;">Bank</span>',
    style: 'color:#003087;font-size:1.1rem;font-weight:900;letter-spacing:0.06em;text-align:center;',
    features: ['Low interest rates', 'Up to 7-year tenure', 'Quick disbursal'],
  },
  {
    name: 'ICICI Bank',
    logoHtml: 'ICICI<br><span style="font-size:0.85rem;color:#aaa;">Bank</span>',
    style: 'color:#F7941D;font-size:1.1rem;font-weight:900;text-align:center;',
    features: ['Pre-approved loans', 'Minimal documentation', 'Online application'],
  },
  {
    name: 'SBI Auto Loan',
    logoHtml: 'SBI<br><span style="font-size:0.85rem;color:#aaa;">Auto Loan</span>',
    style: 'color:#1A9A2A;font-size:1.1rem;font-weight:900;text-align:center;',
    features: ['Lowest interest rate', 'Up to 85% funding', 'No hidden charges'],
  },
  {
    name: 'Muthoot Capital',
    logoHtml: 'Muthoot<br><span style="font-size:0.75rem;color:#aaa;">Capital Services</span>',
    style: 'color:#D84040;font-size:1.1rem;font-weight:900;text-align:center;',
    features: ['Two-wheeler & car loans', 'Same-day sanction', 'Low CIBIL score OK'],
  },
]
</script>

<style scoped>
#finance { background: #0E0808; }
.finance-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1.25rem;
}
.finance-card {
  padding: 1.75rem 1.5rem;
  background: rgba(30,10,10,0.65);
  border: 1px solid rgba(216,64,64,0.20);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  position: relative; overflow: hidden;
}
.finance-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg,transparent,rgba(216,64,64,0.5),transparent);
}
.finance-card:hover {
  border-color: rgba(216,64,64,0.50);
  box-shadow: 0 12px 40px rgba(216,64,64,0.12);
  transform: translateY(-5px);
}
.finance-logo-wrap {
  height: 56px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
  background: rgba(255,255,255,0.06); border-radius: 8px; padding: 0.5rem;
}
.finance-name { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 0.85rem; }
.finance-features { list-style: none; display: flex; flex-direction: column; gap: 0.45rem; }
.finance-features li { font-size: 0.82rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; }
.finance-features li i { color: #D84040; font-size: 0.7rem; flex-shrink: 0; }
.finance-card-cta {
  border-color: rgba(216,64,64,0.35); background: rgba(216,64,64,0.06);
  display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center;
}
.finance-cta-icon { font-size: 2.5rem; color: rgba(216,64,64,0.60); margin-bottom: 0.75rem; }
.finance-cta-text { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }
.finance-note {
  margin-top: 2rem; padding: 1rem 1.5rem;
  background: rgba(216,64,64,0.06); border: 1px solid rgba(216,64,64,0.18);
  border-radius: var(--radius-sm); text-align: center;
  font-size: 0.83rem; color: var(--text-muted); line-height: 1.7;
}
.finance-note i { color: #D84040; margin-right: 0.4rem; }
.finance-note strong { color: var(--text); }

@media (max-width:1024px) { .finance-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width:480px)  { .finance-grid { grid-template-columns: 1fr; } }
</style>
