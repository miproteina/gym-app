import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExerciseList from './ExerciseList.vue'
import ExerciseCard from '../../molecules/ExerciseCard/ExerciseCard.vue'

describe('ExerciseList.vue', () => {
  const exercises = [
    { exerciseName: 'Push Up', categoryName: 'Strength', imageUrl: 'push-up.jpg' },
    { exerciseName: 'Squat', categoryName: 'Strength', imageUrl: 'squat.jpg' },
  ]

  it('renders correctly with default props', () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises: [] },
    })
    expect(wrapper.findAllComponents(ExerciseCard)).toHaveLength(0)
  })

  it('renders correctly with custom props', () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
    })
    const cards = wrapper.findAllComponents(ExerciseCard)
    expect(cards).toHaveLength(exercises.length)
    expect(cards[0].props('exerciseName')).toBe(exercises[0].exerciseName)
    expect(cards[0].props('categoryName')).toBe(exercises[0].categoryName)
    expect(cards[0].props('imageUrl')).toBe(exercises[0].imageUrl)
  })

  it('emits the correct payload when an ExerciseCard is clicked', async () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
    })

    // Find the first ExerciseCard and trigger a click event on the button
    const exerciseCard = wrapper.findComponent(ExerciseCard)
    await exerciseCard.find('button').trigger('click')

    // Check if the 'openExerciseModal' event is emitted with the correct payload
    const emittedEvents = wrapper.emitted('openExerciseModal')
    if (emittedEvents) {
      expect(emittedEvents[0][0]).toEqual(exercises[0])
    } else {
      throw new Error('Expected event "openExerciseModal" to be emitted')
    }
  })

  it('should have appropriate alt text for images', () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
    })

    const images = wrapper.findAll('img.exercise-card__image')

    images.forEach((img, index) => {
      expect(img.attributes('alt')).toBe('Exercise Image')
      expect(img.attributes('src')).toBe(exercises[index].imageUrl || 'default-placeholder.jpg')
    })
  })

  it('should have accessible headings', () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
    })

    const headings = wrapper.findAll('h3.exercise-card__info-name')

    headings.forEach((heading, index) => {
      expect(heading.text()).toBe(exercises[index].exerciseName)
      expect(heading.attributes('role')).toBe(undefined) // h3 has an implicit role as a heading
    })
  })
})
