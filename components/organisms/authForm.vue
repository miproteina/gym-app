<template>
  <form class="space-y-4" @submit="handleSubmit">
    <div v-if="submitType === 'Sign Up'" class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input
        v-model="name"
        type="text"
        name="name"
        required
        class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        v-model="email"
        type="email"
        name="email"
        required
        class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <input
        v-model="password"
        type="password"
        name="password"
        required
        class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <Button :label="submitType" color="primary" shape="rounded" type="submit" />
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </form>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import Button from '~/components/atoms/Button/Button.vue'

defineProps<{
  handleSubmit: (event: Event) => void
  submitType: string
  error: string | null
}>()

const name = ref('')
const email = ref('')
const password = ref('')
</script>

<style scoped>
/* Estilos específicos para el formulario */
</style>
