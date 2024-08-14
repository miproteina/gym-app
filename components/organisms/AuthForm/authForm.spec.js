import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AuthForm from './authForm.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from '@/stores/userStore'

describe('Google Auth Form', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders the correct text based on submitType Log In', () => {
    // Mount the component with the submitType prop set to 'google'
    const wrapper = mount(AuthForm, {
      props: {
        submitType: 'Log In',
        handleSubmit: vi.fn(),
        error: null,
      },
    })

    // Find the button and check if its text matches 'Login with Google'
    const buttonLogin = wrapper.findAllComponents({ name: 'Button' }).at(0).text()
    const buttonGoogle = wrapper.findAllComponents({ name: 'Button' }).at(1).text()

    expect(buttonLogin).toBe('Log In')
    expect(buttonGoogle).toBe('Login with Google')
  })

  it('renders the correct text based on submitType Sign Up', () => {
    // Mount the component with the submitType prop set to 'google'
    const wrapper = mount(AuthForm, {
      props: {
        submitType: 'Sign Up',
        handleSubmit: vi.fn(),
        error: null,
      },
    })

    // Find the button and check if its text matches 'Login with Google'
    const buttonLogin = wrapper.findAllComponents({ name: 'Button' }).at(0).text()
    const buttonGoogle = wrapper.findAllComponents({ name: 'Button' }).at(1).text()

    expect(buttonLogin).toBe('Sign Up')
    expect(buttonGoogle).toBe('Login with Google')
  })

  it('should authenticate using Google', async () => {
    const wrapper = mount(AuthForm, {
      global: {
        mocks: {
          $appwrite: {
            account: {
              createOAuth2Session: vi.fn().mockResolvedValue({
                status: 'success',
                userId: 'unique_user_id',
              }),
            },
          },
        },
      },
      props: {
        submitType: 'Sign Up',
        handleSubmit: vi.fn(),
        error: null,
      },
    })

    const userStore = useUserStore()

    const buttonGoogle = wrapper.findAllComponents({ name: 'Button' }).at(1)
    const spy = vi.spyOn(userStore, 'loginWithGoogle')

    // Simulate button click
    await buttonGoogle.trigger('click')

    // Check if Google auth was called
    expect(spy).toHaveBeenCalled()
  })
})
