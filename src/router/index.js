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
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
      path: '/getstarted',
      name: 'getstarted',
      component: () => import(/* webpackChunkName: "getstarted" */ '../views/GetStarted.vue'),
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
      path: '/products', redirect: '/products/all',
      name: 'products',
      component: () => import(/* webpackChunkName: "products" */ '../views/Products/Products.vue'),
      children: [
        {
          path: '/products/all',
          name: 'all-products',
          component: () => import(/* webpackChunkName: "all-products" */ '../views/Products/AllProducts.vue'),
        },
        // {
        //   path: '/products/custom',
        //   name: 'custom',
        //   component: () => import(/* webpackChunkName: "custom" */ '../views/Products/CustomOrders.vue'),
        // },
        // {
        //   path: '/products/disposal',
        //   name: 'disposal',
        //   component: () => import(/* webpackChunkName: "disposal" */ '../views/Products/Disposal.vue'),
        // },
        // {
        //   path: '/products/materials',
        //   name: 'materials',
        //   component: () => import(/* webpackChunkName: "materials" */ '../views/Products/OurMaterials.vue'),
        // },
        // {
        //   path: '/products/stock',
        //   name: 'stock',
        //   component: () => import(/* webpackChunkName: "stock" */ '../views/Products/StockOrders.vue'),
        // },
        {
          path: '/products/vericooler',
          name: 'vericooler',
          component: () => import(/* webpackChunkName: "vericooler" */ '../views/Products/Ohana.vue'),
        },
        {
          path: '/products/vcplus',
          name: 'vcplus',
          component: () => import(/* webpackChunkName: "vcplus" */ '../views/Products/VCPlus.vue'),
        },
        {
          path: '/products/vcfiber',
          name: 'vcfiber',
          component: () => import(/* webpackChunkName: "vcfiber" */ '../views/Products/VCFiber.vue'),
        },
        {
          path: '/products/vcthree',
          name: 'vcthree',
          component: () => import(/* webpackChunkName: "vcthree" */ '../views/Products/VCThree.vue'),
        },
        {
          path: '/products/vcfusion',
          name: 'vcfusion',
          component: () => import(/* webpackChunkName: "vcfusion" */ '../views/Products/VCFusion.vue'),
        },
        {
          path: '/products/vc241',
          name: 'vc241',
          component: () => import(/* webpackChunkName: "vc241" */ '../views/Products/VC241.vue'),
        },
        {
          path: '/products/gogreenmailer',
          name: 'gogreenmailer',
          component: () => import(/* webpackChunkName: "gogreenmailer" */ '../views/Products/GoGreenMailer.vue'),
        },
        {
          path: '/products/recyclablemailer',
          name: 'recyclablemailer',
          component: () => import(/* webpackChunkName: "recyclablemailer" */ '../views/Products/InsulatedRecyclableMailer.vue'),
        },
        {
          path: '/products/fibermailer',
          name: 'fibermailer',
          component: () => import(/* webpackChunkName: "fibermailer" */ '../views/Products/InsulatedFiberMailer.vue'),
        },
      ]

    },
    // {
    //   path: '/competitors',
    //   name: 'competitors',
    //   component: () => import(/* webpackChunkName: "competitors" */ '../views/Performance/Competitors.vue'),
    // },
    {
      path: '/terms',
      name: 'terms',
      component: () => import(/* webpackChunkName: "terms" */ '../views/Legal/Terms.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ '../views/Legal/Privacy.vue'),
    },
    {
      path: '/data',
      name: 'data',
      component: () => import(/* webpackChunkName: "data" */ '../views/Performance/Data.vue'),
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import(/* webpackChunkName: "testing" */ '../views/Performance/Testing.vue'),
    },
    {
      path: '/light-test',
      name: 'light-test',
      component: () => import(/* webpackChunkName: "light-test" */ '../views/Performance/LightTest.vue'),
    },
    {
      path: '/industries',
      name: 'industries',
      component: () => import(/* webpackChunkName: "industries" */ '../views/Industries.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ '../views/News/News.vue'),
    },
    {
      path: '/news/:id',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ '../views/News/Article.vue'),
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import(/* webpackChunkName: "contact" */ '../views/Inquiries/ContactUs.vue'),
    // },
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
      path: '/careers/:id',
      name: 'apply',
      component: () => import(/* webpackChunkName: "apply" */ '../views/Inquiries/Apply.vue'),
    },
    // {
    //   path: '/buy',
    //   name: 'buy',
    //   component: () => import(/* webpackChunkName: "buy" */ '../views/Inquiries/Buy.vue'),
    // },
    {
      path: '/awards',
      name: 'awards',
      component: () => import(/* webpackChunkName: "awards" */ '../views/Awards.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue'),
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


    {
      path: '/dashboard/newpost',
      name: 'newpost',
      component: () => import(/* webpackChunkName: "newpost" */ '../views/Dashboard/Posts/AddPost.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/posts',
      name: 'postlist',
      component: () => import(/* webpackChunkName: "postlist" */ '../views/Dashboard/Posts/ListPosts.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/posts/:id',
      name: 'editpost',
      component: () => import(/* webpackChunkName: "editpost" */ '../views/Dashboard/Posts/EditPost.vue'),
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/dashboard/addlogo',
      name: 'addlogo',
      component: () => import(/* webpackChunkName: "addlogo" */ '../views/Dashboard/Logos/AddLogo.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/logos',
      name: 'logolist',
      component: () => import(/* webpackChunkName: "logolist" */ '../views/Dashboard/Logos/ListLogos.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/leads',
      name: 'leads',
      component: () => import(/* webpackChunkName: "leads" */ '../views/Dashboard/Leads/Leads.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/leads/:id',
      name: 'lead',
      component: () => import(/* webpackChunkName: "lead" */ '../views/Dashboard/Leads/Lead.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/awards',
      name: 'listawards',
      component: () => import(/* webpackChunkName: "listawards" */ '../views/Dashboard/Awards/ListAwards.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/addaward',
      name: 'addaward',
      component: () => import(/* webpackChunkName: "addaward" */ '../views/Dashboard/Awards/AddAward.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/impact-pics',
      name: 'impactlist',
      component: () => import(/* webpackChunkName: "impactlist" */ '../views/Dashboard/Impact/ImpactPics.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/addimpactpic',
      name: 'addimpactpic',
      component: () => import(/* webpackChunkName: "addimpactpic" */ '../views/Dashboard/Impact/AddPic.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/applications',
      name: 'applications',
      component: () => import(/* webpackChunkName: "applications" */ '../views/Dashboard/Applications/Applications.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/applications/:id',
      name: 'application',
      component: () => import(/* webpackChunkName: "applications" */ '../views/Dashboard/Applications/Application.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/ohanapics',
      name: 'ohanapics',
      component: () => import(/* webpackChunkName: "ohanapics" */ '../views/Dashboard/Ohana/OhanaPics.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/addohanapic',
      name: 'addohanapic',
      component: () => import(/* webpackChunkName: "addohanapic" */ '../views/Dashboard/Ohana/AddPic.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/faqs',
      name: 'listquestions',
      component: () => import(/* webpackChunkName: "listquestions" */ '../views/Dashboard/FAQ/ListFAQs.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/addfaq',
      name: 'addquestion',
      component: () => import(/* webpackChunkName: "addfaq" */ '../views/Dashboard/FAQ/AddFAQ.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/faqs/:id',
      name: 'editquestion',
      component: () => import(/* webpackChunkName: "editquestion" */ '../views/Dashboard/FAQ/EditFAQ.vue'),
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