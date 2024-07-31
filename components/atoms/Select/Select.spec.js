import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import SelectField from './Select.vue'

describe('Select.vue', () => {
  let wrapper

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  beforeEach(() => {
    wrapper = mount(SelectField, {
      propsData: {
        options,
        label: 'Test Select',
      },
    })
  })

  it('renders the select with default props', () => {
    expect(wrapper.find('.select-component').exists()).toBe(true)
    expect(wrapper.findAll('ion-select-option').length).toBe(options.length)
  })

  it('renders the select with a placeholder', async () => {
    await wrapper.setProps({ placeholder: 'Select an option' })
    expect(wrapper.find('ion-select').attributes('placeholder')).toBe('Select an option')
  })

  it('renders the select in multiple mode', async () => {
    await wrapper.setProps({ multiple: true })
    expect(wrapper.find('ion-select').attributes('multiple')).toBe('true')
  })

  it('renders the select as disabled', async () => {
    await wrapper.setProps({ disabled: true })
    expect(wrapper.find('ion-select').attributes('disabled')).toBe('true')
    expect(wrapper.find('ion-select').attributes('aria-disabled')).toBe('true')
    expect(wrapper.find('.select-component__select--disabled').exists()).toBe(true)
  })

  it('updates selected value when prop value changes', async () => {
    await wrapper.setProps({ value: 'option3' })
    expect(wrapper.vm.selectedValue).toBe('option3')
  })

  it('updates selected value when prop value changes', async () => {
    await wrapper.setProps({ value: 'option3' })
    expect(wrapper.vm.selectedValue).toBe('option3')
  })

  it('has basic accessibility attributes', () => {
    const ionSelect = wrapper.find('ion-select')
    expect(ionSelect.attributes('aria-disabled')).toBe(wrapper.props().disabled ? 'true' : 'false')
  })
})
