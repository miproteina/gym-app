import { Client, Account, Databases } from 'appwrite'

export const client: Client = new Client()

const url: string = import.meta.env.VITE_APPWRITE_ENDPOINT
const projectId: string = import.meta.env.VITE_APPWRITE_PROJECT_ID

//databases
export const databaseId: string = import.meta.env.VITE_APPWRITE_DB
export const exercisesDatabaseId: string = import.meta.env.VITE_APPWRITE_DB_EXERCISES

if (!url || !projectId) {
  throw new Error(
    'Please fill the NUXT_APPWRITE_ENDPOINT and NUXT_APPWRITE_PROJECT_ID env variables'
  )
}

client.setEndpoint(url).setProject(projectId) // Replace with your project ID

export const account = new Account(client)
export const database: Databases = new Databases(client)
export { ID } from 'appwrite'
