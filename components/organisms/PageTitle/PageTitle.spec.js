import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import PageTitle from '@/components/organisms/PageTitle/PageTitle.vue'
import { IonIcon } from '@ionic/vue'

describe('PageTitle.vue', () => {
  it('renders the title', () => {
    const title = 'Test Title'
    const wrapper = shallowMount(PageTitle, {
      props: { title }, // Changed from propsData to props for Vue 3
      global: {
        components: {
          IonIcon, // Register IonIcon globally for the test
        },
      },
    })
    expect(wrapper.find('.page-title__text').text()).toBe(title)
  })

  it('emits "back" event when back button is clicked', async () => {
    const wrapper = shallowMount(PageTitle, {
      props: { showBackButton: true },
      global: {
        components: {
          IonIcon,
        },
      },
    })
    await wrapper.find('.page-title__back-button').trigger('click')
    expect(wrapper.emitted().back).toBeTruthy()
  })

  it('renders action buttons and triggers their actions', async () => {
    const mockAction = vi.fn() // Use vi.fn() for mocking in Vitest
    const actionButtons = [
      { icon: 'checkmark', label: 'Action 1', action: mockAction },
      { icon: 'close', label: 'Action 2', action: mockAction },
    ]
    const wrapper = shallowMount(PageTitle, {
      props: { actionButtons },
      global: {
        components: {
          IonIcon,
        },
      },
    })
    const buttons = wrapper.findAll('.page-title__action-button')
    expect(buttons).toHaveLength(actionButtons.length)

    await buttons[0].trigger('click')
    expect(mockAction).toHaveBeenCalled()

    await buttons[1].trigger('click')
    expect(mockAction).toHaveBeenCalledTimes(2)
  })
})
