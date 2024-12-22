import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import CounterView from '@/views/CounterView.vue';

describe('CounterView.vue', () => {
    let store;

    beforeEach(() => {
        store = createStore({
            state: { counter: 0 },
            getters: {
                getCounter: (state) => state.counter,
            },
            mutations: {
                INCREMENT(state) {
                    state.counter++;
                },
                DECREMENT(state) {
                    state.counter--;
                },
            },
            actions: {
                increment({ commit }) {
                    commit('INCREMENT');
                },
                decrement({ commit }) {
                    commit('DECREMENT');
                },
            },
        });
    });

    test('verifica valor inicial del contador en 0', () => {
        const wrapper = mount(CounterView, {
            global: { plugins: [store] },
        });
        const counterText = wrapper.find('p').text();
        expect(counterText).toBe('Contador actual: 0');
    });

    test('prueba funcionalidad de incremento', async () => {
        const wrapper = mount(CounterView, {
            global: { plugins: [store] },
        });
        const incrementButton = wrapper.findAll('button')[0];
        await incrementButton.trigger('click');
        expect(wrapper.find('p').text()).toBe('Contador actual: 1');
    });

    test('prueba funcionalidad de decremento', async () => {
        const wrapper = mount(CounterView, {
            global: { plugins: [store] },
        });
        const decrementButton = wrapper.findAll('button')[1];
        await decrementButton.trigger('click');
        expect(wrapper.find('p').text()).toBe('Contador actual: -1');
    });
});
