import Vue from 'vue'
import Router from 'vue-router'
const fb = require('../firebaseConfig.js')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'homepage',
      component: () => import(/* webpackChunkName: "homepage" */ '../views/Homepage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/mission',
      name: 'mission',
      component: () => import(/* webpackChunkName: "mission" */ '../views/About/Mission.vue'),
    },
    {
      path: '/environmental-impact',
      name: 'environmental-impact',
      component: () => import(/* webpackChunkName: "environmental-impact" */ '../views/About/EnvironmentalImpact.vue'),
    },
    {
      path: '/second-chance-program',
      name: 'second-chance',
      component: () => import(/* webpackChunkName: "second-chance" */ '../views/About/SecondChance.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "team" */ '../views/About/Team.vue'),
    },
    {
      path: '/distribution',
      name: 'distribution',
      component: () => import(/* webpackChunkName: "distribution" */ '../views/Partners/Distribution.vue'),
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import(/* webpackChunkName: "customers" */ '../views/Partners/Customers.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "products" */ '../views/Vericoolers/Products.vue'),
    },
    {
      path: '/custom',
      name: 'custom',
      component: () => import(/* webpackChunkName: "custom" */ '../views/Vericoolers/CustomOrders.vue'),
    },
    {
      path: '/disposal',
      name: 'disposal',
      component: () => import(/* webpackChunkName: "disposal" */ '../views/Vericoolers/Disposal.vue'),
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import(/* webpackChunkName: "materials" */ '../views/Vericoolers/OurMaterials.vue'),
    },
    {
      path: '/stock',
      name: 'stock',
      component: () => import(/* webpackChunkName: "stock" */ '../views/Vericoolers/StockOrders.vue'),
    },
    {
      path: '/competitors',
      name: 'competitors',
      component: () => import(/* webpackChunkName: "competitors" */ '../views/Performance/Competitors.vue'),
    },
    {
      path: '/data',
      name: 'data',
      component: () => import(/* webpackChunkName: "data" */ '../views/Performance/Data.vue'),
    },
    {
      path: '/ohana',
      name: 'ohana',
      component: () => import(/* webpackChunkName: "ohana" */ '../views/Ohana/Ohana.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ '../views/News/News.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ '../views/Inquiries/ContactUs.vue'),
    },
    {
      path: '/in-the-news',
      name: 'pr',
      component: () => import(/* webpackChunkName: "pr" */ '../views/Inquiries/PR.vue'),
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import(/* webpackChunkName: "careers" */ '../views/Inquiries/Careers.vue'),
    },
    {
      path: '/buy',
      name: 'buy',
      component: () => import(/* webpackChunkName: "buy" */ '../views/Inquiries/Buy.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/careers',
      name: 'listcareers',
      component: () => import(/* webpackChunkName: "listcareers" */ '../views/Dashboard/Careers/ListCareers.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/addcareer',
      name: 'addcareer',
      component: () => import(/* webpackChunkName: "addcareer" */ '../views/Dashboard/Careers/AddCareer.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/career/:id',
      name: 'editcareer',
      component: () => import(/* webpackChunkName: "editcareer" */ '../views/Dashboard/Careers/EditCareer.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/addpress',
      name: 'addpress',
      component: () => import(/* webpackChunkName: "addpress" */ '../views/Dashboard/Press/AddPress.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/press',
      name: 'listpress',
      component: () => import(/* webpackChunkName: "listpress" */ '../views/Dashboard/Press/ListPress.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/press/:id',
      name: 'editpress',
      component: () => import(/* webpackChunkName: "editpress" */ '../views/Dashboard/Press/EditPress.vue'),
      meta: {
        requiresAuth: true
      }
    },



    {
      path: '/dashboard/addchance',
      name: 'addchance',
      component: () => import(/* webpackChunkName: "addchance" */ '../views/Dashboard/SecondChances/AddChance.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/chances',
      name: 'chances',
      component: () => import(/* webpackChunkName: "listchance" */ '../views/Dashboard/SecondChances/ListChances.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/chance/:id',
      name: 'editchance',
      component: () => import(/* webpackChunkName: "editchance" */ '../views/Dashboard/SecondChances/EditChance.vue'),
      meta: {
        requiresAuth: true
      }
    },



  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router