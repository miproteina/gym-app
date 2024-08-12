import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ExerciseActiveList from './ExerciseActiveList.vue'
import ExerciseSetActive from '../../molecules/ExerciseSetActive/ExerciseSetActive.vue'

describe('ExerciseActiveList.vue', () => {
  let wrapper
  const defaultProps = {
    title: 'Exercise List',
    exercises: [
      { id: 1, firstNumber: '10', secondNumber: '50', thirdNumber: '8', checked: false },
      { id: 2, firstNumber: '12', secondNumber: '55', thirdNumber: '10', checked: false },
    ],
  }

  beforeEach(() => {
    wrapper = mount(ExerciseActiveList, {
      props: { ...defaultProps },
      global: {
        components: {
          ExerciseSetActive,
        },
      },
    })
  })

  it('renders with default props', () => {
    expect(wrapper.find('h2').text()).toBe(defaultProps.title)
    expect(wrapper.findAllComponents(ExerciseSetActive).length).toBe(defaultProps.exercises.length)
  })

  it('renders with custom props', async () => {
    const customProps = {
      title: 'Custom Exercise List',
      exercises: [
        { id: 1, firstNumber: '15', secondNumber: '60', thirdNumber: '12', checked: true },
      ],
    }

    await wrapper.setProps(customProps)

    expect(wrapper.find('h2').text()).toBe(customProps.title)
    expect(wrapper.findAllComponents(ExerciseSetActive).length).toBe(customProps.exercises.length)
  })

  it('adds a new exercise set', async () => {
    expect(wrapper.findAllComponents(ExerciseSetActive).length).toBe(defaultProps.exercises.length)

    await wrapper.find('button').trigger('click')

    expect(wrapper.findAllComponents(ExerciseSetActive).length).toBe(
      defaultProps.exercises.length + 1
    )
  })

  it('should have no accessibility violations', async () => {
    const titleElement = wrapper.find('h2')
    const headerElements = wrapper.findAll('.exercise-active-list__header span')
    const buttonElement = wrapper.find('button')

    expect(titleElement.attributes('role')).toBeUndefined()
    headerElements.forEach(header => {
      expect(header.attributes('role')).toBeUndefined()
    })
    expect(buttonElement.attributes('aria-label')).toBeUndefined()
    expect(buttonElement.text()).toBe('Add Set')
  })
})
