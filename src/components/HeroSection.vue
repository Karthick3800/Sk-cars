<template>
  <section id="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-fade"></div>
    <div ref="threeContainer" class="threejs-canvas"></div>

    <div class="container hero-content">
      <div class="hero-tag">
        <i class="fas fa-circle"></i>
        Tirunelveli's Trusted Car Dealer
      </div>
      <h1 class="hero-headline">
        <span class="hero-line-1">Drive Your</span>
        <span class="hero-line-2">Dream Car</span>
      </h1>
      <p class="hero-sub">
        Premium second-hand cars in Tirunelveli. Quality inspected, fairly priced,
        and ready to drive home today.
      </p>
      <div class="hero-ctas">
        <a href="#cars" class="btn btn-gold">
          <i class="fas fa-car"></i> Browse Cars
        </a>
        <a href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20I%27m%20looking%20for%20a%20used%20car"
           target="_blank" rel="noopener" class="btn btn-whatsapp">
          <i class="fab fa-whatsapp"></i> WhatsApp Us
        </a>
      </div>
      <div class="hero-stats">
        <div v-for="(stat, i) in stats" :key="i" class="hero-stat-group">
          <div v-if="i > 0" class="hero-stat-divider"></div>
          <div>
            <div class="hero-stat-num">{{ stat.num }}</div>
            <div class="hero-stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <span>Scroll</span>
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const threeContainer = ref(null)

const stats = [
  { num: '3000+', label: 'Cars Sold' },
  { num: '4.1★',  label: 'Rated on Justdial' },
  { num: '5000+', label: 'Happy Customers' },
]

let renderer, animFrameId

onMounted(() => {
  initThreeJS()
})

onUnmounted(() => {
  cancelAnimationFrame(animFrameId)
  renderer?.dispose()
})

function initThreeJS() {
  const container = threeContainer.value
  const hero = document.getElementById('hero')

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(hero.offsetWidth, hero.offsetHeight)
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, hero.offsetWidth / hero.offsetHeight, 0.1, 200)
  camera.position.set(0, 0, 30)

  function makeCar(color) {
    const g   = new THREE.Group()
    const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.55 })
    const body = new THREE.Mesh(new THREE.BoxGeometry(4, 1.2, 2), mat)
    body.position.y = 0.4
    g.add(body)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 1.8), mat)
    roof.position.set(-0.2, 1.45, 0)
    g.add(roof)
    const wMat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.4 })
    const wGeo = new THREE.TorusGeometry(0.55, 0.18, 6, 12)
    ;[[-1.5,-0.35,1.1],[1.5,-0.35,1.1],[-1.5,-0.35,-1.1],[1.5,-0.35,-1.1]].forEach(([x,y,z]) => {
      const w = new THREE.Mesh(wGeo, wMat)
      w.position.set(x, y, z)
      w.rotation.y = Math.PI / 2
      g.add(w)
    })
    return g
  }

  const colors = [0xD84040, 0xEEEEEE, 0x8E1616, 0xFF6666, 0xCC3333]
  const cars   = []
  for (let i = 0; i < 12; i++) {
    const car = makeCar(colors[i % colors.length])
    car.position.set(
      (Math.random() - 0.5) * 70,
      (Math.random() - 0.5) * 35,
      (Math.random() - 0.5) * 20 - 5
    )
    car.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
    car.scale.setScalar(Math.random() * 0.5 + 0.4)
    car._speed = { x: (Math.random() - 0.5) * 0.004, y: (Math.random() - 0.5) * 0.003 }
    car._rot   = { x: (Math.random() - 0.5) * 0.006, y: (Math.random() - 0.5) * 0.006 }
    scene.add(car)
    cars.push(car)
  }

  const pGeo  = new THREE.BufferGeometry()
  const pPos  = new Float32Array(200 * 3)
  for (let i = 0; i < 600; i++) pPos[i] = (Math.random() - 0.5) * 80
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xD84040, size: 0.18, transparent: true, opacity: 0.5 })))

  const mouse = { x: 0, y: 0 }
  document.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.5
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.3
  }, { passive: true })

  window.addEventListener('resize', () => {
    const w = hero.offsetWidth, h = hero.offsetHeight
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }, { passive: true })

  function animate() {
    animFrameId = requestAnimationFrame(animate)
    cars.forEach(car => {
      car.position.x += car._speed.x
      car.position.y += car._speed.y
      car.rotation.x += car._rot.x
      car.rotation.y += car._rot.y
      if (car.position.x >  38) car.position.x = -38
      if (car.position.x < -38) car.position.x =  38
      if (car.position.y >  20) car.position.y = -20
      if (car.position.y < -20) car.position.y =  20
    })
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.03
    camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.03
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }
  animate()
}
</script>

<style scoped>
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 120% 80% at 70% 40%, #8E1616 0%, #4A1010 40%, #1D1616 75%);
  animation: hero-pulse 8s ease-in-out infinite alternate;
}
@keyframes hero-pulse {
  from { opacity: 0.9; }
  to   { opacity: 1; }
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg,rgba(29,22,22,0.85) 0%,rgba(142,22,22,0.45) 55%,rgba(29,22,22,0.88) 100%);
}
.hero-fade {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 220px;
  background: linear-gradient(to top,var(--black),transparent);
  pointer-events: none;
}
.threejs-canvas {
  position: absolute; inset: 0;
  z-index: 1;
  pointer-events: none;
}
.threejs-canvas :deep(canvas) {
  position: absolute; top: 0; left: 0;
  width: 100% !important; height: 100% !important;
}
.hero-content {
  position: relative;
  z-index: 2;
  padding: 2rem 0;
}
.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #6AADA8;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(106,173,168,0.40);
  border-radius: 100px;
  background: rgba(106,173,168,0.08);
  margin-bottom: 1.5rem;
  animation: fade-up 0.8s ease 0.1s both;
}
.hero-tag i { font-size: 0.7rem; }
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.8rem,8vw,5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}
.hero-line-1 {
  display: block;
  color: var(--text);
  animation: fade-up 0.8s ease 0.3s both;
}
.hero-line-2 {
  display: block;
  background: linear-gradient(90deg,#D84040,#E85555,#EEEEEE,#D84040);
  background-size: 250% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fade-up 0.8s ease 0.55s both, shimmer-text 4s linear 1.5s infinite;
}
.hero-sub {
  font-size: clamp(1rem,2vw,1.2rem);
  color: var(--text-muted);
  max-width: 520px;
  margin-bottom: 2.5rem;
  animation: fade-up 0.8s ease 0.75s both;
}
.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fade-up 0.8s ease 0.95s both;
}
.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 3.5rem;
  animation: fade-up 0.8s ease 1.15s both;
  flex-wrap: wrap;
}
.hero-stat-group { display: flex; align-items: center; gap: 2.5rem; }
.hero-stat-num {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--gold);
  line-height: 1;
}
.hero-stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.2rem;
}
.hero-stat-divider {
  width: 1px; height: 40px;
  background: rgba(255,255,255,0.15);
}
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem; left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex; flex-direction: column; align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  animation: fade-up 1s ease 1.5s both;
}
.scroll-indicator i { font-size: 1.1rem; animation: bounce 2s ease-in-out infinite; }

@media (max-width: 768px) {
  .hero-content { padding-top: 90px; }
  .hero-ctas { flex-direction: column; }
  .hero-ctas .btn { width: 100%; justify-content: center; }
  .hero-stats { gap: 1.5rem; margin-top: 2.5rem; }
  .hero-stat-divider { display: none; }
}
@media (max-width: 480px) {
  .hero-content { padding-top: 80px; }
  .hero-tag { font-size: 0.7rem; padding: 0.35rem 0.85rem; }
  .hero-sub { font-size: 0.9rem; margin-bottom: 1.75rem; }
  .hero-stats { gap: 1rem; margin-top: 2rem; flex-wrap: wrap; }
  .hero-stat-num { font-size: 1.3rem; }
  .hero-stat-label { font-size: 0.68rem; }
  .scroll-indicator { display: none; }
}
</style>
