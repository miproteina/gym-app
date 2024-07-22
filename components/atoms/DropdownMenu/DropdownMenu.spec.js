import { shallowMount } from '@vue/test-utils'
import DropdownMenu from './DropdownMenu.vue'
import { describe, it, expect } from 'vitest'

describe('DropdownMenu.vue', () => {
  it('renders label when passed', () => {
    const label = 'Select an option'
    const wrapper = shallowMount(DropdownMenu, {
      props: { label, options: [] },
    })
    expect(wrapper.text()).toMatch(label)
  })

  it('renders options when passed', () => {
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ]
    const wrapper = shallowMount(DropdownMenu, {
      props: { options },
    })
    expect(wrapper.findAll('option').length).toBe(options.length)
  })

  it('emits select event with correct value', async () => {
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ]
    const wrapper = shallowMount(DropdownMenu, {
      props: { options },
    })
    const select = wrapper.find('select')
    await select.setValue('2')
    expect(wrapper.emitted().select[0]).toEqual(['2'])
  })

  it('is disabled when prop is true', () => {
    const wrapper = shallowMount(DropdownMenu, {
      props: { disabled: true, options: [] },
    })
    expect(wrapper.find('select').attributes('disabled')).toBe('disabled')
  })
})
