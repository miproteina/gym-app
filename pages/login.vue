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
          <h2 class="text-2xl font-bold mb-4">{{ isSignUp ? 'Registro' : 'Login' }}</h2>
          <AuthForm
            v-if="isSignUp"
            :handle-submit="handleRegistration"
            submit-type="Sign Up"
            :error="error"
          />
          <AuthForm v-else :handle-submit="handleLogin" submit-type="Log In" :error="error" />
          <button class="mt-4 text-blue-500 hover:underline" @click="toggleAuthMode">
            {{
              isSignUp
                ? '¿Ya tienes una cuenta? Inicia sesión'
                : '¿No tienes una cuenta? Regístrate'
            }}
          </button>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthForm from '@/components/organisms/authForm.vue'
import { AppwriteException } from 'appwrite'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const exerciseStore = useExerciseStore()
const router = useRouter()
const isSignUp = ref(false)
const error = ref<string | null>(null)

const handleLogin = async (event: Event) => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  try {
    await userStore.login(formData.get('email') as string, formData.get('password') as string)
    form.reset()
    error.value = null
    userStore.getCurrentUser()
    exerciseStore.fetchExercises()
    await router.push('/')
  } catch (e) {
    error.value = 'Error logging in. Please check your credentials.'
  }
}

const handleRegistration = async (event: Event) => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  try {
    await userStore.register(
      formData.get('email') as string,
      formData.get('password') as string,
      formData.get('name') as string
    )
    await router.push('/')
  } catch (e) {
    if (e instanceof AppwriteException) {
      error.value = e.message
    } else {
      error.value = 'Error registering. Please try again.'
    }
  }
}

const toggleAuthMode = () => {
  isSignUp.value = !isSignUp.value
}
</script>

<style scoped>
/* Estilos específicos para esta página */
.card {
  @apply p-6 bg-white shadow-lg rounded-lg;
}
</style>
