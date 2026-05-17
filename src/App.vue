<template>
  <div id="sk-app">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <BrandsSection />
    <WhyUsSection />
    <FinanceSection />
    <TestimonialsSection />
    <ContactSection />
    <FooterSection />
    <FloatingWhatsApp />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import BrandsSection from './components/BrandsSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import FinanceSection from './components/FinanceSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

// Global scroll reveal observer
onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => obs.observe(el))
})
</script>

<style>
#sk-app { min-height: 100vh; }
</style>
