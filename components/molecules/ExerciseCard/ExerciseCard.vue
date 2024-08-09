<template>
  <div class="exercise-card">
    <img :src="imageUrl || placeholderImage" alt="Exercise Image" class="exercise-card__image" />
    <div class="exercise-card__info">
      <h3 class="exercise-card__info-name">{{ exerciseName }}</h3>
      <p class="exercise-card__info-category">{{ categoryName }}</p>
    </div>
    <button class="exercise-card__button" @click="openModal">
      <ion-icon name="eye-outline" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exerciseName: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  emits: ['openModal'],
  data() {
    return {
      placeholderImage: '/path/to/placeholder.png', // Replace with actual placeholder image path
    }
  },
  methods: {
    openModal() {
      this.$emit('openModal')
    },
  },
}
</script>

<style scoped>
.exercise-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.exercise-card__image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.exercise-card__info {
  flex-grow: 1;
  margin-left: 10px;
}

.exercise-card__info-name {
  font-size: 1.1em;
  margin: 0;
}

.exercise-card__info-category {
  font-size: 0.9em;
  color: #666;
}

.exercise-card__button {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  padding: 5px;
}
</style>
