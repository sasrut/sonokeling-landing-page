<script setup lang="ts">
import { X, Send } from 'lucide-vue-next'
import { items, type Item } from '~/data/items'
import { logImages } from '~/data/gallery'

const props = defineProps<{ item: Item | null; gallery?: boolean }>()
const emit = defineEmits<{ close: [] }>()
const isOpen = computed(() => !!props.item || !!props.gallery)

const inquiryEmail = 'sonokelingheritage@gmail.com'
const blank = () => ({ name: '', email: '', phone: '', product: '', message: '' })
const form = reactive(blank())
const closeBtn = ref<HTMLButtonElement | null>(null)

watch(() => props.item, async (it) => {
  if (!it) return
  Object.assign(form, blank(), { product: it.label })
  await nextTick()
  closeBtn.value?.focus()
})

const onKey = (e: KeyboardEvent) => e.key === 'Escape' && isOpen.value && emit('close')
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
watch(isOpen, (o) => { if (import.meta.client) document.body.style.overflow = o ? 'hidden' : '' })

function submit() {
  const subject = `[Inquiry] ${form.product || 'General'} - ${form.name}`
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || '-'}`,
    `Interested in: ${form.product || '-'}`,
    '',
    form.message,
  ].join('\n')
  window.location.href = `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0" leave-active-class="transition duration-200" leave-to-class="opacity-0">
      <div v-if="isOpen" class="fixed inset-0 z-50 bg-sono-900/30 backdrop-blur-[2px]" @click="emit('close')" />
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out" enter-from-class="translate-x-full"
      leave-active-class="transition duration-200 ease-in" leave-to-class="translate-x-full">
      <aside v-if="isOpen" role="dialog" aria-modal="true" :aria-label="gallery ? 'Sonokeling logs' : item?.label"
        class="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col overflow-y-auto bg-sono-50 shadow-2xl">
        <div class="sticky top-0 z-10 flex justify-end bg-sono-50/90 p-3 backdrop-blur">
          <button ref="closeBtn" type="button" aria-label="Close" class="rounded-full p-2 text-sono-600 hover:bg-sono-100 focus-visible:ring-2 focus-visible:ring-sono-500" @click="emit('close')">
            <X class="h-5 w-5" />
          </button>
        </div>

        <div v-if="gallery" class="px-6 pb-10">
          <h2 class="font-display text-3xl font-semibold text-sono-800">Sonokeling logs</h2>
          <ul class="mt-6 grid grid-cols-2 gap-3">
            <li v-for="(src, i) in logImages" :key="src" class="overflow-hidden rounded-2xl bg-sono-200">
              <img :src="src" :alt="`Sonokeling log photo ${i + 1}`" loading="lazy" class="aspect-[3/4] h-full w-full object-cover">
            </li>
          </ul>
        </div>

        <div v-else-if="item" class="px-6 pb-10">
          <div class="mx-auto mb-6 flex h-56 items-center justify-center rounded-3xl bg-sono-200/70 p-5">
            <svg :viewBox="item.vb" class="h-full w-auto max-w-full" aria-hidden="true"><component :is="item.comp" /></svg>
          </div>

          <h2 class="font-display text-3xl font-semibold text-sono-800">{{ item.label }}</h2>
          <p class="mt-1 text-sono-600">{{ item.tagline }}</p>

          <div class="mt-5 space-y-3 text-[15px] leading-relaxed">
            <p v-for="(p, i) in item.about" :key="i">{{ p }}</p>
          </div>

          <dl class="mt-5 divide-y divide-sono-200 rounded-2xl bg-white/60 px-4 text-sm">
            <div v-for="[k, v] in item.specs" :key="k" class="flex justify-between gap-4 py-2.5">
              <dt class="text-sono-600">{{ k }}</dt><dd class="text-right font-medium">{{ v }}</dd>
            </div>
          </dl>
          <p class="mt-3 text-xs text-sono-600">Every item, like pellet, log or beam, is customizable.</p>

          <h3 class="mt-9 font-display text-xl font-semibold">Send an inquiry</h3>

          <form class="mt-4 space-y-3" @submit.prevent="submit">
            <div class="grid gap-3 sm:grid-cols-2">
              <label class="block text-sm"><span class="mb-1 block text-sono-600">Name</span>
                <input v-model="form.name" required autocomplete="name" class="field"></label>
              <label class="block text-sm"><span class="mb-1 block text-sono-600">Email</span>
                <input v-model="form.email" type="email" required autocomplete="email" class="field"></label>
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
              <label class="block text-sm"><span class="mb-1 block text-sono-600">Phone / WhatsApp (optional)</span>
                <input v-model="form.phone" type="tel" autocomplete="tel" class="field"></label>
              <label class="block text-sm"><span class="mb-1 block text-sono-600">Interested in</span>
                <select v-model="form.product" class="field">
                  <option v-for="it in items" :key="it.id">{{ it.label }}</option>
                  <option>General question</option>
                </select></label>
            </div>
            <label class="block text-sm"><span class="mb-1 block text-sono-600">Message</span>
              <textarea v-model="form.message" required rows="4" placeholder="Sizes, quantity, delivery location…" class="field resize-y" /></label>

            <button type="submit"
              class="inline-flex items-center gap-2 rounded-full bg-sono-600 px-5 py-2.5 text-sm font-semibold text-sono-50 transition hover:bg-sono-700 focus-visible:ring-2 focus-visible:ring-sono-500 focus-visible:ring-offset-2">
              <Send class="h-4 w-4" /> Send inquiry
            </button>
          </form>

          <p class="mt-8 border-t border-sono-200 pt-4 text-xs leading-relaxed text-sono-600">
            We hold the applicable permits to facilitate your export requirements and other related needs. For more details and inquiries, please send us an email at sonokelingheritage@gmail.com.
          </p>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>
