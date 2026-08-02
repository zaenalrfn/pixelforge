<template>
  <div class="flex flex-col min-h-screen">
    <div class="cyber-scanline"></div>
    <TopNavBar />

    <!-- State Management Container -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer (Shared Component) -->
    <footer
      class="w-full mt-5 flex flex-col md:flex-row justify-between items-center px-8 gap-4 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/30 py-8 flat no shadows mt-auto relative z-10"
    >
      <!-- Brand Logo (Footer) -->
      <router-link to="/" class="flex items-center gap-2 text-lg font-headline font-bold text-on-surface opacity-80 hover:opacity-100 transition-opacity">
        <img src="/logo.png" alt="PixelForge Logo" class="w-6 h-6 object-contain" />
        PixelForge
      </router-link>
      <!-- Links -->
      <div class="flex flex-wrap justify-center gap-6">
        <router-link
          class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 hover:text-secondary transition-colors duration-200 cursor-pointer"
          to="/terms"
          >Terms</router-link
        >
        <router-link
          class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 hover:text-secondary transition-colors duration-200 cursor-pointer"
          to="/privacy"
          >Privacy</router-link
        >
        <router-link
          class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 hover:text-secondary transition-colors duration-200 cursor-pointer"
          to="/status"
          >Status</router-link
        >
      </div>
      <!-- Copyright -->
      <div
        class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 text-center md:text-right"
      >
        © {{ date }} PixelForge AI.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import TopNavBar from "./components/TopNavBar.vue";

const date = new Date().getFullYear();
</script>

<style>
/* Simple fade transition for state changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
