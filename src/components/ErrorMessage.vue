<template>
  <main class="flex-grow flex flex-col items-center justify-center relative z-10 pt-20 px-6 md:px-12 w-full h-full">
    <div class="bg-error-container/20 border border-error p-8 rounded-xl max-w-lg w-full flex flex-col items-center text-center space-y-6">
      <span class="material-symbols-outlined text-error text-6xl" style="font-variation-settings: 'FILL' 1;">
        error
      </span>
      <h2 class="font-headline font-bold text-2xl text-on-surface">Proses Gagal</h2>
      <p class="font-body text-on-surface-variant text-lg">
        {{ imageStore.error }}
      </p>
      
      <button 
        @click="imageStore.tryAgain()"
        class="py-3 px-8 bg-surface-container rounded-DEFAULT border border-outline-variant text-on-surface font-label font-medium uppercase tracking-wider flex items-center justify-center gap-3 hover:text-secondary hover:border-secondary/50 transition-all duration-300 active:scale-95 group"
      >
        <span class="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">refresh</span>
        <span>Coba Lagi</span>
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useImageStore } from '../stores/imageStore';

const imageStore = useImageStore();
</script>
