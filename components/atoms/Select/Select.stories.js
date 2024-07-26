import SelectField from './Select.vue'

export default {
  title: 'Atoms/SelectField',
  component: SelectField,
  argTypes: {
    options: { control: 'array' },
    multiple: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'boolean' },
  },
}

const Template = args => ({
  components: { SelectField },
  setup() {
    return { args }
  },
  template: '<div class="ion-padding"><SelectField v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Select an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  placeholder: 'Choose...',
  value: '',
  multiple: false,
  disabled: false,
  error: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Select an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  placeholder: 'Choose...',
  value: '',
  multiple: false,
  disabled: true,
  error: false,
}

export const Multiple = Template.bind({})
Multiple.args = {
  label: 'Select options',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  placeholder: 'Choose...',
  value: [],
  multiple: true,
  disabled: false,
  error: false,
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Select an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  placeholder: 'Choose...',
  value: '',
  multiple: false,
  disabled: false,
  error: true,
}
