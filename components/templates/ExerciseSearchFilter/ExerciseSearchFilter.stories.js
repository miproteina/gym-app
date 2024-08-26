import ExerciseSearchFilter from './ExerciseSearchFilter.vue'

export default {
  title: 'Components/ExerciseSearchFilter',
  component: ExerciseSearchFilter,
}

const Template = args => ({
  components: { ExerciseSearchFilter },
  setup() {
    return { args }
  },
  template: '<ExerciseSearchFilter v-bind="args" />',
})

// Default state with all exercises
export const Default = Template.bind({})
Default.args = {
  exercises: [
    { exerciseName: 'Push-Up', bodyPart: 'Chest', category: 'Strength' },
    { exerciseName: 'Pull-Up', bodyPart: 'Back', category: 'Strength' },
    { exerciseName: 'Squat', bodyPart: 'Legs', category: 'Strength' },
    { exerciseName: 'Running', bodyPart: 'Legs', category: 'Cardio' },
    { exerciseName: 'Bench Press', bodyPart: 'Chest', category: 'Strength' },
  ],
}

// State with pre-filled recent searches
export const WithRecentSearches = Template.bind({})
WithRecentSearches.args = {
  exercises: [
    { exerciseName: 'Push-Up', bodyPart: 'Chest', category: 'Strength' },
    { exerciseName: 'Pull-Up', bodyPart: 'Back', category: 'Strength' },
    { exerciseName: 'Squat', bodyPart: 'Legs', category: 'Strength' },
    { exerciseName: 'Running', bodyPart: 'Legs', category: 'Cardio' },
    { exerciseName: 'Bench Press', bodyPart: 'Chest', category: 'Strength' },
  ],
}

// State with exercises filtered by category
export const FilteredByCategory = Template.bind({})
FilteredByCategory.args = {
  exercises: [
    { exerciseName: 'Push-Up', bodyPart: 'Chest', category: 'Strength' },
    { exerciseName: 'Pull-Up', bodyPart: 'Back', category: 'Strength' },
    { exerciseName: 'Squat', bodyPart: 'Legs', category: 'Strength' },
    { exerciseName: 'Running', bodyPart: 'Legs', category: 'Cardio' },
    { exerciseName: 'Bench Press', bodyPart: 'Chest', category: 'Strength' },
  ],
}

// State with no exercises available
export const NoExercises = Template.bind({})
NoExercises.args = {
  exercises: [],
}

// State with a large list of exercises
export const LargeExerciseList = Template.bind({})
LargeExerciseList.args = {
  exercises: Array.from({ length: 50 }, (_, i) => ({
    exerciseName: `Exercise ${i + 1}`,
    bodyPart: i % 2 === 0 ? 'Legs' : 'Chest',
    category: i % 3 === 0 ? 'Strength' : 'Cardio',
  })),
}
