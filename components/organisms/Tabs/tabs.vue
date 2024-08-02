<template>
  <div class="tabs-container">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['tab', { active: index === activeTabIndex }]"
      :tabindex="index === activeTabIndex ? 0 : -1"
      role="tab"
      :aria-selected="index === activeTabIndex"
      :aria-controls="'tab-content-' + index"
      @click="setActiveTab(index)"
      @keyup.enter="setActiveTab(index)"
      @keyup.space="setActiveTab(index)"
      @keydown.arrow-right.prevent="focusNextTab(index)"
      @keydown.arrow-left.prevent="focusPreviousTab(index)"
    >
      <img :src="tab.icon" :alt="tab.text" class="tab-icon" />
      <span class="tab-text">{{ tab.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      validator: tabs => {
        return tabs.every(tab => 'icon' in tab && 'text' in tab)
      },
    },
  },
  data() {
    return {
      activeTabIndex: 0,
    }
  },
  methods: {
    setActiveTab(index) {
      this.activeTabIndex = index
      this.$emit('tab-changed', index)
      this.$nextTick(() => {
        this.$el.querySelectorAll('[role="tab"]')[index].focus()
      })
    },
    focusNextTab(currentIndex) {
      const nextIndex = (currentIndex + 1) % this.tabs.length
      this.$el.querySelectorAll('[role="tab"]')[nextIndex].focus()
    },
    focusPreviousTab(currentIndex) {
      const prevIndex = (currentIndex - 1 + this.tabs.length) % this.tabs.length
      this.$el.querySelectorAll('[role="tab"]')[prevIndex].focus()
    },
  },
}
</script>

<style scoped lang="scss">
.tabs-container {
  @apply flex items-center justify-between;
}

.tab {
  @apply grid items-center cursor-pointer transition ease-in-out duration-150 px-8 py-1;

  &:not(.active) {
    @apply bg-gray-500 text-white hover:text-blue-400;
  }

  &.active {
    @apply bg-blue-600 text-white;
  }

  .tab-icon {
    margin-right: 8px;
  }

  .tab-text {
    font-size: 14px;
  }
}
</style>
