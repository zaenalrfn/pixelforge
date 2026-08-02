<template>
  <main
    class="flex-grow flex flex-col items-center justify-center relative z-10 pt-20 h-full w-full"
  >
    <!-- Ambient Background Glow behind loader -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"
    ></div>
    <div class="flex flex-col items-center space-y-12">
      <!-- Central Animation -->
      <div class="cyber-loader">
        <div class="loader-ring"></div>
        <div class="loader-ring"></div>
        <div class="loader-ring"></div>
        <div class="loader-core"></div>
      </div>
      <!-- Loading Text -->
      <div class="flex flex-col items-center text-center space-y-3">
        <h1
          class="font-headline font-bold text-xl md:text-3xl text-on-surface tracking-wider inline-block"
        >
          Sedang menggambar untukmu<span class="animate-pulse">...</span>
        </h1>
        <div
          class="flex items-center space-x-3 bg-surface-container/50 border border-secondary/30 px-4 py-2 rounded-full shadow-[inset_0_0_8px_rgba(0,255,204,0.1)]"
        >
          <span
            class="material-symbols-outlined text-secondary text-sm"
            style="font-variation-settings: &quot;FILL&quot; 1"
          >
            memory
          </span>
          <p
            class="font-label text-xs md:text-sm tracking-[0.2em] uppercase text-secondary neon-glow-primary"
          >
            PixelForge
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// LoadingState Component
</script>
