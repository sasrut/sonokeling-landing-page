<script setup lang="ts">
import { items, type Item } from '~/data/items'
const active = shallowRef<Item | null>(null)
const galleryOpen = ref(false)
const close = () => { active.value = null; galleryOpen.value = false }
</script>

<template>
  <div class="min-h-screen overflow-x-hidden overflow-y-auto mb-8">
    <header class="relative mx-auto w-full max-w-[1400px] px-5 pb-2 pt-12 sm:px-8 sm:pb-4 sm:pt-6 lg:pr-80">
      <h1 class="font-display text-2xl font-bold tracking-tight text-sono-700 sm:text-5xl">Sonokeling Heritage</h1>
      <div class="mt-1 max-w-xl text-sm text-sono-600 sm:mt-2 sm:text-base">
        <p>Welcome to Sonokeling Heritage. We offer quality Sonokeling (rosewood) logs, beams, planks, and other timber products.</p>
        <p class="mt-2">Select a product to view its details and inquire about availability, pricing, or custom orders.</p>
      </div>
      <div class="absolute right-8 top-6 hidden w-80 lg:block">
        <ContactDetails />
      </div>
    </header>
    

    <main class="mx-auto w-full max-w-[1400px] px-3 sm:px-8">
      <!-- Plain list: easier on phones and for screen readers -->
       <div class="mb-8">
        <ul class="flex flex-wrap gap-1.5 sm:gap-2">
          <li v-for="it in items" :key="it.id">
            <button type="button"
              class="rounded-full border border-sono-300 bg-sono-50 px-3 py-1 text-xs text-sono-700 transition hover:bg-sono-200 focus-visible:ring-2 focus-visible:ring-sono-500 sm:px-4 sm:py-1.5 sm:text-sm"
              @click="active = it">{{ it.label }}</button>
          </li>
          <li>
            <button type="button"
              class="rounded-full border border-sono-300 bg-sono-50 px-3 py-1 text-xs text-sono-700 transition hover:bg-sono-200 focus-visible:ring-2 focus-visible:ring-sono-500 sm:px-4 sm:py-1.5 sm:text-sm"
              @click="galleryOpen = true">Sources</button>
          </li>
        </ul>
       </div>
  
      <WorkshopScene :items="items" @select="active = $event" @gallery="galleryOpen = true" />
      <div class="mt-5 lg:hidden">
        <ContactDetails />
      </div>
    </main>

    <InfoPanel :item="active" :gallery="galleryOpen" @close="close" />
  </div>
</template>
