import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import LoadPosts from '../components/LoadPosts.vue'
import LogIn from '../components/LogIn.vue'
import MyPosts from '../components/LoadMyPosts.vue'
import SignIn from '../components/LoadSignIn.vue'

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
{
  path: '/MyPosts',
  name: 'MyPosts',
  component: MyPosts
},
{
  path: '/SignIn',
  name: 'SignIn',
  component: SignIn
},
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
