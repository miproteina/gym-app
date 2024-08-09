import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import CheckboxInput from './Checkbox.vue'

describe('CheckboxInput.vue', () => {
  let wrapper

  const label = 'Test Checkbox'

  beforeEach(() => {
    wrapper = mount(CheckboxInput, {
      props: {
        label,
        modelValue: false,
      },
    })
  })

  it('renders the checkbox and label', () => {
    expect(wrapper.find('.checkbox-block').exists()).toBe(true)
    expect(wrapper.find('.checkbox-block__label').text()).toBe(label)
    expect(wrapper.find('ion-checkbox').exists()).toBe(true)
  })

  it('sets the initial checked state based on modelValue', async () => {
    await wrapper.setProps({ modelValue: true })
    const checkbox = wrapper.find('ion-checkbox')
    expect(checkbox.attributes('checked')).toBe('true')

    await wrapper.setProps({ modelValue: false })
    expect(checkbox.attributes('checked')).toBe('false')
  })

  it('has ARIA attributes for accessibility', () => {
    const checkbox = wrapper.find('ion-checkbox')
    const label = wrapper.find('.checkbox-block__label')

    expect(checkbox.attributes('aria-labelledby')).toBe(label.attributes('id'))
    expect(checkbox.attributes('aria-labelledby')).toBeDefined()
  })
})
