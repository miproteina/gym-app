<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>¡Bienvenido a la página inicial de tu aplicación!</p>
      <p>Aquí puedes comenzar a construir tu contenido.</p>
      <Button label=""> hola </Button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
defineProps({
  // Puedes definir props aquí si es necesario
})

useHead({
  title: `Dashboard - ${useRuntimeConfig().public.appName}`,
})
</script>

<style scoped>
/* Estilos específicos para esta página */
</style>
