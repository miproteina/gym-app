import ExerciseCard from './ExerciseCard.vue'

export default {
  title: 'Molecules/ExerciseCard',
  component: ExerciseCard,
}

const Template = args => ({
  components: { ExerciseCard },
  setup() {
    return { args }
  },
  template: '<ExerciseCard v-bind="args" @openModal="onOpenModal" />',
  methods: {
    onOpenModal() {
      alert('Modal Opened')
    },
  },
})

export const Default = Template.bind({})
Default.args = {
  exerciseId: '6692b7b30029875c4206',
  exerciseName: 'Name',
  categories: [
    {
      $id: '1',
      name: 'Category',
    },
    {
      $id: '2',
      name: 'Category 2',
    },
  ],
  imageUrl: '6692b7b30029875c4206.webp',
}
