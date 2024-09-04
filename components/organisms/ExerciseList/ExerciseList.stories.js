import ExerciseList from './ExerciseList.vue'

export default {
  title: 'Organisms/ExerciseList',
  component: ExerciseList,
}

const Template = args => ({
  components: { ExerciseList },
  setup() {
    return { args }
  },
  template: '<ExerciseList v-bind="args" @openExerciseModal="action" />',
  methods: {
    action(exercise) {
      console.log('Exercise clicked:', exercise)
    },
  },
})

export const Default = Template.bind({})
Default.args = {
  exercises: [
    {
      exerciseName: 'Push-up',
      categoryName: 'Upper Body',
      imageUrl: 'https://example.com/push-up.jpg',
    },
    {
      exerciseName: 'Squat',
      categoryName: 'Lower Body',
      imageUrl: 'https://example.com/squat.jpg',
    },
    {
      exerciseName: 'Plank',
      categoryName: 'Core',
      imageUrl: 'https://example.com/plank.jpg',
    },
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  exercises: [],
}

export const LongList = Template.bind({})
LongList.args = {
  exercises: [
    {
      exerciseName: 'Push-up',
      categoryName: 'Upper Body',
      imageUrl: 'https://example.com/push-up.jpg',
    },
    {
      exerciseName: 'Squat',
      categoryName: 'Lower Body',
      imageUrl: 'https://example.com/squat.jpg',
    },
    { exerciseName: 'Plank', categoryName: 'Core', imageUrl: 'https://example.com/plank.jpg' },
    {
      exerciseName: 'Burpee',
      categoryName: 'Full Body',
      imageUrl: 'https://example.com/burpee.jpg',
    },
    {
      exerciseName: 'Lunges',
      categoryName: 'Lower Body',
      imageUrl: 'https://example.com/lunges.jpg',
    },
    {
      exerciseName: 'Mountain Climbers',
      categoryName: 'Cardio',
      imageUrl: 'https://example.com/mountain-climbers.jpg',
    },
  ],
}
