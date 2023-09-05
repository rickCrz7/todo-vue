import { test, expect } from 'vitest'
import App from '../src/App.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

test('should load app', async () => {
    expect(App).toBeTruthy()
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('TODOS')
    const input = wrapper.find('input')
    expect(wrapper.element).toBeTruthy()
    expect(input.element.value).toBe('')
    const button = wrapper.find('button')
    expect(button.element).toBeTruthy()
    expect(button.element.textContent).toBe('Add')
    const list = wrapper.find('ul')
    expect(list.element).toBeTruthy()
    expect(list.element.children.length).toBe(0)

    input.setValue('Walk the Dog')
    button.trigger('click')
    await nextTick()
    expect(list.element.children.length).toBe(1)
    expect(list.element.children[0].textContent).toBe('Walk the Dog')
})
