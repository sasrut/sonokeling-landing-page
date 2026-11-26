<script setup lang="ts">
import type { Item } from '~/data/items'
import { world } from '~/utils/iso'

const props = defineProps<{ items: Item[] }>()
const emit = defineEmits<{ select: [item: Item]; gallery: [] }>()

const hovered = ref('')
// draw far items first so nearer ones overlap them
const placed = computed(() =>
  [...props.items].sort((a, b) => a.gx + a.gy - (b.gx + b.gy)).map((it, i) => ({ it, pos: world(it.gx, it.gy), delay: `${i * 0.8}s` })),
)
const tip = computed(() => {
  const p = placed.value.find((x) => x.it.id === hovered.value)
  return p ? { x: p.pos[0], y: p.pos[1] + p.it.ly, label: p.it.label, w: p.it.label.length * 7.6 + 28 } : null
})
</script>

<template>
  <div class="mx-auto w-full max-w-[580px] overflow-x-auto lg:max-w-[840px]">
    <svg viewBox="0 0 1200 900" width="100%" preserveAspectRatio="xMidYMid meet" class="mx-auto block h-auto w-full min-w-[580px] lg:min-w-[840px]" role="group" aria-label="Isometric sonokeling workshop">
      <WorkshopBackground @gallery="emit('gallery')" />

      <g
        v-for="{ it, pos, delay } in placed" :key="it.id" class="hotspot" role="button" tabindex="0"
        :aria-label="`${it.label}: open details and inquiry form`" :transform="`translate(${pos[0]} ${pos[1]})`"
        @click="emit('select', it)" @keydown.enter.prevent="emit('select', it)" @keydown.space.prevent="emit('select', it)"
        @pointerenter="hovered = it.id" @pointerleave="hovered = ''" @focus="hovered = it.id" @blur="hovered = ''"
      >
        <ellipse class="ripple" :rx="it.rx" :ry="it.rx / 2" :style="{ animationDelay: delay }" />
        <ellipse class="ring" :rx="it.rx + 10" :ry="(it.rx + 10) / 2" />
        <g class="lift"><component :is="it.comp" /></g>
      </g>

      <g v-if="tip" :key="tip.label" class="tip-in" pointer-events="none" :transform="`translate(${tip.x} ${tip.y})`">
        <rect :x="-tip.w / 2" y="-28" :width="tip.w" height="28" rx="14" fill="#4B3430" />
        <text y="-9" text-anchor="middle" fill="#FBF7F4" font-size="14" font-weight="600" font-family="Figtree, system-ui, sans-serif">{{ tip.label }}</text>
      </g>
    </svg>
  </div>
</template>
