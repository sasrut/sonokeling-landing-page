<script setup lang="ts">
import { loc, U, V } from '~/utils/iso'

// Cylinder lying along gx (axis "x") or gy (axis "y"). r in px, len in tiles.
const p = withDefaults(defineProps<{
  axis?: 'x' | 'y'; len: number; r: number; gx?: number; gy?: number; z?: number
  body?: string; dark?: string; rings?: [number, string][]
}>(), {
  axis: 'x', gx: 0, gy: 0, z: 0, body: '#8B6359', dark: '#6F4D44',
  rings: () => [[1, '#E6D2C4'], [0.78, '#C9A092'], [0.55, '#A57567'], [0.3, '#855D52'], [0.1, '#5E4039']],
})
const s = computed(() => loc(p.gx, p.gy, p.z))
const e = computed(() => {
  const v = p.axis === 'x' ? [U, V] : [-U, V]
  return [s.value[0] + v[0] * p.len, s.value[1] + v[1] * p.len]
})
const m = computed(() => (p.axis === 'x' ? '0.894 -0.447 0 1' : '0.894 0.447 0 1'))
const hl = computed(() => [p.axis === 'x' ? 0.27 * p.r : -0.27 * p.r, -0.54 * p.r])
</script>

<template>
  <g>
    <g :transform="`matrix(${m} ${s[0]} ${s[1]})`"><circle :r="r" :fill="dark" /></g>
    <line :x1="s[0]" :y1="s[1]" :x2="e[0]" :y2="e[1]" :stroke="body" :stroke-width="r * 2.4" />
    <line :x1="s[0] + hl[0]" :y1="s[1] + hl[1]" :x2="e[0] + hl[0]" :y2="e[1] + hl[1]" stroke="#fff" stroke-opacity=".2" :stroke-width="r * 0.5" />
    <g :transform="`matrix(${m} ${e[0]} ${e[1]})`"><circle v-for="(rg, i) in rings" :key="i" :r="r * rg[0]" :fill="rg[1]" /></g>
  </g>
</template>
