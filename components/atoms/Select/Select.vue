<template>
  <div class="select-component">
    <ion-item>
      <ion-label>{{ label }}</ion-label>
      <ion-select
        v-model="selectedValue"
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
  display: flex;
  flex-direction: column;
}

.select-component__label {
  margin-bottom: 8px;
}

.select-component__select--disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.select-component__select--error {
  border-color: #ff4d4f;
}

.select-component__select:focus {
  border-color: #40a9ff;
}
</style>
