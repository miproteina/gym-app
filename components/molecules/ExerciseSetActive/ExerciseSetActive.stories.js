import ExerciseSetActive from './ExerciseSetActive.vue'

export default {
  title: 'Molecules/ExerciseSetActive',
  component: ExerciseSetActive,
  argTypes: {
    text: { control: 'text' },
    edit: { control: 'boolean' },
  },
}

const Template = args => ({
  components: { ExerciseSetActive },
  setup() {
    return { args }
  },
  template: '<ExerciseSetActive v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  text: '30x60',
  edit: false,
}

export const Editable = Template.bind({})
Editable.args = {
  text: 'Previous',
  edit: true,
}
