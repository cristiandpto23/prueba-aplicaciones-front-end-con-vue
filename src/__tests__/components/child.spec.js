import { mount } from '@vue/test-utils';
import Child from '@/components/Child.vue';

describe('Child.vue', () => {
    test('emite el evento con el texto al hacer click en el botón', async () => {
        const wrapper = mount(Child);
        const input = wrapper.find('input');
        const button = wrapper.find('button');

        await input.setValue('Hola desde Child');
        await button.trigger('click');

        expect(wrapper.emitted()['enviar-mensaje']).toBeTruthy();
        expect(wrapper.emitted()['enviar-mensaje'][0]).toEqual(['Hola desde Child']);
    });
});
