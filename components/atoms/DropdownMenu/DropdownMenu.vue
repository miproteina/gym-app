<template>
  <div class="dropdown-menu">
    <label v-if="label" :for="dropdownId" class="dropdown-menu__label">{{ label }}</label>
    <select
      :id="dropdownId"
      :disabled="disabled"
      class="dropdown-menu__select"
      aria-label="Dropdown Menu"
      @change="handleChange"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        <span v-if="option.icon" class="dropdown-menu__option-icon">{{ option.icon }}</span>
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  emits: ['select'],
  data() {
    return {
      dropdownId: `dropdown-${Math.random().toString(36).substr(2, 9)}`,
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('select', event.target.value)
    },
  },
}
</script>

<style scoped>
.dropdown-menu {
  display: flex;
  flex-direction: column;
}

.dropdown-menu__label {
  margin-bottom: 0.5rem;
}

.dropdown-menu__select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s;
}

.dropdown-menu__select:disabled {
  background-color: #f5f5f5;
  border-color: #ddd;
}

.dropdown-menu__option-icon {
  margin-right: 0.5rem;
}
</style>
