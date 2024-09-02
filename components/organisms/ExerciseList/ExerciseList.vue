<template>
  <div class="exercise-list">
    <ExerciseCard
      v-for="(exercise, index) in exercises"
      :key="index"
      :exercise-name="exercise.exerciseName"
      :category-name="exercise.categoryName"
      :image-url="exercise.imageUrl"
      @open-modal="handleCardClick(exercise)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExerciseCard from '../../molecules/ExerciseCard/ExerciseCard.vue'

export default defineComponent({
  name: 'ExerciseList',
  components: {
    ExerciseCard,
  },
  props: {
    exercises: {
      type: Array as () => {
        exerciseName: string
        categoryName: string
        imageUrl: string
      }[],
      required: true,
    },
  },
  methods: {
    handleCardClick(exercise: { exerciseName: string; categoryName: string; imageUrl: string }) {
      this.$emit('openExerciseModal', exercise)
    },
  },
})
</script>

<style scoped>
.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
