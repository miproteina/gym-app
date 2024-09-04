import ExerciseActiveList from './ExerciseActiveList.vue'
import { ref } from 'vue'

export default {
  title: 'Organisms/ExerciseActiveList',
  component: ExerciseActiveList,
  argTypes: {
    title: { control: 'text' },
    exercises: { control: 'array' },
  },
}

const Template = args => ({
  components: { ExerciseActiveList },
  setup() {
    const exercises = ref(args.exercises)

    return { args, exercises }
  },
  template: '<ExerciseActiveList v-bind="args" :exercises="exercises" />',
})

export const Default = Template.bind({})
Default.args = {
  title: 'Leg Day',
  exercises: [
    { id: 1, firstNumber: '10', secondNumber: '50', thirdNumber: '12', checked: false },
    { id: 2, firstNumber: '12', secondNumber: '55', thirdNumber: '10', checked: true },
  ],
}

export const MultipleSets = Template.bind({})
MultipleSets.args = {
  title: 'Arm Day',
  exercises: [
    { id: 1, firstNumber: '15', secondNumber: '40', thirdNumber: '8', checked: false },
    { id: 2, firstNumber: '10', secondNumber: '45', thirdNumber: '10', checked: true },
    { id: 3, firstNumber: '12', secondNumber: '50', thirdNumber: '6', checked: false },
  ],
}

export const EmptyList = Template.bind({})
EmptyList.args = {
  title: 'Core Day',
  exercises: [],
}
