<template>
  <div class="exercise-active-header">
    <Button
      class="exercise-active-header__button"
      :size="'small'"
      :label="'X'"
      aria-label="Close"
      data-test="open-timer-modal"
      @click="openTimerModal"
    />
    <span class="exercise-active-header__timer">{{ timer }}</span>
    <Button
      :class="['exercise-active-header__button', 'exercise-active-header__button--finish']"
      :size="'small'"
      :label="'Finish'"
      @click="finishWorkout"
    />
  </div>
</template>

<script setup lang="ts">
import Button from '../../atoms/Button/Button.vue'

defineProps({
  timer: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['open-timer-modal', 'finish-workout'])

const openTimerModal = () => {
  emit('open-timer-modal')
  console.log('testing opentimer')
}

const finishWorkout = () => {
  emit('finish-workout')
}
</script>

<style scoped>
.exercise-active-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}

.exercise-active-header__button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
}

.exercise-active-header__button--clock {
  background-color: #000;
  color: #fff;
}

.exercise-active-header__button--finish {
  color: #fff;
}

.exercise-active-header__timer {
  font-size: 24px;
  font-weight: bold;
}
</style>
