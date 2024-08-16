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
  isVisible: true,
  exerciseName: 'Push-Up',
  description:
    'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms.',
  mediaUrl: 'https://example.com/push-up.jpg',
  onClose: () => console.log('Close button clicked'),
}

export const WithVideo = Template.bind({})
WithVideo.args = {
  isVisible: true,
  exerciseName: 'Squat',
  description:
    'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.',
  mediaUrl: 'https://example.com/squat.mp4',
  onClose: () => console.log('Close button clicked'),
}

export const Hidden = Template.bind({})
Hidden.args = {
  isVisible: false,
  exerciseName: 'Lunge',
  description:
    'A lunge is an exercise used to strengthen and tone the lower body by stepping forward and lowering the hips until both knees are bent at a 90-degree angle.',
  mediaUrl: 'https://example.com/lunge.jpg',
  onClose: () => console.log('Close button clicked'),
}
