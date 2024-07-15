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

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
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

useHead({
  title: `Dashboard - ${useRuntimeConfig().public.appName}`,
})
</script>

<style scoped>
/* Estilos específicos para esta página */
</style>
