<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-background border-b border-outline-variant bg-background/80 backdrop-blur-md shadow-[inset_0_0_12px_rgba(255,45,120,0.1)]">
    <div class="text-2xl font-headline font-black text-primary drop-shadow-[0_0_8px_rgba(255,45,120,0.8)] cursor-pointer hover:drop-shadow-[0_0_12px_rgba(255,45,120,1)] transition-all duration-300">
      PixelForge
    </div>
    <div class="flex items-center gap-4">
      <button class="text-on-surface-variant font-medium hover:text-primary hover:drop-shadow-[0_0_5px_currentColor] transition-all duration-300 active:scale-95 flex items-center justify-center p-2 rounded-full hover:bg-surface-container">
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">account_circle</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
// TopNavBar Component
</script>
