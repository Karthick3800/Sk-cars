<template>
  <section id="testimonials" class="section-pad">
    <div class="container">
      <div class="text-center reveal">
        <div class="section-tag">Customer Reviews</div>
        <h2 class="section-title">What Our <span>Customers Say</span></h2>
        <p class="section-sub">Real experiences from real customers who trusted SK Cars.</p>
      </div>

      <div class="testimonials-grid reveal-stagger">
        <div class="testimonial-card" v-for="t in testimonials" :key="t.name">
          <div class="t-stars">
            <i class="fas fa-star" v-for="n in 5" :key="n"></i>
          </div>
          <p class="t-quote">"{{ t.quote }}"</p>
          <div class="t-author">
            <div class="t-avatar">{{ t.initials }}</div>
            <div class="t-info">
              <div class="t-name">{{ t.name }}</div>
              <div class="t-detail">{{ t.detail }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Karthik R.',
    initials: 'KR',
    detail: 'Bought Maruti Swift · 2024',
    quote: 'SK Cars made buying my first used car completely stress-free. The team was transparent about the car\'s history, helped me with finance, and completed the RC transfer quickly. Highly recommend!',
  },
  {
    name: 'Priya S.',
    initials: 'PS',
    detail: 'Bought Hyundai i20 · 2024',
    quote: 'I was worried about buying a used car but SK Cars showed me the full inspection report. The car was in perfect condition and the price was very fair. The whole process took just 2 days!',
  },
  {
    name: 'Mohammed A.',
    initials: 'MA',
    detail: 'Sold & Bought KIA Sonet · 2023',
    quote: 'I exchanged my old car here and got a great deal on a KIA Sonet. The valuation was honest and they handled all the paperwork. Best used car dealer in Tirunelveli without doubt.',
  },
]
</script>

<style scoped>
#testimonials { background: var(--black); }
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.testimonial-card {
  padding: 2rem;
  background: rgba(30,10,10,0.65);
  border: 1px solid rgba(216,64,64,0.18);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
.testimonial-card::before {
  content: '\201C';
  position: absolute; top: -0.5rem; left: 1.25rem;
  font-size: 6rem; line-height: 1;
  color: rgba(216,64,64,0.10);
  font-family: Georgia, serif;
  pointer-events: none;
}
.testimonial-card:hover {
  border-color: rgba(216,64,64,0.40);
  box-shadow: 0 12px 40px rgba(216,64,64,0.10);
  transform: translateY(-4px);
}
.t-stars { margin-bottom: 1rem; }
.t-stars i { color: #FFD700; font-size: 0.85rem; margin-right: 0.1rem; }
.t-quote {
  font-size: 0.9rem; color: var(--text-muted); line-height: 1.75;
  margin-bottom: 1.5rem; font-style: italic;
}
.t-author { display: flex; align-items: center; gap: 0.85rem; }
.t-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: linear-gradient(135deg, #D84040, #8E1616);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-heading); font-weight: 700;
  font-size: 0.85rem; color: #fff; flex-shrink: 0;
}
.t-name { font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--text); }
.t-detail { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem; }

@media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px)  {
  .testimonials-grid { grid-template-columns: 1fr; }
  .testimonial-card { padding: 1.5rem 1.25rem; }
  .t-quote { font-size: 0.85rem; }
}
</style>
