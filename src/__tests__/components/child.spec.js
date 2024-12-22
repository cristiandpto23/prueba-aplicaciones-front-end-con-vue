// importamos las herramientas necesarias para el test
// vue test utils para montar componentes
import { mount } from '@vue/test-utils';
// importamos el componente a testear
import Child from '@/components/Child.vue';

describe('Child.vue', () => {
    // test para verificar la emisión del evento del componente hijo al padre
    test('emite el evento con el texto al hacer click en el botón', async () => {
        // montamos una instancia del componente child
        const wrapper = mount(Child);

        // encontramos los elementos del DOM que necesitamos
        // input de texto
        const input = wrapper.find('input');
        // botón de envío
        const button = wrapper.find('button');

        // simulamos la escritura en el input
        await input.setValue('Hola desde Child');
        // simulamos el clic en el botón
        await button.trigger('click');

        // verificamos que el evento 'enviar-mensaje' fue emitido
        expect(wrapper.emitted()['enviar-mensaje']).toBeTruthy();
        // verificamos que el texto emitido es correcto
        expect(wrapper.emitted()['enviar-mensaje'][0]).toEqual(['Hola desde Child']);
    });
});
