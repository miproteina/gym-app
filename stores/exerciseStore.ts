import { defineStore } from 'pinia'
import { Query } from 'appwrite'
import { ref } from 'vue'
import { database, databaseId, exercisesDatabaseId } from '@/utils/appwrite'
import type { ExerciseInterface } from '@/utils/types'

export const useExerciseStore = defineStore(
  'exercise',
  () => {
    const exercises = ref<ExerciseInterface[] | null>(null)

    const fetchExercises = async (queryLimit: number = 10): Promise<void> => {
      console.debug('Fetching exercises...')
      const response = await database.listDocuments(databaseId, exercisesDatabaseId, [
        Query.orderDesc('$createdAt'),
        Query.limit(queryLimit),
      ])

      console.debug('Exercises fetched successfully', response)

      exercises.value = response.documents as ExerciseInterface[]
    }

    return {
      exercises,
      fetchExercises,
    }
  },
  { persist: true }
)
