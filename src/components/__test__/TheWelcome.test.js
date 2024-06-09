import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'
import WelcomeItem from '../WelcomeItem.vue'

describe('TheWelcome', () => {
  it('renders all WelcomeItems correctly', () => {
    const wrapper = mount(TheWelcome, {
      global: {
        components: {
          WelcomeItem
        }
      }
    })

    const welcomeItems = wrapper.findAllComponents(WelcomeItem)
    expect(welcomeItems.length).toBe(5) // Update the expected length based on the number of WelcomeItems

    welcomeItems.forEach((item, index) => {
      const heading = item.find('h3').text() // Update the selector to match the heading element
      const link = item.find('a').attributes('href')

      if (!heading) {
        console.error(`Heading ${index} is missing or empty in WelcomeItem ${index + 1}`)
        console.log('Rendered HTML:', item.html()) // Log the rendered HTML for debugging
      }

      expect(heading).toBeTruthy() // Check if heading exists
      expect(link).toBeTruthy() // Check if link exists
    })
  })
})