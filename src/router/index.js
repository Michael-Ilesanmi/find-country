import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryView from '../views/Country.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: "Find Countries"
      }
    },
    {
      path: '/:id',
      name: 'Country',
      component: CountryView
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: HomeView,
      meta: {
        title: "Find Countries"
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { left: 0, top: 0 };
  },
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
