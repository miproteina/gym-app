<template>
  <div class="checkbox-block">
    <ion-checkbox
      :checked="modelValue"
      class="checkbox-block__input"
      :aria-labelledby="labelId"
      @ion-change="handleChange"
    />
    <label :id="labelId" :for="checkboxId" class="checkbox-block__label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

defineProps({
  label: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
const checkboxId = ref(`checkbox-${Math.random().toString(36).substr(2, 9)}`)
const labelId = ref(`checkbox-label-${Math.random().toString(36).substr(2, 9)}`)

const handleChange = (event: CustomEvent) => {
  emit('update:modelValue', event.detail.checked)
}
</script>

<style scoped>
.checkbox-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox-block__input {
  /* Estilos para el ion-checkbox */
}

.checkbox-block__label {
  /* Estilos para la etiqueta del checkbox */
}
</style>
