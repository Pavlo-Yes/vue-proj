const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Main') },
      { path: 'gallery', component: () => import('pages/Gallery') },
      { path: 'how_to_buy', component: () => import('pages/HowToBuy') },
      { path: 'about', component: () => import('pages/About') },
      { path: 'blog', component: () => import('pages/Blog') },
      { path: 'inspiration', component: () => import('pages/Inspiration') }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/Secondary'),
    children: [
      { path: '', component: () => import('pages/Login') },
      { path: '/register', component: () => import('pages/Register') },
      { path: '/cart', component: () => import('pages/Cart') },
      { path: '/add_product', component: () => import('pages/AddProduct') }
    ]
  },
  {
    path: '/search',
    component: () => import('layouts/Search')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
