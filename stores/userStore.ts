import { defineStore } from 'pinia'
import { AppwriteException, ID, type Models } from 'appwrite'
import { ref } from 'vue'
import { account } from '@/utils/appwrite'

export const useUserStore = defineStore(
  'user',
  () => {
    const current = ref<Models.Session | null>(null) // Reference to current session
    const user = ref<Models.User<Models.Preferences> | null>(null) // Reference to current user object

    /**
     * Registers a new user and logs them in.
     * @param email - User's email.
     * @param password - User's password.
     * @param name - User's name.
     */
    const register = async (email: string, password: string, name: string): Promise<void> => {
      try {
        await account.create(ID.unique(), email, password, name) // Register new user in Appwrite
        await login(email, password) // Login registered user
      } catch (e) {
        console.error('Registration failed:', e)
        throw e // Re-throw the error for further handling
      }
    }

    /**
     * Logs in a user with email and password.
     * @param email - User's email.
     * @param password - User's password.
     */
    const login = async (email: string, password: string): Promise<void> => {
      try {
        current.value = await account.createEmailPasswordSession(email, password) // Open user session in Appwrite
      } catch (e) {
        if (
          e instanceof AppwriteException &&
          e.code === 401 &&
          e.type === 'user_session_already_exists'
        ) {
          await logout()
          await login(email, password)
        } else {
          console.error('Login failed:', e)
          throw e // Re-throw the error for further handling
        }
      }
    }

    /**
     * Logs out the current user.
     */
    const logout = async (): Promise<void> => {
      try {
        await account.deleteSession('current') // Delete Appwrite user session
        current.value = null // Clear current session
      } catch (e) {
        console.error('Logout failed:', e)
        throw e // Re-throw the error for further handling
      }
    }

    /**
     * Retrieves the current user's data.
     * @returns - The current user data.
     */
    const getCurrentUser = async (): Promise<Models.User<Models.Preferences>> => {
      try {
        const userData = await account.get()
        user.value = userData
        return userData
      } catch (e) {
        console.error('Failed to get current user:', e)
        throw e // Re-throw the error for further handling
      }
    }

    /**
     * Retrieves the current session data.
     */
    const getCurrentSession = async (): Promise<void> => {
      try {
        current.value = await account.getSession('current')
      } catch (e) {
        console.error('Failed to get current session:', e)
        throw e // Re-throw the error for further handling
      }

      getCurrentUser()
    }

    return {
      current,
      user,
      register,
      login,
      logout,
      getCurrentUser,
      getCurrentSession,
    }
  },
  { persist: true }
)
