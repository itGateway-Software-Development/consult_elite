<script setup >
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';
</script>

<template>
  <main class="flex flex-col min-h-screen bg-[#f7f7ef]">
    <Navbar />
    <router-view class="mt-28" />
    <Footer />
  </main>
</template>


