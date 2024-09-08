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
    expect(wrapper.find('ion-button').attributes('color')).toBe(color)
  })

  it('disables the button when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true, label: 'Submit' },
    })
    expect(wrapper.find('ion-button').attributes('disabled')).toBe('true')
  })

  it('shows loading spinner when loading prop is true', () => {
    const wrapper = mount(Button, {
      props: { loading: true, label: 'Submit' },
    })
    expect(wrapper.find('ion-spinner').exists()).toBe(true)
  })

  it('emits click event when button is clicked', async () => {
    const wrapper = mount(Button, {
      props: { label: 'Submit' },
    })
    await wrapper.find('ion-button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click event when button is disabled', async () => {
    const wrapper = mount(Button, {
      props: { label: 'Submit', disabled: true },
    })
    await wrapper.find('ion-button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click event when button is loading', async () => {
    const wrapper = mount(Button, {
      props: { label: 'Submit', loading: true },
    })
    await wrapper.find('ion-button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('applies the correct size', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: { size, label: 'Submit' },
    })
    expect(wrapper.find('ion-button').attributes('size')).toBe(size)
  })

  it('applies the correct shape', () => {
    const shape = 'rounded'
    const wrapper = mount(Button, {
      props: { shape, label: 'Submit' },
    })
    expect(wrapper.find('ion-button').attributes('shape')).toBe(shape)
  })
})
