import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import InputField from './InputField.vue'

describe('InputField.vue', () => {
  let wrapper

  const label = 'Test Input'
  const placeholder = 'Enter text'
  const error = 'This field is required'

  beforeEach(() => {
    wrapper = mount(InputField, {
      props: {
        label,
        value: '',
        placeholder,
      },
    })
  })

  it('renders the input field with default props', () => {
    expect(wrapper.find('.input-block').exists()).toBe(true)
    expect(wrapper.find('.input-block__label').text()).toBe(label)
    expect(wrapper.find('ion-input').attributes('placeholder')).toBe(placeholder)
  })

  it('renders the input field with different types', async () => {
    const types = ['text', 'password', 'email', 'number']

    for (const type of types) {
      await wrapper.setProps({ type })
      expect(wrapper.find('ion-input').attributes('type')).toBe(type)
    }
  })

  it('emits update:value when input value changes', async () => {
    const input = wrapper.find('ion-input')

    // Simulate input event
    await input.setValue('New value')
    await input.trigger('ion-input', { target: { value: 'New value' } })

    // Check if update:value event has been emitted
    expect(wrapper.emitted()['update:value']).toBeTruthy()
    expect(wrapper.emitted()['update:value'][0]).toEqual(['New value'])
  })

  it('emits blur event when input loses focus', async () => {
    const input = wrapper.find('ion-input')

    // Simulate blur event
    await input.trigger('ion-blur')

    // Check if blur event has been emitted
    expect(wrapper.emitted().blur).toBeTruthy()
  })

  it('renders input field as disabled', async () => {
    await wrapper.setProps({ disabled: true })
    const input = wrapper.find('ion-input')

    expect(input.attributes('disabled')).toBe('true')
    expect(wrapper.find('.input-block__input--disabled').exists()).toBe(true)
  })

  it('renders input field with error styles', async () => {
    await wrapper.setProps({ error })
    wrapper.find('ion-input')

    expect(wrapper.find('.input-block__input--error').exists()).toBe(true)
    expect(wrapper.find('.input-block__error').text()).toBe(error)
  })

  it('has accessibility attributes', () => {
    const input = wrapper.find('ion-input')
    const label = wrapper.find('label')

    expect(input.attributes('aria-labelledby')).toBe(label.attributes('for'))
    expect(input.attributes('aria-invalid')).toBe('false')

    // Check for error aria attributes
    wrapper.setProps({ error })
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.attributes('aria-describedby')).toBe(
      wrapper.find('.input-block__error').attributes('id')
    )
  })
})
