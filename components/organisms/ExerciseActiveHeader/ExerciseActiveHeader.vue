<template>
  <div class="exercise-active-header">
    <button
      class="exercise-active-header__button exercise-active-header__button--clock"
      @click="openTimerModal"
    >
      <ion-icon name="time-outline" />
    </button>
    <span class="exercise-active-header__timer">{{ timer }}</span>
    <button
      class="exercise-active-header__button exercise-active-header__button--finish"
      @click="finishWorkout"
    >
      Finish
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExerciseActiveHeader',
  props: {
    timer: {
      type: String,
      required: true,
    },
  },
  methods: {
    openTimerModal() {
      this.$emit('open-timer-modal')
    },
    finishWorkout() {
      this.$emit('finish-workout')
    },
  },
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
  background-color: #000;
  color: #fff;
}

.exercise-active-header__timer {
  font-size: 24px;
  font-weight: bold;
}
</style>
