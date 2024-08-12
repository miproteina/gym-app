<template>
  <div class="exercise-active-list">
    <h2 class="exercise-active-list__title">{{ title }}</h2>
    <div class="exercise-active-list__table">
      <div class="exercise-active-list__header">
        <span>Set</span>
        <span>Previous</span>
        <span>Kg</span>
        <span>Reps</span>
      </div>
      <div class="exercise-active-list__body">
        <ExerciseSetActive
          v-for="exercise in exerciseList"
          :key="exercise.id"
          v-model:modelValue1="exercise.firstNumber"
          v-model:modelValue2="exercise.secondNumber"
          v-model:modelValue3="exercise.thirdNumber"
          v-model:modelChecked="exercise.checked"
          :text="'Set ' + (exerciseList.indexOf(exercise) + 1)"
          :edit="edit"
        />
      </div>
    </div>
    <button class="exercise-active-list__button" @click="addSet">Add Set</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ExerciseSetActive from '../../molecules/ExerciseSetActive/ExerciseSetActive.vue'

// Define the type for the exercises
type Exercise = {
  id: number
  firstNumber: string
  secondNumber: string
  thirdNumber: string
  checked: boolean
}

const props = defineProps<{
  title: string
  exercises: Exercise[]
}>()

const exerciseList = ref<Exercise[]>([...props.exercises]) // Initialize local copy of exercises

watch(
  () => props.exercises,
  newExercises => {
    exerciseList.value = [...newExercises] // Update local copy if the prop changes
  },
  { deep: true }
)

const edit = ref(true)

const addSet = () => {
  exerciseList.value.push({
    id: Date.now(), // Unique ID for the new set
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    checked: false,
  })
}
</script>

<style scoped>
.exercise-active-list {
  @apply flex flex-col gap-4 p-4;
}

.exercise-active-list__title {
  @apply text-lg font-bold mb-2;
}

.exercise-active-list__table {
  @apply grid gap-2;
}

.exercise-active-list__header {
  @apply grid grid-cols-5 gap-2 font-medium text-center;
}

@media (max-width: 480px) {
  .exercise-active-list__header {
    font-size: 0.8rem; /* Smaller size for small screens */
  }
}

.exercise-active-list__body {
  @apply grid gap-2;
}

.exercise-active-list__button {
  @apply mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors;
}
</style>
