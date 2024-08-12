<template>
  <div class="exercise-set-active">
    <Input
      v-model="firstNumber"
      :disabled="!edit"
      type="number"
      placeholder="Set"
      @input="validateInteger($event, 'firstNumber')"
    />
    <span class="exercise-set-active__text">{{ text }}</span>
    <Input v-model="secondNumber" :disabled="!edit" type="number" placeholder="Kg" />
    <Input
      v-model="thirdNumber"
      :disabled="!edit"
      type="number"
      placeholder="Reps"
      @input="validateInteger($event, 'thirdNumber')"
    />
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

function validateInteger(event: Event, field: 'firstNumber' | 'thirdNumber') {
  const input = event.target as HTMLInputElement
  const value = input.value.replace(/e/gi, '') // Remove 'E' from input

  // Parse and round the value if it's a valid number
  const numericValue = isNaN(parseFloat(value)) ? '' : Math.round(parseFloat(value)).toString()

  // Update the input and corresponding field
  input.value = numericValue
  if (field === 'firstNumber') {
    firstNumber.value = numericValue
  } else if (field === 'thirdNumber') {
    thirdNumber.value = numericValue
  }
}
</script>

<style scoped>
.exercise-set-active {
  @apply grid grid-cols-5 gap-2;
}

.exercise-set-active__text {
  /* From tailwindcss: Use unprefixed utilities to target mobile, and override them at larger breakpoints */
  @apply text-center w-12 content-center lg:w-56;
}

@media (max-width: 480px) {
  .exercise-set-active__text {
    font-size: 0.8rem; /* Smaller size for small screens */
  }
}
</style>
