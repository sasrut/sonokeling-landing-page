<script setup lang="ts">
import { AtSign, Instagram, Mail, MapPin, Phone, UserRound } from 'lucide-vue-next'

const contact = [
  { value: 'Bantul, Yogyakarta, Indonesia', icon: MapPin },
]
</script>

<template>
  <section aria-label="Contact information" class="rounded-2xl border border-sono-300/80 bg-sono-50/90 p-4 shadow-sm backdrop-blur-sm">
    <ul class="space-y-3 text-sm text-sono-700">
      <li v-for="entry in contact" :key="entry.value" class="flex items-start gap-2.5">
        <component :is="entry.icon" class="mt-0.5 h-4 w-4 shrink-0 text-sono-600" aria-hidden="true" />
        <span>{{ entry.value }}</span>
      </li>
      <li class="flex items-start gap-2.5">
        <Phone class="mt-0.5 h-4 w-4 shrink-0 text-sono-600" aria-hidden="true" />
        <a href="tel:+6281234567890" class="transition hover:text-sono-900">+62-821-3618-6820</a>
      </li>
      <li class="flex items-start gap-2.5">
        <Mail class="mt-0.5 h-4 w-4 shrink-0 text-sono-600" aria-hidden="true" />
        <a href="mailto:sonokelingheritage@gmail.com" class="break-all transition hover:text-sono-900">sonokelingheritage@gmail.com</a>
      </li>
      <li class="flex items-start gap-2.5">
        <Instagram class="mt-0.5 h-4 w-4 shrink-0 text-sono-600" aria-hidden="true" />
        <a href="https://www.instagram.com/diy.sonokeling/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="transition hover:text-sono-900">@diy.sonokeling</a>
      </li>
      <li class="flex items-start gap-2.5">
        <AtSign class="mt-0.5 h-4 w-4 shrink-0 text-sono-600" aria-hidden="true" />
        <a href="https://www.threads.com/@diy.sonokeling" target="_blank" rel="noopener noreferrer" aria-label="Threads" class="transition hover:text-sono-900">@diy.sonokeling</a>
      </li>
    </ul>
  </section>
</template>
