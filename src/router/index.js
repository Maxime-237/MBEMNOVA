import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/a-propos', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
  { path: '/produits', name: 'products', component: () => import('../views/ProductsView.vue') },
  { path: '/portfolio', name: 'portfolio', component: () => import('../views/PortfolioView.vue') },
  { path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})