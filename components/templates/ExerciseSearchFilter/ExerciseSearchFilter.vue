<template>
  <div class="exercise-search-filter">
    <!-- Recent Searches -->
    <div v-if="recentSearches.length" class="recent-searches">
      <h3>Recent Searches</h3>
      <ul>
        <li v-for="search in recentSearches" :key="search" @click="applyRecentSearch(search)">
          {{ search }}
        </li>
      </ul>
    </div>

    <!-- Search Input -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search exercises by name"
      class="search-input"
      @input="updateSearch"
    />

    <!-- Filter Dropdowns -->
    <div class="filters">
      <select v-model="selectedBodyPart" @change="updateFilters">
        <option value="">All Body Parts</option>
        <option v-for="part in bodyParts" :key="part" :value="part">
          {{ part }}
        </option>
      </select>

      <select v-model="selectedCategory" @change="updateFilters">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Filtered Exercises List -->
    <ul class="exercise-list">
      <li v-for="exercise in filteredExercises" :key="exercise.exerciseName">
        {{ exercise.exerciseName }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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

const categories = computed(() => {
  const cats = new Set(props.exercises.map(ex => ex.category))
  return Array.from(cats).sort()
})

const filteredExercises = computed(() => {
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

function updateSearch() {
  if (searchQuery.value && !recentSearches.value.includes(searchQuery.value)) {
    recentSearches.value.push(searchQuery.value)
  }
}

function updateFilters() {
  // This will automatically update the filteredExercises computed property
}

function applyRecentSearch(search) {
  searchQuery.value = search
  updateSearch()
}
</script>

<style scoped>
.exercise-search-filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recent-searches {
  margin-bottom: 1rem;
}

.search-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.filters {
  display: flex;
  gap: 1rem;
}

.filters select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.exercise-list {
  list-style-type: none;
  padding: 0;
}

.exercise-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
</style>
