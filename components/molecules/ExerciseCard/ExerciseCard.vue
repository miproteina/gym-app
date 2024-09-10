<template>
  <div class="exercise-card">
    <img
      :src="assetsPath(exerciseId) || assetsPath(placeholderImage)"
      alt="Exercise Image"
      class="exercise-card__image"
    />
    <div class="exercise-card__info">
      <h3 class="exercise-card__info-name">{{ exerciseName }}</h3>
      <ion-label
        v-for="category in categories"
        :key="category.$id"
        class="exercise-card__info-category"
      >
        {{ category.name }}
      </ion-label>
    </div>
    <div>
      <Button color="light" size="small" :icon="ioniconsEyeOutline" @click="openModal" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exerciseId: {
      type: String,
      required: true,
    },
    exerciseName: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
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
      placeholderImage: '6692b7b30029875c4206.webp', // Replace with actual placeholder image path
    }
  },
  methods: {
    openModal() {
      console.log('openModal', this.exerciseId)
      this.$emit('openModal', this.exerciseId)
    },
    assetsPath(path = 'placeholder') {
      return `assets/${path}.webp`
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
  padding-right: 5px;
}

.exercise-card__button {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  padding: 5px;
}
</style>
