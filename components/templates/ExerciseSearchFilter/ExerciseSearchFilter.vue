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

    <Input
      v-model="searchQuery"
      type="text"
      placeholder="Search exercises by name"
      @input="updateSearch"
    />

    <div class="filters">
      <SelectField
        v-model="selectedBodyPart"
        :options="bodyPartOptions"
        placeholder="All Body Parts"
      />
      <select v-model="selectedCategory">
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
