<script setup>

import { useRoute } from 'vue-router';
import logo from '../../assets/images/logo.png'
import { ref, watch } from 'vue';

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Produits', to: '/produits' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const isActive = (to) => to === '/' ? route.path === '/' : route.path.startsWith(to)

watch(() => route.path, () => {
    menuOpen.value = false
})

</script>

<template>
  
  <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">

    <nav class="relative mx-auto flex max-w-7xl items-center justify-between rounded-full bg-linear-to-r from-white to-brand-300/25 px-3 py-2.5 shadow-brand-700/10 backdrop-blur sm:px-4">

        <RouterLink to="/" aria-label="MBEMNOVA, accueil">
            <img :src="logo" alt="Logo MBEMNOVA" class="h-11 w-11 rounded-full">
        </RouterLink>

        <ul class="hidden items-center gap-8 lg:flex">

            <li v-for="link in links" :key="link.to">

                <RouterLink :to="link.to"
                    class="relative pb-1 text-sm font-medium transition-colors hover:text-brand-500"
                    :class="isActive(link.to) ? 'text-navy after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand-500' : 'text-ink/80'"
                >
                    {{ link.label }}
                </RouterLink>
            </li>
        </ul>

        <div class="flex items-center gap-2">
            
            <RouterLink to="/contact" class="hidden items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 sm:inline-flex">
                Parlons de votre projet <span aria-hidden="true">→</span>
            </RouterLink>

            <button class="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white lg:hidden cursor-pointer" :aria-label="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
                <svg v-if="!menuOpen" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                </svg>
            </button>
        </div>

        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="-translate-y-2 opacity-0"
            leave-active-class="transition duration-150 ease-in"
            leave-to-class="-translate-y-2 opacity-0"
        >
            <div
                v-if="menuOpen"
                class="absolute inset-x-0 top-full mt-3 rounded-3xl bg-white p-4 shadow-xl shadow-brand-700/15 lg:hidden"
            >
                <ul class="flex flex-col gap-1">
                    <li v-for="link in links" :key="link.to">
                    <RouterLink
                        :to="link.to"
                        class="block rounded-2xl px-4 py-3 font-medium"
                        :class="isActive(link.to) ? 'bg-brand-500/10 text-navy' : 'text-ink/80'"
                    >
                        {{ link.label }}
                    </RouterLink>
                    </li>
                </ul>

                <RouterLink
                    to="/contact"
                    class="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-ink"
                >
                    Demander un devis gratuit
                </RouterLink>
            </div>
        </Transition>
    </nav>
  </header>
</template>