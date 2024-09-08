import Button from './Button.vue'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
          'link',
        ],
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    shape: {
      control: { type: 'select', options: ['square', 'rounded'] },
    },
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
  label: 'Primary',
  color: 'primary',
  size: 'default',
  shape: 'square',
  disabled: false,
  loading: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Cancel',
  color: 'secondary',
  size: 'medium',
  shape: 'square',
  disabled: false,
  loading: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Submit',
  color: 'primary',
  size: 'medium',
  shape: 'square',
  disabled: true,
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Loading',
  color: 'primary',
  size: 'medium',
  shape: 'square',
  disabled: false,
  loading: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Save',
  icon: 'save', // Make sure this is a valid icon name
  color: 'primary',
  size: 'medium',
  shape: 'square',
  disabled: false,
  loading: false,
}
