<!-- components/navbar.vue -->
<script setup>
const user = useUserSession()
</script>

<template>
  <div>
    <!--- Navbar -->
    <nav class="main-header u-padding-inline-end-0">
      <h3 class="u-stretch eyebrow-heading-1">Idea Tracker</h3>
      <!-- Email and logout button if logged in user -->
      <div v-if="user.current.value" class="main-header-end u-margin-inline-end-16">
        <p>{{ user.current.providerUid }}</p>
        <button class="button" type="button" @click="user.logout()">Logout</button>
      </div>
      <!-- Login button if no user logged in -->
      <NuxtLink v-else href="/login" class="button u-margin-inline-end-16"> Login </NuxtLink>
    </nav>
  </div>
</template>
