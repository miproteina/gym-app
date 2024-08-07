<template>
  <div class="page-title">
    <div v-if="showBackButton" class="page-title__back-button" @click="goBack">
      <ion-icon name="arrow-back-outline" />
    </div>
    <h1 class="page-title__text">{{ title }}</h1>
    <div v-if="actionButtons.length" class="page-title__action-buttons">
      <button
        v-for="(button, index) in actionButtons"
        :key="index"
        class="page-title__action-button"
        @click="button.action"
      >
        <ion-icon :name="button.icon" />
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script>
import { IonIcon } from '@ionic/vue'

export default {
  components: {
    IonIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showBackButton: {
      type: Boolean,
      default: false,
    },
    actionButtons: {
      type: Array,
      default: () => [],
      validator: buttons => {
        return buttons.every(button => 'icon' in button && 'label' in button && 'action' in button)
      },
    },
  },
  emits: ['back'],
  methods: {
    goBack() {
      this.$emit('back')
    },
  },
}
</script>

<template>
  <div class="page-title">
    <div v-if="showBackButton" class="page-title__back-button" @click="goBack">
      <ion-icon name="arrow-back-outline" />
    </div>
    <h1 class="page-title__text">{{ title }}</h1>
    <div v-if="actionButtons.length" class="page-title__action-buttons">
      <button
        v-for="(button, index) in actionButtons"
        :key="index"
        class="page-title__action-button"
        @click="button.action"
      >
        <ion-icon :name="button.icon" />
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script>
import { IonIcon } from '@ionic/vue'

export default {
  components: {
    IonIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showBackButton: {
      type: Boolean,
      default: false,
    },
    actionButtons: {
      type: Array,
      default: () => [],
      validator: buttons => {
        return buttons.every(button => 'icon' in button && 'label' in button && 'action' in button)
      },
    },
  },
  methods: {
    goBack() {
      this.$emit('back')
    },
  },
}
</script>

<style scoped lang="scss">
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;

  &__back-button {
    cursor: pointer;
    margin-right: 16px;

    ion-icon {
      font-size: 24px;
      color: #007bff;
    }
  }

  &__text {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  &__action-buttons {
    display: flex;
    gap: 8px;

    &__action-button {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      ion-icon {
        margin-right: 8px;
        font-size: 16px;
      }
    }
  }
}
</style>

<style scoped lang="scss">
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;

  &__back-button {
    cursor: pointer;
    margin-right: 16px;

    ion-icon {
      font-size: 24px;
      color: #007bff;
    }
  }

  &__text {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  &__action-buttons {
    display: flex;
    gap: 8px;

    &__action-button {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      ion-icon {
        margin-right: 8px;
        font-size: 16px;
      }
    }
  }
}
</style>
