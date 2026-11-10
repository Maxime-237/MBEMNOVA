<script setup>
import { useRoute } from 'vue-router';


const route = useRoute()
</script>

<template>
  <main class="p-6 pt-280">
    <h1 class="text-3xl text-navy">Service : {{ route.params.pole }}</h1>
  </main>
</template>