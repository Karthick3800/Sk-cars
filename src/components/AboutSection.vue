<template>
  <section id="about" class="section-pad">
    <div class="container">
      <div class="about-grid">
        <div class="about-text reveal">
          <div class="section-tag">About SK Cars</div>
          <h2 class="section-title">Your Trusted Partner for <span>Quality Used Cars</span></h2>
          <p>SK Cars is Tirunelveli's premier destination for quality pre-owned vehicles. We believe buying a used car should be simple, transparent, and stress-free — and that's exactly what we deliver.</p>
          <p>Every vehicle in our inventory is thoroughly inspected, documented, and priced fairly. We handle everything from RC transfer to loan assistance.</p>

          <div class="about-mini-stats">
            <div class="about-stat" v-for="s in miniStats" :key="s.label">
              <i :class="s.icon"></i> {{ s.label }}
            </div>
          </div>

          <div class="rating-badge">
            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            4.1 / 5 on Justdial
          </div>

          <div class="about-address">
            <i class="fas fa-location-dot"></i>
            <div>
              No. 7C Balaji Avenue, 2nd Cross Street,<br>
              Tachanallur, Tirunelveli — 627358<br>
              <span class="highlight">(Near Railway Gate)</span>
            </div>
          </div>
        </div>

        <div class="about-visual reveal" style="transition-delay:0.2s;">
          <div class="about-visual-inner">
            <div class="about-big-icon"><i class="fas fa-car"></i></div>
            <div class="about-visual-stats">
              <div class="about-vis-stat" v-for="s in visStats" :key="s.label">
                <div class="about-vis-num">{{ s.num }}</div>
                <div class="about-vis-label">{{ s.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const miniStats = [
  { icon: 'fas fa-calendar-check', label: 'Est. 2018' },
  { icon: 'fas fa-car',            label: '3000+ Cars Sold' },
  { icon: 'fas fa-users',          label: '5000+ Customers' },
]
const visStats = [
  { num: '10+',   label: 'Years' },
  { num: '3000+', label: 'Cars Sold' },
  { num: '5000+', label: 'Customers' },
  { num: '4.1★',  label: 'Rating' },
]
</script>

<style scoped>
#about { background: var(--black); }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.about-text p { color: var(--text-muted); margin-bottom: 1.25rem; font-size: 0.97rem; line-height: 1.75; }
.about-mini-stats { display: flex; gap: 1.5rem; margin: 1.75rem 0; flex-wrap: wrap; }
.about-stat {
  display: flex; align-items: center; gap: 0.6rem;
  font-family: var(--font-heading); font-size: 0.85rem; font-weight: 600;
  color: var(--text-muted); letter-spacing: 0.05em;
}
.about-stat i { color: var(--gold); font-size: 0.9rem; }
.rating-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: rgba(216,64,64,0.10); border: 1px solid rgba(216,64,64,0.28);
  border-radius: 100px;
  font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem; color: var(--gold);
  margin-top: 0.5rem;
}
.stars { font-size: 0.75rem; color: #FFD700; }
.about-address {
  margin-top: 1.5rem; display: flex; align-items: flex-start;
  gap: 0.75rem; color: var(--text-muted); font-size: 0.9rem;
}
.about-address i { color: var(--gold); margin-top: 0.2rem; flex-shrink: 0; }
.highlight { color: var(--gold); font-size: 0.85rem; }
.about-visual-inner {
  background: linear-gradient(135deg,#2A1010 0%,#3D1010 100%);
  border: 1px solid rgba(216,64,64,0.25); border-radius: var(--radius);
  padding: 3rem 2rem; text-align: center;
  box-shadow: 0 0 60px rgba(216,64,64,0.08), inset 0 1px 0 rgba(255,255,255,0.05);
  position: relative; overflow: hidden;
}
.about-visual-inner::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg,transparent,#D84040,transparent);
}
.about-big-icon { font-size: 6rem; color: rgba(216,64,64,0.20); margin-bottom: 2.5rem; line-height: 1; }
.about-visual-stats { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.25rem; }
.about-vis-stat {
  background: rgba(216,64,64,0.06); border: 1px solid rgba(216,64,64,0.18);
  border-radius: var(--radius-sm); padding: 1.25rem;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.about-vis-stat:hover { background: rgba(216,64,64,0.10); border-color: rgba(216,64,64,0.35); }
.about-vis-num { font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--gold); line-height: 1; }
.about-vis-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.12em; margin-top: 0.3rem; }

@media (max-width:1024px) { .about-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
@media (max-width:480px)  { .about-big-icon { font-size: 4rem; margin-bottom: 1.5rem; } }
</style>
