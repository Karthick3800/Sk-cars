<template>
  <section id="contact" class="section-pad">
    <div class="container">
      <div class="text-center reveal">
        <div class="section-tag">Get In Touch</div>
        <h2 class="section-title">Visit <span>SK Cars</span></h2>
        <p class="section-sub">Come meet us in person or reach out — we're always happy to help.</p>
      </div>

      <div class="contact-layout">
        <!-- Info Cards -->
        <div class="contact-info reveal">
          <div class="contact-card" v-for="c in contactItems" :key="c.title">
            <div class="contact-icon"><i :class="c.icon"></i></div>
            <div class="contact-text">
              <div class="contact-title">{{ c.title }}</div>
              <div class="contact-value" v-html="c.value"></div>
            </div>
          </div>

          <div class="contact-actions">
            <a href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20I%27d%20like%20to%20enquire%20about%20a%20car"
               target="_blank" rel="noopener" class="btn btn-whatsapp">
              <i class="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="tel:+919944866887" class="btn btn-outline">
              <i class="fas fa-phone"></i> Call Now
            </a>
          </div>
        </div>

        <!-- Sleek Leaflet Map -->
        <div class="map-wrapper reveal" style="transition-delay:0.2s;">
          <div class="map-frame">
            <div ref="mapEl" class="map-container"></div>
            <div class="map-overlay-badge">
              <i class="fas fa-location-dot"></i> SK Cars, Thachanallur
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mapEl = ref(null)

const contactItems = [
  {
    icon: 'fas fa-location-dot',
    title: 'Our Address',
    value: 'No. 7C Balaji Avenue, 2nd Cross Street,<br>Thachanallur, Tirunelveli — 627358<br><span style="color:var(--gold);font-size:0.8rem;">(Near Railway Gate)</span>',
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    value: '<a href="tel:+919944866887" style="color:var(--text);text-decoration:none;">+91 99448 66887</a>',
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp',
    value: '<a href="https://wa.me/919944866887" target="_blank" rel="noopener" style="color:var(--text);text-decoration:none;">+91 99448 66887</a>',
  },
  {
    icon: 'fab fa-instagram',
    title: 'Instagram',
    value: '<a href="https://www.instagram.com/sk_cars_tirunelveli/" target="_blank" rel="noopener" style="color:var(--text);text-decoration:none;">@sk_cars_tirunelveli</a>',
  },
]

const LAT = 8.7451173
const LNG = 77.7085213

onMounted(() => {
  if (!window.L || !mapEl.value) return

  const L = window.L

  const map = L.map(mapEl.value, {
    center: [LAT, LNG],
    zoom: 17,
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: false,
  })

  // CartoDB Dark Matter — clean dark base
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
  }).addTo(map)

  // Custom zoom control bottom-right
  L.control.zoom({ position: 'bottomright' }).addTo(map)

  // Custom SVG pin marker
  const svgIcon = L.divIcon({
    className: '',
    html: `
      <div class="sk-marker">
        <div class="sk-marker-pulse"></div>
        <div class="sk-marker-pin">
          <svg viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" width="40" height="52">
            <defs>
              <radialGradient id="mg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#FF6666"/>
                <stop offset="100%" stop-color="#8E1616"/>
              </radialGradient>
            </defs>
            <path d="M20 0C9 0 0 9 0 20c0 14 20 32 20 32S40 34 40 20C40 9 31 0 20 0z" fill="url(#mg)" stroke="#D84040" stroke-width="1.5"/>
            <circle cx="20" cy="20" r="7" fill="white" opacity="0.9"/>
            <text x="20" y="24" font-size="9" font-weight="900" text-anchor="middle" fill="#8E1616" font-family="sans-serif">SK</text>
          </svg>
        </div>
      </div>`,
    iconSize: [40, 52],
    iconAnchor: [20, 52],
    popupAnchor: [0, -56],
  })

  const marker = L.marker([LAT, LNG], { icon: svgIcon }).addTo(map)

  marker.bindPopup(`
    <div class="sk-popup">
      <div class="sk-popup-title">SK Cars</div>
      <div class="sk-popup-addr">No. 7C Balaji Avenue, 2nd Cross Street<br>Thachanallur, Tirunelveli — 627358</div>
      <a href="https://maps.app.goo.gl/X8Y5iJ6YjAa3jtM57" target="_blank" rel="noopener" class="sk-popup-dir">
        Get Directions ↗
      </a>
    </div>`, {
    maxWidth: 220,
    className: 'sk-leaflet-popup',
  }).openPopup()
})
</script>

<style scoped>
#contact { background: #0E0808; }

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Info cards */
.contact-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(30,10,10,0.65);
  border: 1px solid rgba(216,64,64,0.18);
  border-radius: var(--radius-sm);
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
}
.contact-card:hover { border-color: rgba(216,64,64,0.40); }
.contact-icon {
  width: 42px; height: 42px; flex-shrink: 0;
  background: rgba(216,64,64,0.10);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--gold); font-size: 1rem;
}
.contact-title {
  font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--text-muted); margin-bottom: 0.3rem;
}
.contact-value { font-size: 0.92rem; color: var(--text); line-height: 1.6; }
.contact-actions { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }
.contact-actions .btn { flex: 1; justify-content: center; min-width: 140px; }

/* Map wrapper */
.map-wrapper { position: relative; }
.map-frame {
  position: relative;
  height: 440px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid rgba(216,64,64,0.30);
  box-shadow: 0 0 40px rgba(216,64,64,0.08), 0 0 0 1px rgba(255,255,255,0.04);
}
.map-container { width: 100%; height: 100%; }

/* Scanline overlay for the unique look */
.map-frame::before {
  content: '';
  position: absolute; inset: 0; z-index: 10;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0,0,0,0.08) 3px,
    rgba(0,0,0,0.08) 4px
  );
  border-radius: var(--radius);
}
/* Red corner accents */
.map-frame::after {
  content: '';
  position: absolute; inset: 0; z-index: 11;
  pointer-events: none;
  border-radius: var(--radius);
  background:
    linear-gradient(to bottom right, rgba(216,64,64,0.18) 0%, transparent 30%),
    linear-gradient(to bottom left,  rgba(216,64,64,0.08) 0%, transparent 30%);
}

.map-overlay-badge {
  position: absolute;
  bottom: 1rem; left: 1rem; z-index: 20;
  background: rgba(10,4,4,0.85);
  border: 1px solid rgba(216,64,64,0.45);
  backdrop-filter: blur(10px);
  padding: 0.45rem 0.9rem;
  border-radius: 100px;
  font-family: var(--font-heading);
  font-size: 0.75rem; font-weight: 700;
  color: var(--gold); letter-spacing: 0.06em;
}
.map-overlay-badge i { color: #D84040; margin-right: 0.4rem; }

@media (max-width: 1024px) {
  .contact-layout { grid-template-columns: 1fr; }
  .map-frame { height: 320px; }
}
</style>

<!-- Global styles for Leaflet custom elements (not scoped) -->
<style>
/* Custom marker */
.sk-marker { position: relative; }
.sk-marker-pin { filter: drop-shadow(0 4px 12px rgba(216,64,64,0.60)); }
.sk-marker-pulse {
  position: absolute;
  bottom: 0; left: 50%; transform: translateX(-50%);
  width: 20px; height: 20px; border-radius: 50%;
  background: rgba(216,64,64,0.30);
  animation: mk-pulse 2s ease-out infinite;
  pointer-events: none;
}
@keyframes mk-pulse {
  0%   { transform: translateX(-50%) scale(1);   opacity: 0.7; }
  100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
}

/* Popup */
.sk-leaflet-popup .leaflet-popup-content-wrapper {
  background: rgba(18,6,6,0.96) !important;
  border: 1px solid rgba(216,64,64,0.45) !important;
  border-radius: 10px !important;
  box-shadow: 0 8px 32px rgba(216,64,64,0.20) !important;
  backdrop-filter: blur(12px);
  padding: 0 !important;
}
.sk-leaflet-popup .leaflet-popup-tip-container { display: none; }
.sk-leaflet-popup .leaflet-popup-content { margin: 0 !important; }
.sk-popup { padding: 1rem 1.1rem; }
.sk-popup-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem; font-weight: 700;
  color: #EEEEEE; margin-bottom: 0.4rem;
}
.sk-popup-addr {
  font-size: 0.78rem; color: #888; line-height: 1.6; margin-bottom: 0.7rem;
}
.sk-popup-dir {
  display: inline-block;
  font-size: 0.78rem; font-weight: 700;
  color: #D84040; text-decoration: none;
  border: 1px solid rgba(216,64,64,0.40);
  padding: 0.3rem 0.7rem; border-radius: 4px;
  transition: background 0.2s ease;
}
.sk-popup-dir:hover { background: rgba(216,64,64,0.15); }

/* Leaflet zoom buttons dark theme */
.leaflet-control-zoom a {
  background: rgba(18,6,6,0.90) !important;
  color: #D84040 !important;
  border-color: rgba(216,64,64,0.35) !important;
}
.leaflet-control-zoom a:hover {
  background: rgba(216,64,64,0.15) !important;
  color: #EEEEEE !important;
}
</style>
