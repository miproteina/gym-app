import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExerciseActiveHeader from './ExerciseActiveHeader.vue'
import Button from '../../atoms/Button/Button.vue'

describe('ExerciseActiveHeader.vue', () => {
  it('renders with default timer value', () => {
    const wrapper = mount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    expect(wrapper.find('.exercise-active-header__timer').text()).toBe('12:35')
  })

  it('emits "open-timer-modal" event when clock button is clicked', async () => {
    const wrapper = mount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    await wrapper.findComponent({ ref: 'openTimerButton' }).trigger('click')
    expect(wrapper.emitted('open-timer-modal')).toBeTruthy()
  })

  it('emits "finish-workout" event when finish button is clicked', async () => {
    const wrapper = mount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    await wrapper.findComponent({ ref: 'finishButton' }).trigger('click')
    expect(wrapper.emitted('finish-workout')).toBeTruthy()
  })

  it('renders two Button components', () => {
    const wrapper = mount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    expect(wrapper.findAllComponents(Button)).toHaveLength(2)
  })

  it('passes correct props to Button components', () => {
    const wrapper = mount(ExerciseActiveHeader, {
      props: { timer: '12:35' },
    })
    const buttons = wrapper.findAllComponents(Button)

    expect(buttons[0].props()).toMatchObject({
      color: 'primary',
      size: 'small',
    })

    expect(buttons[1].props()).toMatchObject({
      color: 'danger',
      size: 'small',
      label: 'Finish',
    })
  })
})
