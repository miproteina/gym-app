import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'Submit'
    const wrapper = mount(Button, {
      props: { label },
    })
    expect(wrapper.text()).toMatch(label)
  })

  it('applies the correct color', () => {
    const color = 'secondary'
    const wrapper = mount(Button, {
      props: { color, label: 'Submit' },
    })
    expect(wrapper.find('ion-button').attributes('color')).toBe(color)
  })

  it('disables the button when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true, label: 'Submit' },
    })
    expect(wrapper.find('ion-button').attributes('disabled')).toBe('true')
  })
})
