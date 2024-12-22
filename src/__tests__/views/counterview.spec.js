// importamos las herramientas necesarias para el test
// para montar componentes
import { mount } from '@vue/test-utils';
// para crear store de pruebas
import { createStore } from 'vuex';
// componente a testear
import CounterView from '@/views/CounterView.vue';

describe('CounterView.vue', () => {
    // variable para almacenar instancia del store
    let store;

    beforeEach(() => {
        // creamos una nueva instancia del store antes de cada test
        store = createStore({
            // esado inicial del contador
            state: { counter: 0 },
            getters: {
                // getter para obtener el valor del contador
                getCounter: (state) => state.counter,
            },
            mutations: {
                // mutación para incrementar el valor del contador
                INCREMENT(state) {
                    state.counter++;
                },
                // mutación para decrementar el valor del contador
                DECREMENT(state) {
                    state.counter--;
                },
            },
            actions: {
                // acción para incrementar el valor del contador
                increment({ commit }) {
                    commit('INCREMENT');
                },
                // acción para decrementar el valor del contador
                decrement({ commit }) {
                    commit('DECREMENT');
                },
            },
        });
    });

    // test para verificar el valor inicial del contador
    test('verifica valor inicial del contador en 0', () => {
        // se monta el componente
        const wrapper = mount(CounterView, {
            // se inyecta el componente
            global: { plugins: [store] },
        });
        // se obtiene el texto del contador
        const counterText = wrapper.find('p').text();
        // se verifica que el valor inicial
        expect(counterText).toBe('Contador actual: 0');
    });

    // test para verificar la funcionalidad de incremento
    test('prueba funcionalidad de incremento', async () => {
        const wrapper = mount(CounterView, {
            global: { plugins: [store] },
        });
        // se obtiene el botón de incremento
        const incrementButton = wrapper.findAll('button')[0];
        // se simula el clic
        await incrementButton.trigger('click');
        // se verifica que el valor del contador sea 1
        expect(wrapper.find('p').text()).toBe('Contador actual: 1');
    });

    // test para verificar la funcionalidad de decremento 
    test('prueba funcionalidad de decremento', async () => {
        const wrapper = mount(CounterView, {
            global: { plugins: [store] },
        });
        // se obtiene el botón de decremento
        const decrementButton = wrapper.findAll('button')[1];
        // se simula el clic
        await decrementButton.trigger('click');
        // se verifica que el valor del contador sea -1
        expect(wrapper.find('p').text()).toBe('Contador actual: -1');
    });
});
