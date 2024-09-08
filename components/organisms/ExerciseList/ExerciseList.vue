<template>
  <div class="exercise-list">
    <ExerciseCard
      v-for="(exercise, index) in exercises"
      :key="index"
      :exercise-name="exercise.name"
      :exercise-id="exercise.$id"
      :categories="exercise.categories || []"
      :image-url="exercise.thumbnail"
      @open-modal="handleCardClick"
    />
  </div>
  <ExerciseDetailModal :is-open="openModal" :exercise="exerciseModal" @close="closeModal" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ExerciseCard from '../../molecules/ExerciseCard/ExerciseCard.vue'
import ExerciseDetailModal from '../ExerciseDetailModal/ExerciseDetailModal.vue'
import type { ExerciseInterface } from '@/utils/types'

export default defineComponent({
  name: 'ExerciseList',
  components: {
    ExerciseCard,
    ExerciseDetailModal,
  },
  props: {
    exercises: {
      type: Array as () => ExerciseInterface[],
      required: true,
    },
  },
  data() {
    return {
      openModal: false,
      exerciseModal: ref<ExerciseInterface | null>(null),
    }
  },
  methods: {
    handleCardClick(exerciseId: string) {
      console.log('openExerciseModal', exerciseId)
      this.$emit('openExerciseModal', exerciseId)
      const exercise = this.exercises.find(exercise => exercise.$id === exerciseId)
      if (exercise) {
        this.exerciseModal = exercise
      }
      this.openModal = true
    },
    closeModal() {
      this.openModal = false
    },
  },
})
</script>

<style scoped lang="scss">
.exercise-list {
  @apply flex flex-col gap-4;
}
</style>
