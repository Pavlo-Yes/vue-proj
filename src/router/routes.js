const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: '', name: 'main', component: () => import('pages/Main')},
      {path: 'user/:id', name: 'userPage', component: () => import('pages/CustomerPage')},
      {path: 'gallery', name: 'gallery', component: () => import('pages/Main')},
      {path: 'how_to_buy', component: () => import('pages/HowToBuy')},
      {path: 'about', component: () => import('pages/About')},
      {path: 'blog', component: () => import('pages/Blog')},
      {path: 'inspiration', component: () => import('pages/Inspiration')},
      {path: 'cart', name: 'cart', component: () => import('pages/Cart')},
      {path: 'product/:id', component: () => import('pages/SingleProduct')},
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/SecondaryLayout'),
    children: [
      {path: '', name: 'login', component: () => import('pages/Login')},
      {path: '/register', component: () => import('pages/Register')},
      {path: '/add_product', name: 'add_product', component: () => import('pages/AddProduct')},
      {path: '/edit_product/:id', component: () => import('pages/SingleProductEdit')},
    ]
  },
  {
    path: '/search',
    component: () => import('layouts/SearchLayout'),
    children: [{path: '', name: 'search', component: () => import('pages/Main')}]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
