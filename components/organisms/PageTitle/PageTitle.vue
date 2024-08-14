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
import { IonIcon } from '@ionic/vue' // Import IonIcon component from Ionic

export default {
  components: {
    IonIcon, // Register IonIcon as a local component
  },
  props: {
    title: {
      type: String,
      required: true, // The title prop is required and must be a string
    },
    showBackButton: {
      type: Boolean,
      default: false, // The showBackButton prop is a boolean and defaults to false
    },
    actionButtons: {
      type: Array,
      default: () => [],
      // Validator function ensures each button object contains icon, label, and action properties
      validator: buttons => {
        return buttons.every(button => 'icon' in button && 'label' in button && 'action' in button)
      },
    },
  },
  methods: {
    // Method to emit a 'back' event when the back button is clicked
    goBack() {
      this.$emit('back')
    },
  },
}
</script>

<style scoped lang="scss">
:root {
  //Define CSS variables for different styles used in the component
  --page-title-align-items: center;
  --page-title-justify-content: space-between;
  --page-title-padding: 16px;
  --page-title-background-color: #f5f5f5;
  --page-title-border-bottom-color: #ddd;
  --page-title-text-color: #000;
  --page-title-back-button-color: #007bff;
  --page-title-action-button-background-color: #007bff;
  --page-title-action-button-color: white;
  --page-title-action-button-border-radius: 4px;
}

.page-title {
  //Flexbox settings to align items and space them evenly
  display: flex;
  align-items: var(--page-title-align-items);
  justify-content: var(--page-title-justify-content);
  padding: var(--page-title-padding);
  background-color: var(--page-title-background-color);
  border-bottom: 1px solid var(--page-title-border-bottom-color);

  &__back-button {
    //Styles for the back button
    cursor: pointer;
    margin-right: 16px;

    ion-icon {
      //Size and color of the ion-icon in the back button
      font-size: 24px;
      color: var(--page-title-back-button-color);
    }
  }

  &__text {
    //Flex settings to ensure the title takes up available space and centers
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: var(--page-title-text-color);
  }

  &__action-buttons {
    //Flexbox settings to align action buttons horizontally with space between
    display: flex;
    gap: 8px;

    &__action-button {
      //Styles for individual action buttons
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background-color: var(--page-title-action-button-background-color);
      color: var(--page-title-action-button-color);
      border: none;
      border-radius: var(--page-title-action-button-border-radius);
      cursor: pointer;

      ion-icon {
        //Size and spacing for icons inside action buttons
        margin-right: 8px;
        font-size: 16px;
      }
    }
  }
}
</style>
