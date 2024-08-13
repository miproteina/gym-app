import { Client, Account, Databases } from 'appwrite'

export const client: Client = new Client()

const url: string = import.meta.env.VITE_APPWRITE_ENDPOINT
const projectId: string = import.meta.env.VITE_APPWRITE_PROJECT_ID

//databases
export const databaseId: string = import.meta.env.VITE_APPWRITE_DB
export const exercisesDatabaseId: string = import.meta.env.VITE_APPWRITE_DB_EXERCISES
export const categoriesDatabaseId: string = import.meta.env.VITE_APPWRITE_DB_CATEGORIES
export const routinesDatabaseId: string = import.meta.env.VITE_APPWRITE_DB_ROUTINES
export const routinesExercisesDatabaseId: string = import.meta.env
  .VITE_APPWRITE_DB_ROUTINES_EXERCISES

if (!url || !projectId) {
  throw new Error(
    'Please fill the VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID env variables'
  )
}

client.setEndpoint(url).setProject(projectId) // Replace with your project ID

export const account = new Account(client)
export const database: Databases = new Databases(client)
export { ID } from 'appwrite'
