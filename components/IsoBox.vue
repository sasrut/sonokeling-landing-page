<script setup lang="ts">
import { loc, poly } from '~/utils/iso'

// Box with its back corner at (gx, gy, z). a = size along gx, b = size along gy (tiles), h = height (px).
const p = withDefaults(defineProps<{
  a: number; b: number; h: number; gx?: number; gy?: number; z?: number
  top?: string; left?: string; right?: string; lines?: number
}>(), { gx: 0, gy: 0, z: 0, top: '#DDBFAF', left: '#C4968A', right: '#A47A6D', lines: 0 })

const faces = computed(() => {
  const X = p.gx + p.a, Y = p.gy + p.b, T = p.z + p.h
  return {
    top: poly([loc(p.gx, p.gy, T), loc(X, p.gy, T), loc(X, Y, T), loc(p.gx, Y, T)]),
    left: poly([loc(p.gx, Y, p.z), loc(X, Y, p.z), loc(X, Y, T), loc(p.gx, Y, T)]),
    right: poly([loc(X, Y, p.z), loc(X, p.gy, p.z), loc(X, p.gy, T), loc(X, Y, T)]),
  }
})
const grain = computed(() => Array.from({ length: p.lines }, (_, i) => {
  const z = p.z + (p.h * (i + 1)) / (p.lines + 1), X = p.gx + p.a, Y = p.gy + p.b
  return { l: poly([loc(p.gx, Y, z), loc(X, Y, z)]), r: poly([loc(X, Y, z), loc(X, p.gy, z)]) }
}))
</script>

<template>
  <g stroke="#4B3430" stroke-opacity=".16" stroke-linejoin="round">
    <polygon :points="faces.left" :fill="left" />
    <polygon :points="faces.right" :fill="right" />
    <polygon :points="faces.top" :fill="top" />
    <g fill="none" stroke-opacity=".22" stroke-width="1.5">
      <template v-for="(g, i) in grain" :key="i"><polyline :points="g.l" /><polyline :points="g.r" /></template>
    </g>
  </g>
</template>
