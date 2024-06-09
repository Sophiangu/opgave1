// src/components/__test__/helloworld.test.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue' // Adjust the path as necessary

describe('HelloWorld', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello, World!'
    const wrapper = mount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.find('h1.green').text()).toBe(msg)
  })

  it('renders links correctly', () => {
    const msg = 'Hello, Vite + Vue!'
    const wrapper = mount(HelloWorld, {
      props: { msg }
    })
    const links = wrapper.findAll('a')
    expect(links.length).toBe(2)
    expect(links.at(0).attributes('href')).toBe('https://vitejs.dev/')
    expect(links.at(1).attributes('href')).toBe('https://vuejs.org/')
  })
})
