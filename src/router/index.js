import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import LoadPosts from '../components/LoadPosts.vue'
import LogIn from '../components/LogIn.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
},
{
  path: '/Home',
  name: 'LoadPosts',
  component: LoadPosts
},
{
  path: '/LogIn',
  name: 'LogIn',
  component: LogIn
},
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
