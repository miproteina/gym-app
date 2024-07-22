import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'Submit'
    const wrapper = mount(Button, {
      props: { label },
    })
    expect(wrapper.text()).toContain(label)
  })

  it('applies the correct color', () => {
    const color = 'secondary'
    const wrapper = mount(Button, {
      props: { color, label: 'Submit' },
    })
    expect(wrapper.find('ion-button').classes()).toContain(color)
  })

  it('disables the button when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true, label: 'Submit' },
    })
    expect(wrapper.find('ion-button').attributes('disabled')).toBeDefined()
  })

  it('shows loading spinner when loading prop is true', () => {
    const wrapper = mount(Button, {
      props: { loading: true, label: 'Submit' },
    })
    expect(wrapper.find('.spinner').exists()).toBe(true)
  })

  it('emits click event when button is clicked', async () => {
    const wrapper = mount(Button, {
      props: { label: 'Submit' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
