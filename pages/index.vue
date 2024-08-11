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
            <ion-button expand="full" :disabled="syncing" @click="syncData">
              <template #start>
                <ion-icon name="sync-outline" />
              </template>
              {{ syncing ? 'Sincronizando...' : 'Sincronizar Datos' }}
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button expand="full" color="danger" @click="logout">
              <template #start>
                <ion-icon name="log-out-outline" />
              </template>
              Logout
            </ion-button>
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
import { computed, ref, type ComputedRef } from 'vue'
import { useIonRouter, onIonViewWillEnter } from '@ionic/vue'
import { useUserStore } from '~/stores/userStore'
import { useExerciseStore } from '~/stores/exerciseStore'
import { assetsPath } from '@/utils/utils'
import type { ExerciseInterface } from '@/utils/types'

const userStore = useUserStore()
const exerciseStore = useExerciseStore()
const router = useIonRouter()
const syncing = ref(false)

// computed
const userData = computed(() => userStore.user)
const exercises: ComputedRef<ExerciseInterface[] | null> = computed(() => exerciseStore.exercises)

// methods
const logout = () => {
  userStore.logout()
  router.push('/login')
}

const syncData = async () => {
  if (syncing.value) return
  syncing.value = true
  try {
    await exerciseStore.fetchExercises()
    console.log('Datos sincronizados')
  } catch (error) {
    console.error('Error al sincronizar datos', error)
  } finally {
    syncing.value = false
  }
}

onIonViewWillEnter(async () => {
  await userStore.getCurrentSession()
  await userStore.getCurrentUser()
  if (!userStore.current) {
    router.push('/login')
  }
})
</script>

<style scoped>
ion-card {
  margin-bottom: 20px;
}

ion-button {
  margin-top: 10px;
}

ion-icon {
  margin-right: 8px;
}

ion-thumbnail {
  width: 50px;
  height: 50px;
}
</style>
