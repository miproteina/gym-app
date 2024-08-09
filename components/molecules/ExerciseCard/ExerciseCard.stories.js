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
  exerciseName: 'Name',
  categoryName: 'Category',
  imageUrl: '/path/to/image.png',
}
