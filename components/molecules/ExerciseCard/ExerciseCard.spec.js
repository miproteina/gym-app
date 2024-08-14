import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExerciseCard from './ExerciseCard.vue'

describe('ExerciseCard.vue', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(ExerciseCard, {
      props: {
        exerciseName: 'Incline Bench Press',
        categoryName: 'Chest',
      },
    })

    // Output the rendered HTML to check the structure
    console.log(wrapper.html())

    // Check if the exercise name is rendered correctly
    expect(wrapper.find('.exercise-card__info-name').text()).toBe('Incline Bench Press')

    // Check if the category name is rendered correctly
    expect(wrapper.find('.exercise-card__info-category').text()).toBe('Chest')
  })

  it('renders the component with a custom image', () => {
    const wrapper = mount(ExerciseCard, {
      props: {
        exerciseName: 'Incline Bench Press',
        categoryName: 'Chest',
        imageUrl: '/path/to/image.png', // Provide a valid imageUrl
      },
    })

    // Check if the image source is set correctly
    expect(wrapper.find('.exercise-card__image').attributes('src')).toBe('/path/to/image.png')
  })

  it('emits openModal event when eye icon button is clicked', async () => {
    const wrapper = mount(ExerciseCard, {
      props: {
        exerciseName: 'Incline Bench Press',
        categoryName: 'Chest',
      },
    })

    await wrapper.find('.exercise-card__button').trigger('click')

    // Check if the openModal event was emitted
    expect(wrapper.emitted('openModal')).toBeTruthy()
  })
})
