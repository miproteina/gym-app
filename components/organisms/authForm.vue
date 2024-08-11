<template>
  <div class="space-y-4">
    <div v-if="submitType === 'Sign Up'" class="mb-4">
      <Input v-model="name" type="text" placeholder="Name" name="name" required label="Name" />
    </div>
    <div class="mb-4">
      <Input v-model="email" placeholder="Email" type="email" name="email" label="Email" required />
    </div>
    <div v-if="submitType !== 'Reset Password'" class="mb-4">
      <Input
        v-model="password"
        placeholder="Password"
        type="password"
        name="password"
        required
        label="Password"
      />
    </div>

    <Button color="primary" shape="rounded" type="submit" :label="submitType" @click="submitForm" />
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    <div v-if="submitType === 'Log In' || submitType === 'Sign Up'">
      <p class="mt-4 text-center">Or login with:</p>
      <Button
        color="secondary"
        shape="rounded"
        type="button"
        label="Login with Google"
        @click="loginWithGoogle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import Button from '~/components/atoms/Button/Button.vue'
import Input from '~/components/atoms/InputField/InputField.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const props = defineProps<{
  handleSubmit: (data: { name: string; email: string; password: string }) => void
  submitType: string
  error: string | null
}>()

const name = ref('')
const email = ref('')
const password = ref('')

const submitForm = () => {
  props.handleSubmit({ name: name.value, email: email.value, password: password.value })
}

const loginWithGoogle = async () => {
  await userStore.loginWithGoogle()
}
</script>

<style scoped>
/* Estilos específicos para el formulario */
</style>
