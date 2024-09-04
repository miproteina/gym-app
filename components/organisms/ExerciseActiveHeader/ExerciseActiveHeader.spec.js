import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExerciseActiveHeader from './ExerciseActiveHeader.vue'

describe('ExerciseActiveHeader.vue', () => {
  it('renders with default timer value', () => {
    const wrapper = shallowMount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    expect(wrapper.text()).toContain('12:35')
  })

  it('emits "open-timer-modal" event when clock button is clicked', async () => {
    const wrapper = shallowMount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    await wrapper.find('[data-test="open-timer-modal"]').trigger('click')
    expect(wrapper.emitted('open-timer-modal')).toBeTruthy()
  })

  it('emits "finish-workout" event when finish button is clicked', async () => {
    const wrapper = shallowMount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    await wrapper.find('.exercise-active-header__button--finish').trigger('click')
    expect(wrapper.emitted('finish-workout')).toBeTruthy()
  })
})
