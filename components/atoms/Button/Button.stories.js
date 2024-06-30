import Button from './Button.vue'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary'] },
    },
    disabled: { control: 'boolean' },
  },
}

const Template = args => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Submit',
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Cancel',
  color: 'secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Submit',
  color: 'primary',
  disabled: true,
}
