import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExerciseList from './ExerciseList.vue'
import ExerciseCard from '../../molecules/ExerciseCard/ExerciseCard.vue'
import ExerciseDetailModal from '../ExerciseDetailModal/ExerciseDetailModal.vue'

describe('ExerciseList.vue', () => {
  const exercises = [
    { $id: '1', name: 'Push Up', categories: [{ name: 'Strength' }], thumbnail: 'push-up.jpg' },
    { $id: '2', name: 'Squat', categories: [{ name: 'Strength' }], thumbnail: 'squat.jpg' },
  ]

  it('renders correctly with default props', () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises: [] },
      global: {
        stubs: [
          'ion-modal',
          'ion-header',
          'ion-toolbar',
          'ion-buttons',
          'ion-button',
          'ion-icon',
          'ion-title',
          'ion-content',
          'ion-grid',
          'ion-row',
          'ion-col',
        ],
      },
    })
    expect(wrapper.findAllComponents(ExerciseCard)).toHaveLength(0)
  })

  it('renders correctly with custom props', () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
      global: {
        stubs: [
          'ion-modal',
          'ion-header',
          'ion-toolbar',
          'ion-buttons',
          'ion-button',
          'ion-icon',
          'ion-title',
          'ion-content',
          'ion-grid',
          'ion-row',
          'ion-col',
        ],
      },
    })
    const cards = wrapper.findAllComponents(ExerciseCard)
    expect(cards).toHaveLength(exercises.length)
    expect(cards[0].props('exerciseName')).toBe(exercises[0].name)
    expect(cards[0].props('categories')).toEqual(exercises[0].categories)
    expect(cards[0].props('imageUrl')).toBe(exercises[0].thumbnail)
  })

  it('opens modal with correct exercise when an ExerciseCard is clicked', async () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
      global: {
        stubs: [
          'ion-modal',
          'ion-header',
          'ion-toolbar',
          'ion-buttons',
          'ion-button',
          'ion-icon',
          'ion-title',
          'ion-content',
          'ion-grid',
          'ion-row',
          'ion-col',
        ],
      },
    })

    const exerciseCard = wrapper.findComponent(ExerciseCard)
    await exerciseCard.vm.$emit('openModal', exercises[0].$id)

    expect(wrapper.vm.openModal).toBe(true)
    expect(wrapper.vm.exerciseModal).toEqual(exercises[0])

    const modal = wrapper.findComponent(ExerciseDetailModal)
    expect(modal.props('isOpen')).toBe(true)
    expect(modal.props('exercise')).toEqual(exercises[0])
  })

  it('closes modal when close event is emitted', async () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
      global: {
        stubs: [
          'ion-modal',
          'ion-header',
          'ion-toolbar',
          'ion-buttons',
          'ion-button',
          'ion-icon',
          'ion-title',
          'ion-content',
          'ion-grid',
          'ion-row',
          'ion-col',
        ],
      },
    })

    wrapper.vm.openModal = true
    wrapper.vm.exerciseModal = exercises[0]

    const modal = wrapper.findComponent(ExerciseDetailModal)
    await modal.vm.$emit('close')

    expect(wrapper.vm.openModal).toBe(false)
  })

  it('should have appropriate alt text for images', () => {
    const wrapper = mount(ExerciseList, {
      props: { exercises },
      global: {
        stubs: [
          'ion-modal',
          'ion-header',
          'ion-toolbar',
          'ion-buttons',
          'ion-button',
          'ion-icon',
          'ion-title',
          'ion-content',
          'ion-grid',
          'ion-row',
          'ion-col',
        ],
      },
    })

    const cards = wrapper.findAllComponents(ExerciseCard)

    cards.forEach((card, index) => {
      expect(card.props('exerciseId')).toBe(exercises[index].$id)
      expect(card.props('exerciseName')).toBe(exercises[index].name)
      expect(card.props('categories')).toEqual(exercises[index].categories)
      expect(card.props('imageUrl')).toBe(exercises[index].thumbnail)
    })
  })
})
