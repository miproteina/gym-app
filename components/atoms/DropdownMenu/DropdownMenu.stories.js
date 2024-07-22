import DropdownMenu from './DropdownMenu.vue'

export default {
  title: 'Atoms/DropdownMenu',
  component: DropdownMenu,
}

const Template = args => ({
  components: { DropdownMenu },
  setup() {
    return { args }
  },
  template: '<DropdownMenu v-bind="args" @select="action" />',
  methods: { action: value => console.log(value) },
})

export const Default = Template.bind({})
Default.args = {
  label: 'Select an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  label: 'Select an option',
  options: [
    { label: 'Option 1', value: '1', icon: '🔵' },
    { label: 'Option 2', value: '2', icon: '🟢' },
    { label: 'Option 3', value: '3', icon: '🔴' },
  ],
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Select an option',
  disabled: true,
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
}
