<template>
  <div class="exercise-search-filter">
    <!-- Recent Searches -->
    <div v-if="recentSearches.length" class="exercise-search-filter__recent-searches">
      <h3>Recent Searches</h3>
      <ul>
        <li
          v-for="search in recentSearches"
          :key="search"
          :aria-label="'Search for ' + search"
          class="exercise-search-filter__list-item"
          @click="applyRecentSearch(search)"
        >
          {{ search }}
        </li>
      </ul>
    </div>

    <Input
      v-model="searchQuery"
      type="text"
      placeholder="Search exercises by name"
      aria-label="Search exercises"
      class="exercise-search-filter__search-input"
      @input="updateSearch"
    />

    <div class="exercise-search-filter__filters">
      <SelectField
        :value="selectedBodyPart"
        :options="bodyPartOptions"
        placeholder="All Body Parts"
        aria-label="Filter by body part"
        class="exercise-search-filter__filters-select"
        @change="updateBodyData"
      />
      <SelectField
        :value="selectedCategory"
        :options="categoryOptions"
        placeholder="All Categories"
        aria-label="Filter by category"
        class="exercise-search-filter__filters-select"
        @change="updateCategoryData"
      />
    </div>

    <!-- Filtered Exercises List -->
    <ul class="exercise-search-filter__list">
      <li
        v-for="exercise in filteredExercises"
        :key="exercise.exerciseName"
        :aria-label="'Exercise: ' + exercise.exerciseName"
        class="exercise-search-filter__list-item"
        @click="handleExerciseClick(exercise.exerciseName)"
      >
        {{ exercise.exerciseName }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Input from '../../atoms/InputField/InputField.vue'
import SelectField from '../../atoms/Select/Select.vue'

const props = defineProps({
  exercises: {
    type: Array,
    required: true,
  },
})

const searchQuery = ref('')
const selectedBodyPart = ref('')
const selectedCategory = ref('')
const recentSearches = ref([])

const bodyParts = computed(() => {
  const parts = new Set(props.exercises.map(ex => ex.bodyPart))
  return Array.from(parts).sort()
})

const bodyPartOptions = computed(() => [
  { value: '', label: 'All Body Parts' },
  ...bodyParts.value.map(part => ({ value: part, label: part })),
])

const categories = computed(() => {
  const cats = new Set(props.exercises.map(ex => ex.category))
  return Array.from(cats).sort()
})

const categoryOptions = computed(() => [
  { value: '', label: 'All Categories' },
  ...categories.value.map(part => ({ value: part, label: part })),
])

const filteredExercises = computed(() => {
  console.log('Filtering with:', {
    selectedBodyPart: selectedBodyPart.value,
    selectedCategory: selectedCategory.value,
    searchQuery: searchQuery.value,
  })
  return props.exercises
    .filter(exercise => {
      return (
        (selectedBodyPart.value === '' || exercise.bodyPart === selectedBodyPart.value) &&
        (selectedCategory.value === '' || exercise.category === selectedCategory.value) &&
        exercise.exerciseName.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })
    .sort((a, b) => a.exerciseName.localeCompare(b.exerciseName))
})

const updateBodyData = $data => (selectedBodyPart.value = $data)
const updateCategoryData = $data => (selectedCategory.value = $data)

function applyRecentSearch(search) {
  searchQuery.value = search
}

function handleExerciseClick(exerciseName) {
  searchQuery.value = exerciseName // Update the search query with the clicked exercise
  // Check if the exercise name is already in recentSearches
  const index = recentSearches.value.indexOf(exerciseName)

  // If it exists, remove it from its current position
  if (index !== -1) {
    recentSearches.value.splice(index, 1)
  }

  // Push the exercise name to the top of the list
  recentSearches.value.unshift(exerciseName)
}
</script>

<style scoped lang="scss">
.exercise-search-filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__recent-searches {
    margin-bottom: 1rem;
  }

  &__search-input {
    padding: 0.5rem;
  }

  &__filters {
    display: flex;
    gap: 1rem;

    &-select {
      padding: 0.5rem;
    }
  }

  &__list {
    list-style-type: none;
    padding: 0;

    &-item {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
