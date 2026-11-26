<script setup lang="ts">
import { loc, poly } from '~/utils/iso'
// planks lean on the left wall (wall sits at local gx = -0.8)
const planks = [
  { y0: -0.85, y1: -0.35, h: 150, fill: '#C4968A' },
  { y0: -0.35, y1: 0.15, h: 168, fill: '#B58A7C' },
  { y0: 0.15, y1: 0.65, h: 158, fill: '#A97E70' },
].map((p) => {
  const gb = -0.3, gt = -0.74
  const mid = (f: number) => p.y0 + (p.y1 - p.y0) * f
  return {
    ...p,
    face: poly([loc(gb, p.y0, 0), loc(gb, p.y1, 0), loc(gt, p.y1, p.h), loc(gt, p.y0, p.h)]),
    g1: poly([loc(gb, mid(0.33), 0), loc(gt, mid(0.33), p.h)]),
    g2: poly([loc(gb, mid(0.7), 0), loc(gt, mid(0.7), p.h)]),
  }
})
</script>
<template>
  <g>
    <ellipse cx="-20" cy="6" rx="70" ry="30" fill="#4B3430" opacity=".1" />
    <g stroke="#4B3430" stroke-opacity=".16" stroke-linejoin="round">
      <g v-for="(p, i) in planks" :key="i">
        <polygon :points="p.face" :fill="p.fill" />
        <polyline :points="p.g1" fill="none" stroke-opacity=".3" stroke-width="1.5" /><polyline :points="p.g2" fill="none" stroke-opacity=".3" stroke-width="1.5" />
      </g>
    </g>
  </g>
</template>
