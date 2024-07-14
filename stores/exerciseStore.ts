import { defineStore } from 'pinia'
import { Query } from 'appwrite'
import { ref } from 'vue'
import { database, databaseId, exercisesDatabaseId } from '@/utils/appwrite'
import type { ExerciseInterface } from '@/utils/types'

export const useExerciseStore = defineStore(
  'exercise',
  () => {
    const exercises = ref<ExerciseInterface[] | null>(null)

    const fetch = async (queryLimit: number = 10): Promise<void> => {
      const response = await database.listDocuments(databaseId, exercisesDatabaseId, [
        Query.orderDesc('$createdAt'),
        Query.limit(queryLimit),
      ])

      exercises.value = response.documents as ExerciseInterface[]
    }

    return {
      exercises,
      fetch,
    }
  },
  { persist: true }
)
