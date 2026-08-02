<template>
  <transition name="fade" mode="out-in">
    <LoadingState v-if="imageStore.isGenerating" />
    <ErrorMessage v-else-if="imageStore.error" />
    <ResultImage v-else-if="imageStore.resultImageUrl" />
    <PromptBox v-else />
  </transition>
</template>

<script setup lang="ts">
import { useImageStore } from '../stores/imageStore';
import PromptBox from '../components/PromptBox.vue';
import LoadingState from '../components/LoadingState.vue';
import ResultImage from '../components/ResultImage.vue';
import ErrorMessage from '../components/ErrorMessage.vue';

const imageStore = useImageStore();
</script>
