import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/components/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/modules/home/views/HomePage.vue')
      },
      {
        path: '/what-we-do',
        name: 'what-we-do',
        children: [
          {
            path: 'contact-us',
            name: 'contact-us',
            component: () => import('@/modules/what_we_do/contact_us/views/ContactUs.vue')
          }
        ]
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
