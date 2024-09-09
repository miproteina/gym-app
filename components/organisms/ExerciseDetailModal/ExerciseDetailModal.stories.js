import ExerciseDetailModal from './ExerciseDetailModal.vue'

export default {
  title: 'Organisms/ExerciseDetailModal',
  component: ExerciseDetailModal,
  argTypes: {
    isVisible: { control: 'boolean' },
    exerciseName: { control: 'text' },
    description: { control: 'text' },
    mediaUrl: { control: 'text' },
  },
}

const Template = args => ({
  components: { ExerciseDetailModal },
  setup() {
    return { args }
  },
  template: '<ExerciseDetailModal v-bind="args" @close="args.onClose" />',
})

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  exercise: {
    isVisible: true,
    $id: '6692b7b30029875c4206',
    name: 'Push-Up',
    description:
      'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms.',
    thumbnail: 'https://example.com/push-up.jpg',
  },
  onClose: () => console.log('Close button clicked'),
}

export const WithVideo = Template.bind({})
WithVideo.args = {
  exercise: {
    isVisible: true,
    $id: '6692b7b30029875c4206',
    name: 'Squat',
    description:
      'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.',
    thumbnail: 'https://example.com/squat.mp4',
  },
  onClose: () => console.log('Close button clicked'),
}

export const Hidden = Template.bind({})
Hidden.args = {
  exercise: {
    isVisible: true,
    $id: '6692b7b30029875c4206',
    name: 'Lunge',
    description:
      'A lunge is an exercise used to strengthen and tone the lower body by stepping forward and lowering the hips until both knees are bent at a 90-degree angle.',
    thumbnail: 'https://example.com/lunge.jpg',
  },
  onClose: () => console.log('Close button clicked'),
}
