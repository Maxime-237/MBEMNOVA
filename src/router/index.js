import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/a-propos', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
  { path: '/produits', name: 'products', component: () => import('../views/ProductsView.vue') },
  { path: '/portfolio', name: 'portfolio', component: () => import('../views/PortfolioView.vue') },
  { path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/carrieres', name: 'careers', component: () => import('../views/CareersView.vue') },
  { path: '/stage', name: 'internship', component: () => import('../views/InternshipView.vue') },
  { path: '/services/:pole', name: 'service-detail', component: () => import('../views/ServiceDetailView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})