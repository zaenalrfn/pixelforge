<template>
  <main
    class="flex-grow pt-24 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-10 w-full h-full"
  >
    <header class="text-center mb-12 max-w-2xl mx-auto">
      <h1
        class="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-on-surface mb-4"
      >
        Gambar <span class="text-primary neon-text-primary">Selesai</span>
      </h1>
      <p class="font-body text-on-surface-variant text-lg">
        Mahakarya digital Anda telah berhasil disintesis oleh PixelForge. Siap
        untuk diunduh.
      </p>
    </header>

    <section
      class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      <div class="lg:col-span-8 flex justify-center w-full">
        <div
          class="relative w-full max-w-3xl aspect-[4/3] rounded-lg image-frame-glow neon-border-primary bg-surface-container overflow-hidden group"
        >
          <img
            :src="imageStore.resultImageUrl || ''"
            alt="Generated Artwork"
            class="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-sm"
          >
            <div
              class="font-label text-secondary text-sm tracking-widest uppercase mb-1"
            >
              Prompt Data
            </div>
            <p class="font-body text-on-surface text-sm line-clamp-2">
              "{{ imageStore.prompt }}"
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 flex flex-col gap-6 w-full">
        <div
          class="bg-surface-container-high rounded-lg p-6 neon-border-secondary flex flex-col gap-6 relative overflow-hidden"
        >
          <div
            class="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
          ></div>
          <div class="flex flex-col gap-2 relative z-10">
            <h2 class="font-headline font-bold text-xl text-on-surface">
              Tindakan
            </h2>
            <p class="font-body text-sm text-on-surface-variant">
              Pilih langkah selanjutnya untuk kreasi Anda.
            </p>
          </div>
          <div class="flex flex-col gap-4 relative z-10">
            <button
              @click="openAdModal"
              class="w-full py-4 px-6 bg-background rounded-DEFAULT neon-border-primary text-primary font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-3 neon-button-glow transition-all duration-300 active:scale-95 group"
            >
              <span
                class="material-symbols-outlined group-hover:-translate-y-1 transition-transform"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >download</span
              >
              <span class="neon-text-primary">Unduh Gambar</span>
            </button>
            <button
              @click="imageStore.tryAgain()"
              class="w-full py-4 px-6 bg-surface-container rounded-DEFAULT border border-outline-variant text-on-surface font-label font-medium uppercase tracking-wider flex items-center justify-center gap-3 hover:text-secondary hover:border-secondary/50 transition-all duration-300 active:scale-95 group"
            >
              <span
                class="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500"
                >refresh</span
              >
              <span>Coba Lagi</span>
            </button>
          </div>
        </div>

        <div
          class="bg-surface-container-low rounded-lg p-5 border border-outline-variant/30 flex flex-col gap-3"
        >
          <div
            class="flex justify-between items-center pb-2 border-b border-outline-variant/30"
          >
            <span class="font-label text-xs text-on-surface-variant uppercase"
              >Resolusi</span
            >
            <span class="font-label text-sm text-on-surface font-medium"
              >1024 x 1024</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Ad Modal Overlay -->
    <transition name="fade">
      <div v-if="showAdModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
        <div class="bg-surface-container border border-outline-variant rounded-xl p-6 max-w-2xl w-full flex flex-col items-center gap-6 relative shadow-[0_0_30px_rgba(0,0,0,0.8)] my-auto">
          <header class="w-full text-center space-y-2">
            <h3 class="text-2xl font-headline font-bold text-on-surface">Dukung Kami</h3>
            <p class="text-sm text-on-surface-variant">Tautan unduhan Anda sedang disiapkan...</p>
          </header>
          
          <!-- Ad Containers Grid -->
          <div class="w-full flex flex-wrap justify-center items-center gap-4">
            <!-- Iklan 1: 300x250 -->
            <AdsterraBanner adKey="1e762b0ac65e443dbd2b5e6a57cd9708" :width="300" :height="250" />
            
            <!-- Iklan 2: 160x300 -->
            <AdsterraBanner adKey="7c8c1da97381ba2540a7c376eb5deec3" :width="160" :height="300" />
          </div>

          <!-- Iklan 3: Native Script -->
          <div ref="adContainer" class="w-full min-h-[50px] bg-surface-dim rounded-lg flex items-center justify-center overflow-hidden border border-outline-variant/50 relative">
            <span v-if="!countdown" class="absolute text-on-surface-variant/30 font-label text-xs">Memuat Iklan Tambahan...</span>
          </div>

          <button
            :disabled="countdown > 0"
            @click="downloadImage"
            class="w-full py-4 px-6 bg-primary rounded-lg text-on-primary font-headline font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-fixed hover:shadow-[0_0_16px_rgba(255,45,120,0.6)]"
          >
            {{ countdown > 0 ? `Tunggu ${countdown} Detik...` : 'Lewati Iklan & Unduh' }}
          </button>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup lang="ts">
import { ref, nextTick, onUnmounted } from "vue";
import { useImageStore } from "../stores/imageStore";
import AdsterraBanner from "./AdsterraBanner.vue";

const imageStore = useImageStore();
const showAdModal = ref(false);
const countdown = ref(5);
const adContainer = ref<HTMLElement | null>(null);

let timerInterval: ReturnType<typeof setInterval> | null = null;

const openAdModal = async () => {
  showAdModal.value = true;
  countdown.value = 5;
  
  if (timerInterval) clearInterval(timerInterval);
  
  timerInterval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      if (timerInterval) clearInterval(timerInterval);
    }
  }, 1000);

  // Inject Iklan 3 (Native Script) securely after modal DOM is mounted
  await nextTick();
  if (adContainer.value) {
    adContainer.value.innerHTML = '';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://pl30643113.effectivecpmnetwork.com/86/a9/12/86a912ebbf89badc73e903d0d182c43a.js';
    adContainer.value.appendChild(script);
  }
};

const downloadImage = async () => {
  if (!imageStore.resultImageUrl) return;
  try {
    const a = document.createElement("a");
    a.href = imageStore.resultImageUrl;
    a.download = `PixelForge-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error("Failed to download image:", error);
  } finally {
    showAdModal.value = false;
    if (timerInterval) clearInterval(timerInterval);
  }
};

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>
