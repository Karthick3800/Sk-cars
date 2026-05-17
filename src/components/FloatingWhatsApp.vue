<template>
  <a
    href="https://wa.me/919944866887?text=Hi%20SK%20Cars%2C%20I%27d%20like%20to%20enquire%20about%20a%20car"
    target="_blank"
    rel="noopener"
    class="floating-wa"
    aria-label="Chat on WhatsApp"
  >
    <i class="fab fa-whatsapp"></i>
  </a>
</template>

<style scoped>
.floating-wa {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  width: 56px; height: 56px;
  background: #25D366;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; color: #fff;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37,211,102,0.45);
  animation: wa-pulse 2.5s ease-in-out infinite;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.floating-wa:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(37,211,102,0.60);
  animation: none;
}
@keyframes wa-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45); }
  50%       { box-shadow: 0 4px 32px rgba(37,211,102,0.70), 0 0 0 8px rgba(37,211,102,0.12); }
}

@media (max-width: 480px) {
  .floating-wa { bottom: 1.25rem; right: 1.25rem; width: 50px; height: 50px; font-size: 1.4rem; }
}
</style>
