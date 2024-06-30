<template>
  <ion-button :color="color" :disabled="disabled">
    {{ label }}
  </ion-button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
/* Agrega tus estilos aquí si es necesario */
</style>
