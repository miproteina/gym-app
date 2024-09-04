import ExerciseActiveHeader from './ExerciseActiveHeader.vue'

export default {
  title: 'Organisms/ExerciseActiveHeader',
  component: ExerciseActiveHeader,
  argTypes: {
    timer: { control: 'text' },
    onOpenTimerModal: { action: 'open-timer-modal' },
    onFinishWorkout: { action: 'finish-workout' },
  },
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
  timer: '00:45',
}

export const TimerSetToZero = Template.bind({})
TimerSetToZero.args = {
  timer: '00:00',
}

export const TimerRunning = Template.bind({})
TimerRunning.args = {
  timer: '12:34',
}

export const TimerNearEnd = Template.bind({})
TimerNearEnd.args = {
  timer: '59:59',
}
