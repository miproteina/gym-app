import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ExerciseDetailModal from './ExerciseDetailModal.vue'

describe('ExerciseDetailModal.vue', () => {
  let wrapper

  const propsData = {
    exerciseName: 'Push-Up',
    description:
      'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms.',
    mediaUrl: 'https://example.com/push-up.jpg',
    isVisible: true,
  }

  beforeEach(() => {
    wrapper = mount(ExerciseDetailModal, {
      props: { ...propsData },
    })
  })

  it('renders the component with default props', () => {
    expect(wrapper.find('.exercise-title').text()).toBe('Push-Up')
    expect(wrapper.find('.exercise-description').text()).toBe(
      'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms.'
    )
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders a video when mediaUrl is a video file', () => {
    const wrapper = mount(ExerciseDetailModal, {
      props: {
        exerciseName: 'Squat',
        description:
          'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.',
        mediaUrl: 'https://example.com/squat.mp4',
        isVisible: true,
      },
    })

    expect(wrapper.find('video').exists()).toBe(true)
  })

  it('emits a close event when the close button is clicked', async () => {
    await wrapper.find('.close-button').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('emits a close event when clicking outside the modal content', async () => {
    await wrapper.find('.modal-overlay').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('does not emit a close event when clicking inside the modal content', async () => {
    await wrapper.find('.modal-content').trigger('click')

    expect(wrapper.emitted('close')).toBeFalsy()
  })

  it('is accessible by ensuring the modal has the necessary ARIA attributes', () => {
    const modalOverlay = wrapper.find('.modal-overlay')
    expect(modalOverlay.attributes('aria-modal')).toBe('true')

    const closeButton = wrapper.find('.close-button')
    expect(closeButton.attributes('aria-label')).toBe('Close')
  })
})
