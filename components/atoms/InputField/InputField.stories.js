import InputField from './InputField.vue'

export default {
  title: 'Atoms/InputField',
  component: InputField,
  // props: label, icon, type, placeholder, value, disabled, error
  argTypes: {
    label: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
}

const Template = args => ({
  components: { InputField },
  setup() {
    return { args }
  },
  template: '<div class="ion-padding"><InputField v-bind="args" /></div>',
})

export const Text = Template.bind({})
// props: label, icon, type, placeholder, value, disabled, error
Text.args = {
  label: 'Test',
  type: 'text',
  placeholder: 'Testing placeholder',
  value: 'text',
  disabled: false,
  error: '',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  label: 'Password',
  icon: 'lock-closed',
  type: 'password',
  placeholder: 'Enter your password',
  value: '',
  disabled: false,
  error: '',
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  label: 'Email',
  icon: 'mail',
  type: 'email',
  placeholder: 'Enter your email',
  value: '',
  disabled: false,
  error: '',
}

export const NumberInput = Template.bind({})
NumberInput.args = {
  label: 'Number',
  icon: 'cellphone',
  type: 'number',
  placeholder: 'Enter a number',
  value: '',
  disabled: false,
  error: '',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Label',
  icon: 'empty',
  type: 'text',
  placeholder: 'Enter text',
  value: '',
  disabled: true,
  error: '',
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Label',
  icon: 'empty',
  type: 'text',
  placeholder: 'Enter text',
  value: '',
  disabled: false,
  error: 'This field is required',
}
