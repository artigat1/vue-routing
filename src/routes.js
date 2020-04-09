import Home from './components/Home.vue'
import Header from './components/Header.vue'

export const coreRoutes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header,
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
]
