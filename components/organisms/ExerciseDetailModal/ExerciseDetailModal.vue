<template>
  <div v-if="isVisible" class="modal-overlay" aria-modal="true" @click.self="emitClose">
    <div class="modal-content">
      <Button
        class="close-button"
        :size="'small'"
        :label="'X'"
        aria-label="Close"
        @click="emitClose"
      />
      <h2 class="exercise-title">{{ exerciseName }}</h2>
      <p class="exercise-description">{{ description }}</p>
      <div class="exercise-media">
        <template v-if="isVideo">
          <video controls :src="mediaUrl" class="exercise-video" />
        </template>
        <template v-else>
          <img :src="mediaUrl" alt="Exercise image" class="exercise-image" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import Button from '../../atoms/Button/Button.vue'

const props = defineProps<{
  exerciseName: string
  description: string
  mediaUrl: string
  isVisible: boolean
}>()

const emit = defineEmits<{
  (event: 'close'): void
}>()

const isVideo = computed(() => {
  return props.mediaUrl.endsWith('.mp4') || props.mediaUrl.endsWith('.webm')
})

const emitClose = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50;
}

.modal-content {
  position: relative; /* Add this to ensure the close button is positioned relative to this element */
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.close-button {
  @apply relative top-2 right-2 bg-transparent border-none text-xl cursor-pointer pb-2;
}

.exercise-title {
  @apply mb-2 text-2xl font-bold;
}

.exercise-description {
  @apply mb-4 text-base text-gray-600;
}

.exercise-media {
  @apply mb-4;
}

.exercise-image {
  @apply max-w-full h-auto rounded-lg;
}

.exercise-video {
  @apply w-full rounded-lg;
}
</style>
