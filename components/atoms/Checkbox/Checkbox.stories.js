import CheckboxInput from './Checkbox.vue'

export default {
  title: 'Atoms/CheckboxInput',
  component: CheckboxInput,
  argTypes: {
    label: { control: 'text' },
    modelValue: { control: 'boolean' },
  },
}

const Template = args => ({
  components: { CheckboxInput },
  setup() {
    return { args }
  },
  template: '<CheckboxInput v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  modelValue: false,
}

export const Checked = Template.bind({})
Checked.args = {
  label: 'Checked Checkbox',
  modelValue: true,
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  modelValue: true,
}
