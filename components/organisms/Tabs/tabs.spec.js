import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Tabs from './tabs.vue'

describe('Tabs.vue', () => {
  const tabs = [
    { icon: 'icon1.png', text: 'Tab 1' },
    { icon: 'icon2.png', text: 'Tab 2' },
    { icon: 'icon3.png', text: 'Tab 3' },
  ]

  it('renders tabs correctly', () => {
    const wrapper = mount(Tabs, {
      propsData: { tabs },
    })
    expect(wrapper.findAll('.tab').length).toBe(3)
  })

  it('sets the active tab on click', async () => {
    const wrapper = mount(Tabs, {
      propsData: { tabs },
    })
    const tab = wrapper.findAll('.tab').at(1)
    await tab.trigger('click')
    expect(wrapper.vm.activeTabIndex).toBe(1)
    expect(tab.classes()).toContain('active')
  })

  it('emits tab-changed event on tab change', async () => {
    const wrapper = mount(Tabs, {
      propsData: { tabs },
    })
    const tab = wrapper.findAll('.tab').at(1)
    await tab.trigger('click')
    expect(wrapper.emitted('tab-changed')[0]).toEqual([1])
  })
})
