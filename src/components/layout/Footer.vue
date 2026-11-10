<script setup>
import { ref } from 'vue';
import logo from '../../assets/images/logo.png'
import { poles } from '../../data/poles';
import networkBg from '../../assets/images/network-bg.png';

const year = new Date().getFullYear()

const email = ref('')
const subscribed = ref(false)
const emailError = ref(false)
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

function subscribe() {
    if (!isValidEmail(email.value)) {
        emailError.value = true
        return
    }
    emailError.value = false
    subscribed.value = true
    email.value = ''
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<template>
  <footer class="relative overflow-hidden bg-linear-to-b from-night to-[#000c3d] text-white">

    <img
            :src="networkBg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
    />

    <div class="relative mx-auto box-content max-w-325 px-5 pt-10 sm:px-8 lg:pt-16">
        
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.07fr_1.2fr_1fr] lg:gap-14 xl:gap-6">

            <div>
                <RouterLink to="/" aria-label="MBEMNOVA, accueil">
                    <img :src="logo" alt="Logo MBEMNOVA" class="-h-12 w-12 rounded-full">
                </RouterLink>

                <p class="mt-5 font-display text-xl font-extrabold uppercase leading-tight lg:text-2xl xl:text-3xl">
                    Construisons la suite
                    <span class="text-brand-300">ensemble.</span>
                </p>

                <ul class="mt-6 space-y-1 text-sm text-white/80">
                    <li><a href="mailto:info@mbemnova.com" class="hover:text-white">info@mbemnova.com</a></li>
                    <li><a href="tel:+237697847396" class="hover:text-white">+237 697847396</a></li>
                    <li>Douala Bilongue</li>
                </ul>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <h3 class="text-xs font-bold uppercase tracking-[0.18em] text-accent font-display">Nos 6 pôles</h3>
                    <RouterLink to="/services" class="text-[12.5px] text-white/70 hover:text-white">Tout voir →</RouterLink>
                </div>

                <ul class="mt-4 grid gap-x-8 grid-cols-2">
                    <li v-for="pole in poles" :key="pole.slug" class="border-t border-white/10">
                    <RouterLink
                        :to="`/services/${pole.slug}`"
                        class="flex items-center gap-3 py-3 text-[13px] text-white/90 transition hover:text-white hover:translate-x-2 duration-300 truncate"
                    >
                        <span class="text-xs font-bold text-brand-300">{{ pole.number }}</span>
                        {{ pole.title }}
                    </RouterLink>
                    </li>
                </ul>

                <div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                    <RouterLink to="/carrieres" class="hover:text-accent">Carrières ↗</RouterLink>
                    <RouterLink to="/stage" class="hover:text-accent">Stage académique ↗</RouterLink>
                    <RouterLink to="/a-propos" class="hover:text-accent">À propos ↗</RouterLink>
                </div>

                <h3 class="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-accent font-display">Produits</h3>
                <div class="mt-3 flex flex-wrap gap-2">
                    <RouterLink to="/produits" class="rounded-full border border-white/25 px-3 py-1.5 text-sm transition hover:bg-accent hover:text-ink">schoolheures</RouterLink>
                    <RouterLink to="/produits" class="rounded-full border border-white/25 px-4 py-1.5 text-sm transition hover:bg-accent hover:text-ink">ImmoGest</RouterLink>
                </div>
                
            </div>

            <div>
                <h3 class="text-xs font-semibold uppercase tracking-widest text-accent font-display">Newsletter</h3>
                <p class="mt-3 text-sm text-white/80">Un conseil numérique simple, chaque mois.</p> 
                <p v-if="subscribed" class="mt-4 rounded-full bg-white/10 px-5 py-3 text-sm">
                    Merci, vous êtes inscrit·e ✓
                </p>

                <form v-else class="mt-4" novalidate @submit.prevent="subscribe">

                    <div class="flex items-center rounded-full border border-white/20 bg-white/10 p-1.5 ">
                        <label for="newsletter-email" class="sr-only">Votre email</label>
                        <input
                            id="newsletter-email"
                            v-model="email"
                            type="email"
                            placeholder="Votre email"
                            class="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/50 focus:outline-none"
                        />
                        <button type="submit" class="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink">
                            OK →
                        </button>
                    </div>

                    <p v-if="emailError" class="mt-2 px-2 text-xs text-red-300">
                      Adresse e-mail invalide.
                    </p>
                </form>

                <RouterLink
                    to="/contact"
                    class="mt-4 flex items-center justify-between rounded-[15px] bg-linear-to-r from-brand-600 to-brand-400 px-6 py-3.5 text-sm font-semibold transition hover:brightness-140"
                >
                    Démarrer un projet <span aria-hidden="true">→</span>
                </RouterLink>
                
            </div>
            
        </div>

        <p
            aria-hidden="true"
            class="pointer-events-none mt-10 -mb-2 overflow-hidden select-none bg-linear-to-b from-brand-300/70 via-brand-400/30 to-transparent bg-clip-text text-center font-display text-[clamp(44px,8vw,130px)] font-black leading-[0.8] text-transparent"
        >
            MBEMNOVA
        </p>

        <div class="flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {{ year }} MBEMNOVA · <span class="cursor-pointer hover:text-white">Mentions légales</span> · <span class="cursor-pointer hover:text-white">Confidentialité</span></p>
            <button type="button" class="flex justify-between items-center gap-2 text-left transition hover:text-accent cursor-pointer sm:text-right  " @click="scrollToTop">
            Haut de page <span class="grid place-items-center rounded-full border border-white/60 h-7 w-7">↑</span>
            </button>
        </div>
    </div>
  </footer>
</template>


