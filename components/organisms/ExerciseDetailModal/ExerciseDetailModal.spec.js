import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ExerciseDetailModal from './ExerciseDetailModal.vue'

describe('ExerciseDetailModal.vue', () => {
  let wrapper

  const exercise = {
    $id: '1',
    name: 'Push-Up',
    description:
      'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms.',
    thumbnail: 'assets/1.webp',
  }

  const propsData = {
    exercise,
    isOpen: true,
  }

  beforeEach(() => {
    wrapper = mount(ExerciseDetailModal, {
      props: { ...propsData },
    })
  })

  it('renders the component with default props', () => {
    expect(wrapper.find('ion-title').text()).toBe('Push-Up')
    expect(wrapper.find('p').text()).toBe(
      'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms.'
    )
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders a video when thumbnail is a video file', () => {
    const videoExercise = {
      ...exercise,
      thumbnail: 'https://example.com/squat.mp4',
    }
    wrapper = mount(ExerciseDetailModal, {
      props: {
        exercise: videoExercise,
        isOpen: true,
      },
    })

    expect(wrapper.find('video').exists()).toBe(true)
  })

  it('emits a close event when the close button is clicked', async () => {
    await wrapper.setProps({
      isOpen: true,
    })
    await wrapper.find('ion-button').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('emits a close event when the modal is dismissed', async () => {
    await wrapper.trigger('did-dismiss')

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('uses the correct asset path for images', () => {
    const img = wrapper.find('img')
    if (img.exists()) {
      expect(img.attributes('src')).toBe('assets/1.webp')
      expect(img.attributes('alt')).toBe('Exercise image')
    } else {
      throw new Error('Image element not found')
    }
  })

  it('computes isVideo correctly', async () => {
    expect(wrapper.vm.isVideo).toBe(false)

    await wrapper.setProps({
      exercise: {
        ...exercise,
        thumbnail: 'video.mp4',
      },
    })
    expect(wrapper.vm.isVideo).toBe(true)

    await wrapper.setProps({
      exercise: {
        ...exercise,
        thumbnail: 'video.webm',
      },
    })
    expect(wrapper.vm.isVideo).toBe(true)
  })
})
