<template>
  
  <button type="button" aria-haspopup="dialog" @click="open = true" class="fixed bottom-4 right-4 flex items-center gap-3 rounded-full bg-accent py-2.5 pl-2.5 pr-6 font-semibold text-ink shadow-xl shadow-accent/30 transition hover:scale-105 sm:bottom-6 sm:right-6">
    <span class="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-accent">
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    </span>
    Parlons-en
  </button>

  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="opacity-0" 
  >

    <div v-if="open" class="fixed inset-0 flex items-end justify-center z-60 bg-ink/40 p-4 backdrop-blur-sm sm:items-end sm:justify-end sm:p-6"
      @click.self="close"
    >
        <div
          class="relative w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl sm:mb-20"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >

          <button
            type="button"
            class="absolute cursor-pointer right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition hover:bg-ink/5 hover:text-ink"
            aria-label="Fermer"
            @click="close"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 id="contact-title" class="pr-8 text-xl font-extrabold leading-snug">
            Comment voulez-vous nous joindre ?
          </h2>
          <p class="mt-1 text-sm text-ink/50">
            Choisissez ce qui vous arrange, on vous répond vite.
          </p>

          <div class="mt-4 space-y-2.5">
            <a
              href="tel:+237697847396"
              class="group flex items-center gap-4 rounded-2xl border-0 p-3.5 transition bg-brand-600/5 hover:bg-[#e6eeff]"
              @click="close"
            >   
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.443-.11-.907.055-1.178.42l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>

              <span class="min-w-0 max-w-[155px] flex-1">
                <span class="block text-base font-bold">Nous appeler</span>
                <span class="block text-sm text-ink/60">+237 697847396</span>
              </span>

              <span class="text-lg text-brand-500 transition group-hover:translate-x-1">→</span>
              
            </a>

            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-4 rounded-2xl border-0  p-3.5 transition bg-brand-600/5 hover:bg-[#e6eeff]"
              @click="close"
            >
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
              </span>

              <span class="min-w-0 flex-1 max-w-[155px]">
                <span class="block text-base font-bold">Écrire sur WhatsApp</span>
                <span class="block text-sm text-ink/60">Réponse rapide, en direct</span>
              </span>
              <span class="text-lg text-brand-500 transition group-hover:translate-x-1">→</span>
            </a>

            <RouterLink
              to="/contact"
              class="group flex items-center gap-4 rounded-2xl bg-linear-to-r from-navy to-brand-500 p-3.5 text-white shadow-lg shadow-brand-600/25 transition hover:brightness-110"
              @click="close"
            >
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </span>

              <span class="min-w-0 flex-1 max-w-[155px]">
                <span class="block text-base font-bold">Demander un devis gratuit</span>
                <span class="block text-sm text-white/75">Décrivez votre projet en 2 minutes</span>
              </span>

              <svg class="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>

            </RouterLink>

          </div>

        </div>
    </div>
    
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const open = ref(false)
const whatsappUrl = `https://wa.me/237697847396?text=${encodeURIComponent('Bonjour MBEMNOVA, j’aimerais discuter d’un projet.')}`

function close() {
    open.value = false
}

function onKeydown(event) {
    if(event.key == 'Espace') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

watch(open, (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
})
</script>
