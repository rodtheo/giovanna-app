import { createRouter, createWebHistory } from 'vue-router'
import GroceryListView from '../views/GroceryListView.vue'
import MainListView from '../views/MainListView.vue'

const routes = [
  {
    path: '/lists/:name',
    name: 'GroceryListView',
    component: GroceryListView,
    props: true
  },
  {
    path: '/',
    name: 'MainListView',
    component: MainListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
