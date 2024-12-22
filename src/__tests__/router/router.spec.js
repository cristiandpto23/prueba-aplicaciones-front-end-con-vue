// importamos las herramientas necesarias para el test
// vue router
import { createRouter, createWebHistory } from 'vue-router';
// vista principal
import HomeView from '@/views/HomeView.vue';

describe('Router', () => {
    // variable para almacenar instancia del router
    let router;

    beforeEach(() => {
        // creamos una nueva instancia del router antes de cada test
        router = createRouter({
            history: createWebHistory(),
            routes: [
                {   // ruta principal
                    path: '/',
                    name: 'home',
                    component: HomeView,
                },
                {   // ruta about
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/AboutView.vue'),
                },
                {   // ruta counter
                    path: '/counter',
                    name: 'counter',
                    component: () => import('@/views/CounterView.vue'),
                },
            ],
        });
    });

    // test para verificar existencia de la ruta home
    test('ruta / existe', () => {
        // verifica si existe la ruta
        const route = router.hasRoute('home');
        // espera que la ruta exista
        expect(route).toBeTruthy();
    });

    test('ruta /about existe', () => {
        const route = router.hasRoute('about');
        expect(route).toBeTruthy();
    });

    test('ruta /counter existe', () => {
        const route = router.hasRoute('counter');
        expect(route).toBeTruthy();
    });
});
