import ExerciseActiveHeader from './ExerciseActiveHeader.vue'

export default {
  title: 'Organisms/ExerciseActiveHeader',
  component: ExerciseActiveHeader,
}

const Template = args => ({
  components: { ExerciseActiveHeader },
  setup() {
    return { args }
  },
  template: '<ExerciseActiveHeader v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  timer: '12:35',
}

export const CustomTimer = Template.bind({})
CustomTimer.args = {
  timer: '15:20',
}
