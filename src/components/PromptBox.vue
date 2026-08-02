<template>
  <main class="flex-grow flex flex-col items-center justify-center relative z-10 pt-24 px-6 md:px-12 w-full h-full">
    <div class="w-full max-w-3xl flex flex-col items-center space-y-8">
      <header class="text-center space-y-4">
        <h1 class="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-on-surface">
          Visualisasikan <span class="text-primary neon-text-primary">Imajinasi</span> Anda
        </h1>
        <p class="font-body text-on-surface-variant text-lg">
          Ketik deskripsi apa saja di bawah, dan neural grid kami akan menggambarnya untuk Anda.
        </p>
      </header>
      
      <div class="w-full flex flex-col space-y-4 bg-surface-container-high p-6 rounded-xl neon-border-secondary">
        <textarea 
          v-model="localPrompt"
          rows="4"
          placeholder="Contoh: Kota cyberpunk di malam hari dengan hujan lebat, pantulan lampu neon pink dan cyan..."
          class="w-full bg-surface-dim border border-outline-variant rounded-lg p-4 text-on-surface font-body text-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none placeholder:text-on-surface-variant/50"
        ></textarea>
        
        <button 
          @click="handleGenerate"
          :disabled="!localPrompt.trim()"
          class="w-full py-4 px-6 bg-primary rounded-lg text-on-primary font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-fixed hover:shadow-[0_0_16px_rgba(255,45,120,0.6)] active:scale-95"
        >
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
          <span>Buat Gambar</span>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useImageStore } from '../stores/imageStore';

const imageStore = useImageStore();
const localPrompt = ref('');

const handleGenerate = () => {
  if (localPrompt.value.trim()) {
    imageStore.submitPrompt(localPrompt.value);
  }
};
</script>
