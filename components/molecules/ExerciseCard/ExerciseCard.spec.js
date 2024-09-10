import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExerciseCard from './ExerciseCard.vue'

describe('ExerciseCard.vue', () => {
  it('renders the component with required props', () => {
    const wrapper = mount(ExerciseCard, {
      props: {
        exerciseId: '1',
        exerciseName: 'Incline Bench Press',
        categories: [{ $id: '1', name: 'Chest' }],
      },
      global: {
        stubs: ['ion-label', 'Button'],
      },
    })

    expect(wrapper.find('.exercise-card__info-name').text()).toBe('Incline Bench Press')
  })

  it('renders the component with a custom image', () => {
    const wrapper = mount(ExerciseCard, {
      props: {
        exerciseId: '1',
        exerciseName: 'Incline Bench Press',
        categories: [{ $id: '1', name: 'Chest' }],
        imageUrl: '/path/to/image.png',
      },
      global: {
        stubs: ['ion-label', 'Button'],
      },
    })

    expect(wrapper.find('.exercise-card__image').attributes('src')).toBe('assets/1.webp')
  })

  it('emits openModal event when Button is clicked', async () => {
    const wrapper = mount(ExerciseCard, {
      props: {
        exerciseId: '1',
        exerciseName: 'Incline Bench Press',
        categories: [{ $id: '1', name: 'Chest' }],
      },
      global: {
        stubs: ['ion-label', 'Button'],
      },
    })

    await wrapper.findComponent({ name: 'Button' }).trigger('click')

    expect(wrapper.emitted('openModal')).toBeTruthy()
    expect(wrapper.emitted('openModal')[0]).toEqual(['1'])
  })
})
