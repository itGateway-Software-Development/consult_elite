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
          },
          {
            path: 'work-with-us',
            name: 'work-with-us',
            component: () => import('@/modules/what_we_do/work_with_us/views/WorkWithUs.vue')
          },
          {
            path: 'about-us',
            name: 'about-us',
            component: () => import('@/modules/what_we_do/about_us/views/AboutUs.vue')
          }
        ]
      },
      {
        path: '/blogs',
        name: 'blogs',
        component: () => import('@/modules/blog/views/Blog.vue')
      },
      {
        path: '/blogs/:id',
        name: 'blog-detail',
        component: () => import('@/modules/blog/views/BlogDetail.vue'),
      }
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
