const User = resolve => {
    require.ensure(['./User.vue'], () => {
        resolve(require('./User.vue'))
    }, 'user')
}

const UserStart = resolve => {
    require.ensure(['./UserStart.vue'], () => {
        resolve(require('./UserStart.vue'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./UserEdit.vue'], () => {
        resolve(require('./UserEdit.vue'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./UserDetail.vue'], () => {
        resolve(require('./UserDetail.vue'))
    }, 'user')
}

export const userRoutes = [
    {
        path: '/user', 
        component: User,
        children: [
            { path: '', component: UserStart },
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log('inside route setup')
                    next()
                }
            },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' },
        ]
    },
]