import { createRouter, createWebHistory } from 'vue-router'

// import Home from '@/components/HelloWorld.vue'
// import About from '@/components/HelloWorld.vue'
// import Contact from '@/components/HelloWorld.vue'
import Error from '@/components/Error Page/Error404.vue'

const routes = [
    {
        path: '/',
        component: Error
    },
    {
        path: '/about',
        component: Error
    },
    {
        path: '/contact',
        component: Error
    },
    {
        path: '/:catchAll(.*)',
        component: Error
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router