<template>
  <div class="input-block">
    <label :for="labelId" class="input-block__label">{{ label }}</label>
    <div class="input-block__input-wrapper">
      <ion-input
        :id="labelId"
        :aria-labelledby="labelId"
        :icon="icon"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :value="modelValue"
        :aria-invalid="error ? 'true' : 'false'"
        :aria-describedby="error ? errorId : null"
        class="input-block__input"
        @ion-input="handleInput"
        @ion-blur="handleBlur"
      />
    </div>
    <span v-if="error" :id="errorId" class="input-block__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { TextFieldTypes } from '@ionic/core'

defineProps({
  label: {
    type: String,
  },
  icon: {
    type: String,
    default: 'empty',
  },
  type: {
    type: String as () => TextFieldTypes,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: undefined,
  },
})

const emits = defineEmits(['update:modelValue', 'input', 'blur'])
const labelId = ref(`input-label-${Math.random().toString(36).substr(2, 9)}`)
const errorId = ref(`input-error-${Math.random().toString(36).substr(2, 9)}`)

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  emits('update:modelValue', input.value)
  emits('input', event)
}

const handleBlur = (event: Event) => {
  emits('blur', event)
}
</script>

<style scoped>
.input-block {
  /* Block styles */
}

.input-block__label {
  /* Element styles for label */
}

.input-block__input-wrapper {
  border-radius: 10px;
  border: 2px solid #00000060;
  padding-left: 10px;
}

.input-block__input {
  /* Element styles for input */
  font-size: 1rem; /* Ensure input text size */
  min-width: 4ch; /* Ensure input field is wide enough */
}

.input-block__input--disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
  opacity: 0.6;
}

.input-block__input--error {
  border: 1px solid red;
  background-color: #ffe6e6;
}

.input-block__input--type-text {
  /* Styles specific to text input type */
}

.input-block__input--type-password {
  /* Styles specific to password input type */
}

.input-block__input--type-email {
  /* Styles specific to email input type */
}

.input-block__input--type-number {
  /* Styles specific to number input type */
}

.input-block__error {
  @apply text-red-500 text-sm mt-2;
}

@media (max-width: 480px) {
  .input-block__input {
    font-size: 0.8rem; /* Smaller size for small screens */
  }
}
</style>
