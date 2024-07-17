<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
<<<<<<< HEAD
      <p>¡Bienvenido a la página inicial de tu aplicación!</p>
      <p>Aquí puedes comenzar a construir tu contenido.</p>
      <Button label=""> hola </Button>
  <div>
    <InputField
      label="Username"
      icon="person"
      placeholder="Enter your username"
      :value="username"
      :error="usernameError"
      @update:value="onUpdateUsername"
      @input="onInputUsername"
      @blur="onBlurUsername"
    />
  </div>

=======
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Bienvenido, {{ userData?.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>¡Bienvenido a la página inicial de tu aplicación!</p>
                <p>Aquí puedes comenzar a construir tu contenido.</p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">
            <ion-button expand="full" @click="syncData">Sincronizar Datos</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button expand="full" @click="logout">Logout</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-list>
              <ion-item v-for="(item, index) in exercises" :key="index">
                <ion-label>{{ item.name }}</ion-label>
                <ion-thumbnail>
                  <ion-img :src="assetsPath(item.$id)" />
                </ion-thumbnail>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
>>>>>>> main
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import InputField from '~/components/atoms/InputField/InputField.vue';

const username = ref('');
const usernameError = ref('');

const onUpdateUsername = (value: string) => {
  username.value = value;
};

const onInputUsername = (event: Event) => {
  console.log('Input event:', event);
};

const onBlurUsername = (event: Event) => {
  console.log('Blur event:', event);
  // Add your validation logic here
  if (username.value === '') {
    usernameError.value = 'Username is required';
  } else {
    usernameError.value = '';
  }
};


defineProps({
  // Puedes definir props aquí si es necesario
})
=======
import { computed, type ComputedRef } from 'vue'
import { useIonRouter, onIonViewWillEnter } from '@ionic/vue'
import { useUserStore } from '~/stores/userStore'
import { assetsPath } from '@/utils/utils'
import type { ExerciseInterface } from '@/utils/types'
const userStore = useUserStore()
const exerciseStore = useExerciseStore()
const router = useIonRouter()

//computed
const userData = computed(() => userStore.user)
const exercises: ComputedRef<ExerciseInterface[] | null> = computed(() => exerciseStore.exercises)

//methods

const logout = () => {
  userStore.logout()
  router.push('/login')
}

const syncData = () => {
  console.log('Sincronizando datos...')
  exerciseStore.fetchExercises()
  // Lógica para sincronizar datos
}
>>>>>>> main

useHead({
  title: `Dashboard - ${useRuntimeConfig().public.appName}`,
})

onIonViewWillEnter(async () => {
  if (!userStore.current) {
    router.push('/login')
  }
})
</script>

<style scoped>
/* Estilos específicos para esta página */
ion-card {
  margin-bottom: 20px;
}

ion-button {
  margin-top: 10px;
}
</style>
