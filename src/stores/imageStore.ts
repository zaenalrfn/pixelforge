import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generateImage } from '../services/generateApi';

export const useImageStore = defineStore('image', () => {
  const prompt = ref('');
  const isGenerating = ref(false);
  const resultImageUrl = ref<string | null>(null);
  const error = ref<string | null>(null);

  const reset = () => {
    prompt.value = '';
    resultImageUrl.value = null;
    error.value = null;
    isGenerating.value = false;
  };

  const tryAgain = () => {
    resultImageUrl.value = null;
    error.value = null;
    isGenerating.value = false;
  };

  const submitPrompt = async (text: string) => {
    if (!text.trim()) return;
    
    prompt.value = text;
    isGenerating.value = true;
    error.value = null;
    resultImageUrl.value = null;

    try {
      const url = await generateImage(text);
      resultImageUrl.value = url;
    } catch (e: any) {
      error.value = e.message || 'Terjadi kesalahan tidak dikenal.';
    } finally {
      isGenerating.value = false;
    }
  };

  return {
    prompt,
    isGenerating,
    resultImageUrl,
    error,
    submitPrompt,
    reset,
    tryAgain
  };
});
