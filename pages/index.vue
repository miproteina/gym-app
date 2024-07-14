<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
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
                <template #end>
                  <ion-thumbnail>
                    <ion-img :src="assetsPath(item.$id)" />
                  </ion-thumbnail>
                </template>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useIonRouter } from '@ionic/vue'
import { useUserStore } from '~/stores/userStore'
import { assetsPath } from '@/utils/utils'
import type { ExerciseInterface } from '@/utils/types'
const userStore = useUserStore()
const exerciseStore = useExerciseStore()
const router = useIonRouter()

//computed
const userData = computed(() => userStore.user)
const exercises: ExerciseInterface[] | null = computed(() => exerciseStore.exercises)

//methods

const logout = () => {
  userStore.logout()
  router.push('/login')
}

const syncData = () => {
  console.log('Sincronizando datos...')
  // Lógica para sincronizar datos
}

useHead({
  title: `Dashboard - ${useRuntimeConfig().public.appName}`,
})

onMounted(async () => {
  console.log(userData.value)
  if (!userData.value) {
    console.log('No hay sesión actual, iniciando sesión...')
    await userStore.getCurrentSession()
  }

  exerciseStore.fetch()
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
