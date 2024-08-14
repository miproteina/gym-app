import type { Models } from 'appwrite'

export interface ExerciseInterface extends Models.Document {
  name: string
  description?: string
  thumbnail?: string
  categories?: CategoryInterface[]
}

export interface CategoryInterface extends Models.Document {
  name: string
}

export interface RoutineInterface extends Models.Document {
  name: string
  user_id: string
  routinesExercises?: RoutineExerciseInterface[]
}

export interface RoutineExerciseInterface extends Models.Document {
  set: string
  repetitions: number
  weight: number
  rest_sec: number
  exercise?: ExerciseInterface
  routine?: RoutineInterface
}
