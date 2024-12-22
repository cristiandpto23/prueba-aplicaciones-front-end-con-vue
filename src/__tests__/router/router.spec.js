import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

describe('Router', () => {
    let router;

    beforeEach(() => {
        router = createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: '/',
                    name: 'home',
                    component: HomeView,
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/AboutView.vue'),
                },
                {
                    path: '/counter',
                    name: 'counter',
                    component: () => import('@/views/CounterView.vue'),
                },
            ],
        });
    });

    test('ruta / existe', () => {
        const route = router.hasRoute('home');
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
