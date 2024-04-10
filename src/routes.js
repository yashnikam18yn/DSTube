import { createRouter, createWebHistory } from 'vue-router'
import Profile from './components/Profile/Profile.vue'
import HomeMainPage from './components/Home/HomeMainPage.vue'
import ViewHomePage from './components/View/ViewHomePage.vue'



const routes = [
    {
        name: 'Profile',
        component: Profile,
        path: '/profile',
    },
    {
        name:'HomeMainPage',
        component:HomeMainPage,
        path:'/'
    },
    {
        name:'ViewHomePage',
        component:ViewHomePage,
        path:'/video/:id'
    }
       
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router