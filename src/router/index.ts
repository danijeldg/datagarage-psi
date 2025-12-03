import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DnaLabPage from '../views/DnaLabPage.vue'
import GearPage from '../views/GearPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/dna-lab',
      name: 'dna',
      component: DnaLabPage
    },
    {
      path: '/gear',
      name: 'gear',
      component: GearPage
    }
  ]
})

export default router

