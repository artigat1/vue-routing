import Vue from 'vue'
import VueRouter from 'vue-router'

import { coreRoutes } from './routes'
import { userRoutes } from './components/user/routes'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
    ...coreRoutes,
    ...userRoutes,
]

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return { selector: to.hash }
        }

        return { x: 0, y: 0 }
    },
})

router.beforeEach((to, from, next) => {
    console.log('global beforeEach', to, from)
    next()
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
