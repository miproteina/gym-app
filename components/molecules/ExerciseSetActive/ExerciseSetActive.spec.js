import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ExerciseSetActive from './ExerciseSetActive.vue'
import InputField from '../../atoms/InputField/InputField.vue'
import Checkbox from '../../atoms/Checkbox/Checkbox.vue'

describe('ExerciseSetActive.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ExerciseSetActive, {
      props: {
        text: 'between inputs',
        edit: false,
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.exercise-set-active__text').text()).toBe('between inputs')
  })

  it('should update all input values and checkbox state', async () => {
    // Update firstNumber
    const firstInput = wrapper.findAllComponents(InputField)[0]
    await firstInput.setValue('10')
    expect(wrapper.vm.firstNumber).toBe('10')

    // Update secondNumber
    const secondInput = wrapper.findAllComponents(InputField)[1]
    await secondInput.setValue('20')
    expect(wrapper.vm.secondNumber).toBe('20')

    // Update thirdNumber
    const thirdInput = wrapper.findAllComponents(InputField)[2]
    await thirdInput.setValue('30')
    expect(wrapper.vm.thirdNumber).toBe('30')

    // Update checked
    const checkbox = wrapper.findComponent(Checkbox)
    await checkbox.setValue(true)
    expect(wrapper.vm.checked).toBe(true)
  })

  it('disables checkbox when edit prop is true', async () => {
    await wrapper.setProps({ edit: true })
    const checkbox = wrapper.findComponent(Checkbox)
    expect(checkbox.attributes('disabled')).toBe('true')
  })
})
