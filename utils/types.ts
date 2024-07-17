import type { Models } from 'appwrite'

export interface ExerciseInterface extends Models.Document {
  name: string
  description?: string
  thumbnail?: string
}
