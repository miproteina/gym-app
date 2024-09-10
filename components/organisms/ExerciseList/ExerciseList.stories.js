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
      exerciseId: '6692b7b30029875c4206',
      name: 'Testing name',
      categories: [
        {
          $id: '1',
          name: 'Chest',
        },
        {
          $id: '2',
          name: 'Back',
        },
      ],
      imageUrl: '6692b7b30029875c4206.webp',
    },
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  exercises: [],
}

export const Multiple = Template.bind({})
Multiple.args = {
  exercises: [
    {
      exerciseId: '6692b7b30029875c4206',
      name: 'Testing name',
      categories: [
        {
          $id: '1',
          name: 'Chest',
        },
        {
          $id: '2',
          name: 'Back',
        },
      ],
      imageUrl: '6692b7b30029875c4206.webp',
    },
    {
      exerciseId: '330230430bab',
      name: 'Testing name 2',
      categories: [
        {
          $id: '1',
          name: 'Chest',
        },
        {
          $id: '2',
          name: 'Back',
        },
      ],
      imageUrl: '330230430bab.webp',
    },
  ],
}
