<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ isSignUp ? 'Registro' : 'Login' }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="max-w-lg mx-auto">
        <section class="card my-8 p-6 rounded-lg shadow-lg bg-white">
          <h2 class="text-2xl font-bold mb-4">
            {{ isSignUp ? 'Registro' : isResetPassword ? 'Reset Password' : 'Login' }}
          </h2>
          <AuthForm
            v-if="isSignUp"
            :handle-submit="handleRegistration"
            submit-type="Sign Up"
            :error="error"
            @submit="handleRegistration"
          />
          <AuthForm
            v-else-if="isResetPassword"
            :handle-submit="handleResetPassword"
            submit-type="Reset Password"
            :error="error"
            @submit="handleResetPassword"
          />
          <AuthForm
            v-else
            :handle-submit="handleLogin"
            submit-type="Log In"
            :error="error"
            @submit="handleLogin"
          />
          <div v-if="!isSignUp && !isResetPassword" class="mt-3">
            <a href="#" class="text-blue-500 hover:underline" @click="toggleResetPasswordMode">
              Forgot Password?
            </a>
          </div>
          <div class="mt-3">
            <Button
              color="primary"
              shape="rounded"
              type="submit"
              :label="
                isSignUp
                  ? '¿Ya tienes una cuenta? Inicia sesión'
                  : '¿No tienes una cuenta? Regístrate'
              "
              @click="toggleAuthMode"
            />
          </div>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthForm from '@/components/organisms/authForm.vue'
import Button from '@/components/atoms/Button/Button.vue'
import { AppwriteException } from 'appwrite'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const exerciseStore = useExerciseStore()
const router = useRouter()
const isSignUp = ref(false)
const isResetPassword = ref(false)
const error = ref<string | null>(null)

const handleLogin = async (data: { email: string; password: string }) => {
  console.log(data)

  try {
    await userStore.login(data.email, data.password)
    error.value = null
    userStore.getCurrentUser()
    exerciseStore.fetchExercises()
    await router.push('/')
  } catch (e) {
    error.value = 'Error logging in. Please check your credentials.'
  }
}

const handleRegistration = async (data: { name: string; email: string; password: string }) => {
  try {
    await userStore.register(data.email, data.password, data.name)
    await router.push('/')
  } catch (e) {
    if (e instanceof AppwriteException) {
      error.value = e.message
    } else {
      error.value = 'Error registering. Please try again.'
    }
  }
}

const handleResetPassword = async (data: { email: string }) => {
  try {
    await userStore.resetPassword(data.email)
    error.value = null
    isResetPassword.value = false
  } catch (e) {
    console.log(e)
    if (e instanceof AppwriteException) {
      error.value = e.message
    } else {
      error.value = 'Error resetting password. Please try again.'
    }
  }
}

const toggleAuthMode = () => {
  isSignUp.value = !isSignUp.value
}

const toggleResetPasswordMode = () => {
  isResetPassword.value = !isResetPassword.value
}
</script>

<style scoped>
/* Estilos específicos para esta página */
.card {
  @apply p-6 bg-white shadow-lg rounded-lg;
}
</style>
