<template>
  <div class="select-component">
    <ion-item>
      <ion-select
        v-model="selectedValue"
        justify="space-between"
        interface="popover"
        :multiple="multiple"
        :disabled="disabled"
        :aria-disabled="disabled"
        class="select-component__select"
        :class="{
          'select-component__select--disabled': disabled,
          'select-component__select--error': error,
        }"
        :placeholder="placeholder"
        @ion-change="handleChange"
      >
        <ion-select-option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </ion-select-option>
      </ion-select>
    </ion-item>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    options: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [Array, String],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
  data() {
    return {
      selectedValue: this.value || (this.multiple ? [] : ''),
    }
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue
    },
    selectedValue(newValue) {
      this.$emit('change', newValue)
    },
  },
  methods: {
    handleChange(event) {
      this.selectedValue = event.detail.value
      this.$emit('change', this.selectedValue)
    },
  },
}
</script>

<style scoped>
.select-component {
  @apply flex flex-col;
}

.select-component__select {
  @apply rounded-lg border-2 border-black/60 p-0.5 pl-2.5 pr-6;
}

.select-component__select--disabled {
  @apply border-slate-400 cursor-not-allowed;
}

.select-component__select--error {
  @apply border-red-400;
}

.select-component__select:focus {
  @apply border-blue-300;
}
</style>
