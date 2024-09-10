<template>
  <ion-modal mode="ios" :is-open="props.isOpen" @did-dismiss="emitClose">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-button @click="emitClose"
            ><ion-icon :icon="ioniconsCloseCircleOutline"
          /></ion-button>
        </ion-buttons>
        <ion-title>{{ exercise.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col>
            <div class="exercise-media">
              <template v-if="isVideo">
                <video controls :src="exercise.thumbnail" class="exercise-video" />
              </template>
              <template v-else>
                <img :src="assetsPath(exercise.$id)" alt="Exercise image" class="exercise-image" />
              </template>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col>
            <p>{{ exercise.description }}</p>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import type { ExerciseInterface } from '@/utils/types'

const props = defineProps<{
  exercise: ExerciseInterface
  isOpen: boolean
}>()

const emit = defineEmits<{
  (event: 'close'): void
}>()

const isVideo = computed(() => {
  return props.exercise.thumbnail?.endsWith('.mp4') || props.exercise.thumbnail?.endsWith('.webm')
})

const assetsPath = (path = 'placeholder') => {
  return `assets/${path}.webp`
}

const emitClose = () => {
  emit('close')
}
</script>

<style scoped>
.exercise-media {
  display: flex;
  justify-content: center;
}

.exercise-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.exercise-video {
  width: 100%;
  border-radius: 8px;
}
</style>
