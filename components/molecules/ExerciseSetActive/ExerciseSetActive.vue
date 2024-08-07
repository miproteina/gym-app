<template>
  <div class="exercise-set-active">
    <Input v-model="firstNumber" :disabled="!edit" type="number" placeholder="Set" />
    <span class="exercise-set-active__text">{{ text }}</span>
    <Input v-model="secondNumber" :disabled="!edit" type="number" placeholder="Kg" />
    <Input v-model="thirdNumber" :disabled="!edit" type="number" placeholder="Reps" />
    <Checkbox v-model="checked" :disabled="edit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../atoms/InputField/InputField.vue'
import Checkbox from '../../atoms/Checkbox/Checkbox.vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
  edit: {
    type: Boolean,
    default: false,
  },
})

const firstNumber = ref('') //set
const secondNumber = ref('') //kg
const thirdNumber = ref('') //reps
const checked = ref<boolean>(false)
</script>

<style scoped>
.exercise-set-active {
  @apply flex items-center gap-2;
}

.exercise-set-active__text {
  /* From tailwindcss: Use unprefixed utilities to target mobile, and override them at larger breakpoints */
  @apply text-center w-32 lg:w-20;
}

@media (max-width: 480px) {
  .exercise-set-active__text {
    font-size: 0.8rem; /* Smaller size for small screens */
  }
}
</style>
