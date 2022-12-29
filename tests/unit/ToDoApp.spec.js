import { mount } from '@vue/test-utils'
import ToDoApp from '@/components/ToDoApp.vue'

describe('ToDoApp.vue', () => {
    it("render toDo list", () => {
        const wrapper = mount(ToDoApp)
        const todo =  wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe("Learn Vue Unit tests")
    })
})