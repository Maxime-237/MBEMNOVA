<script setup>
import FloatingContact from './components/layout/FloatingContact.vue';
import Footer from './components/layout/Footer.vue';
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
  <FloatingContact />
</template>