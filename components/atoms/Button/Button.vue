<template>
  <ion-button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <span v-if="loading" class="spinner" />
    <ion-icon v-if="icon && !loading" :name="icon" class="mr-2" />
    <span v-if="!loading">{{ label }}</span>
  </ion-button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    default: 'rounded',
  },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.loading && !props.disabled) {
    emit('click')
  }
}

const buttonClasses = computed(() => [
  `ion-button ${props.color}`,
  props.size,
  props.shape,
  { loading: props.loading },
])
</script>

<style scoped lang="scss">
.ion-button {
  @apply w-full;
}
.ion-button::part(native) {
  @apply flex items-center justify-center transition ease-in-out duration-150;

  &.primary {
    @apply bg-blue-950 text-white hover:bg-blue-600;
  }
  &.secondary {
    @apply bg-gray-500 text-white hover:bg-gray-600;
  }
  &.medium {
    @apply text-base;
  }
  &.small {
    @apply text-sm;
  }
  &.large {
    @apply text-lg;
  }
  &.rounded {
    @apply rounded-full;
  }
  &.square {
    @apply rounded-none;
  }
  &.loading {
    @apply cursor-not-allowed opacity-50;
  }
}
.spinner {
  @apply animate-spin border-2 border-t-transparent border-white rounded-full h-4 w-4;
}
</style>
