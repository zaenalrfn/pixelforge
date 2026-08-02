<template>
  <main class="flex-grow pt-24 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative z-10 w-full">
    <div class="w-full max-w-3xl bg-surface-container-high p-8 md:p-12 rounded-xl neon-border-secondary space-y-8">
      <header class="text-center">
        <h1 class="font-headline font-bold text-3xl md:text-4xl text-on-surface mb-2">System <span class="text-secondary neon-glow-primary">Status</span></h1>
        <p class="font-body text-on-surface-variant">Real-time status of the PixelForge neural grid.</p>
      </header>

      <div class="space-y-4">
        <!-- Status Item: API -->
        <div class="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/30">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">dns</span>
            <span class="font-label font-medium text-on-surface">Image Generation API</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(0,255,204,0.6)]"></div>
            <span class="font-label text-sm text-secondary uppercase tracking-wider">Operational</span>
          </div>
        </div>

        <!-- Status Item: Web Server -->
        <div class="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant/30">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">language</span>
            <span class="font-label font-medium text-on-surface">Web Application</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(0,255,204,0.6)]"></div>
            <span class="font-label text-sm text-secondary uppercase tracking-wider">Operational</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// StatusView Component
</script>
