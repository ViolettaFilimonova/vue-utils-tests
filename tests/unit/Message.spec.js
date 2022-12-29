import { mount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe("Message.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(Message, {
            props: {
                msg: 'Hi my friend'
            }
        })
        expect(wrapper.text()).toContain('Hi my friend')
    })
})