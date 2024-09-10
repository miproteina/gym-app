import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ExerciseSearchFilter from './ExerciseSearchFilter.vue'
import Input from '../../atoms/InputField/InputField.vue'
import SelectField from '../../atoms/Select/Select.vue'

describe('ExerciseSearchFilter.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ExerciseSearchFilter, {
      props: {
        exercises: [
          { exerciseName: 'Push-Up', bodyPart: 'Chest', category: 'Strength' },
          { exerciseName: 'Squat', bodyPart: 'Legs', category: 'Strength' },
        ],
      },
    })
  })

  // Test rendering with default and custom props
  it('renders correctly with default props', () => {
    const localWrapper = mount(ExerciseSearchFilter, {
      props: {
        exercises: [],
      },
    })

    expect(localWrapper.find('.exercise-search-filter__recent-searches').exists()).toBe(false)
    expect(localWrapper.find('.exercise-search-filter__list').exists()).toBe(true)
  })

  it('renders correctly with custom props', () => {
    expect(wrapper.findAll('.exercise-search-filter__list li').length).toBe(2)
  })

  // Test search input functionality
  it('updates search query on input', async () => {
    const input = wrapper.findComponent(Input)
    await input.setValue('Push-Up')

    expect(wrapper.vm.searchQuery).toBe('Push-Up')
    expect(wrapper.findAll('.exercise-search-filter__list li').length).toBe(1)
  })

  // Test select dropdown functionality
  it('filters exercises by body part', async () => {
    const selectField = wrapper.findAllComponents(SelectField).at(0)
    await selectField.vm.$emit('change', 'Legs')

    expect(wrapper.vm.selectedBodyPart).toBe('Legs')
    expect(wrapper.findAll('.exercise-search-filter__list li').length).toBe(1)
  })

  it('filters exercises by category', async () => {
    const exercises = [
      { exerciseName: 'Push-Up', bodyPart: 'Chest', category: 'Strength' },
      { exerciseName: 'Squat', bodyPart: 'Legs', category: 'Cardio' },
    ]

    const wrapper = mount(ExerciseSearchFilter, {
      props: {
        exercises,
      },
    })

    // Simulate selecting a category
    const selectField = wrapper.findAllComponents(SelectField).at(1)
    await selectField.vm.$emit('change', 'Cardio')

    // Wait for the component to process the change
    await wrapper.vm.$nextTick()

    // Check the filtered results
    expect(wrapper.findAll('.exercise-search-filter__list li').length).toBe(1)
    expect(wrapper.find('.exercise-search-filter__list li').text()).toBe('Squat')
  })

  // Test recent searches
  it('displays recent searches and updates correctly', async () => {
    const input = wrapper.findComponent(Input)
    await input.setValue('Push-Up')

    expect(wrapper.vm.searchQuery).toBe('Push-Up')
    expect(wrapper.findAll('.exercise-search-filter__list li').length).toBe(1)
    expect(wrapper.find('.exercise-search-filter__list li').text()).toBe('Push-Up')
  })

  // Test filtering functionality
  it('filters exercises based on search query and selections', async () => {
    await wrapper.findComponent(Input).setValue('Push-Up')
    await wrapper.findAllComponents(SelectField).at(0).vm.$emit('change', 'Chest')
    await wrapper.findAllComponents(SelectField).at(1).vm.$emit('change', 'Strength')

    expect(wrapper.findAll('.exercise-search-filter__list li').length).toBe(1)
    expect(wrapper.find('.exercise-search-filter__list li').text()).toBe('Push-Up')
  })

  // Test accessibility
  it('should have a placeholder for search input', () => {
    expect(wrapper.find('ion-input').attributes('placeholder')).toBe('Search exercises by name')
  })

  it('should have appropriate aria labels', () => {
    // Find the SelectField components
    const selectFields = wrapper.findAllComponents(SelectField)

    // Check aria-label for body part filter
    const bodyPartSelect = selectFields.at(0)
    expect(bodyPartSelect.attributes('aria-label')).toBe('Filter by body part')

    // Check aria-label for category filter
    const categorySelect = selectFields.at(1)
    expect(categorySelect.attributes('aria-label')).toBe('Filter by category')
  })
})
