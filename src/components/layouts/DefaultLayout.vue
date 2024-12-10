<!-- src/components/layouts/DefaultLayout.vue -->
<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f7f7ef]">
    <Navbar />
    <main class="flex-1 mt-10">
      <router-view class="mt-10" />
    </main>
    <Footer />
  </div>
</template>
