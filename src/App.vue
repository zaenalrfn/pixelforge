<template>
  <div class="flex flex-col min-h-screen">
    <div class="cyber-scanline"></div>
    <TopNavBar />

    <!-- State Management Container -->
    <transition name="fade" mode="out-in">
      <LoadingState v-if="imageStore.isGenerating" />
      <ErrorMessage v-else-if="imageStore.error" />
      <ResultImage v-else-if="imageStore.resultImageUrl" />
      <PromptBox v-else />
    </transition>

    <!-- Footer (Shared Component) -->
    <footer
      class="w-full mt-5 flex flex-col md:flex-row justify-between items-center px-8 gap-4 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/30 py-8 flat no shadows mt-auto relative z-10"
    >
      <!-- Brand Logo (Footer) -->
      <div class="text-lg font-headline font-bold text-on-surface">
        PixelForge
      </div>
      <!-- Links -->
      <div class="flex flex-wrap justify-center gap-6">
        <a
          class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 hover:text-secondary transition-colors duration-200 cursor-pointer"
          href="#"
          >Terms</a
        >
        <a
          class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 hover:text-secondary transition-colors duration-200 cursor-pointer"
          href="#"
          >Privacy</a
        >
        <a
          class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 hover:text-secondary transition-colors duration-200 cursor-pointer"
          href="#"
          >API</a
        >
        <a
          class="font-label text-xs tracking-wider uppercase text-on-surface-variant/60 hover:text-secondary transition-colors duration-200 cursor-pointer"
          href="#"
          >Status</a
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
import { useImageStore } from "./stores/imageStore";
import TopNavBar from "./components/TopNavBar.vue";
import PromptBox from "./components/PromptBox.vue";
import LoadingState from "./components/LoadingState.vue";
import ResultImage from "./components/ResultImage.vue";
import ErrorMessage from "./components/ErrorMessage.vue";

const imageStore = useImageStore();
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
