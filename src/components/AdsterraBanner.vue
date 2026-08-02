<template>
  <div ref="container" class="bg-surface-dim rounded flex items-center justify-center overflow-hidden" :style="{ width: width + 'px', height: height + 'px', maxWidth: '100%' }">
    <span v-if="!loaded" class="absolute text-on-surface-variant/30 font-label text-xs">Memuat Iklan...</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  adKey: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
});

const container = ref<HTMLElement | null>(null);
const loaded = ref(false);

onMounted(() => {
  if (!container.value) return;

  const iframe = document.createElement('iframe');
  iframe.width = props.width.toString();
  iframe.height = props.height.toString();
  iframe.frameBorder = "0";
  iframe.scrolling = "no";
  iframe.style.border = "none";
  iframe.style.overflow = "hidden";
  
  // Handle mobile scale down if needed
  iframe.style.maxWidth = "100%";

  container.value.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (doc) {
    doc.open();
    doc.write(`
      <html>
        <head>
          <style>
            body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; }
          </style>
        </head>
        <body>
          <script>
            var atOptions = {
              'key' : '${props.adKey}',
              'format' : 'iframe',
              'height' : ${props.height},
              'width' : ${props.width},
              'params' : {}
            };
          <\/script>
          <script type="text/javascript" src="https://www.highperformanceformat.com/${props.adKey}/invoke.js"><\/script>
        </body>
      </html>
    `);
    doc.close();
    loaded.value = true;
  }
});
</script>
