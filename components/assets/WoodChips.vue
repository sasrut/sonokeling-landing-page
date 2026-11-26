<script setup lang="ts">
const chips = [[-62,8,-20],[60,10,25],[-46,18,10],[44,20,-15],[0,22,5],[-74,0,30],[74,2,-30],[-20,-10,15],[26,-6,-25]]
const cols = ['#EAD7C8', '#D3B09F', '#F2E4D8', '#BE9585']
const puffs = [[-20,-34,0],[0,-46,0.7],[18,-36,1.4],[-8,-40,2.1],[10,-28,2.7]]
</script>
<template>
  <g>
    <ellipse cy="6" rx="74" ry="34" fill="#D9BFAE" />
    <path d="M-62 2 Q-40 -42 0 -48 Q40 -42 62 2 Q0 24 -62 2Z" fill="#E6D2C4" />
    <path d="M0 -48 Q40 -42 62 2 Q32 16 0 14Z" fill="#C9A38F" opacity=".7" />
    <path v-for="(c, i) in chips" :key="i" d="M0 0 q6 -7 13 -2 q-3 7 -13 2z" :transform="`translate(${c[0]} ${c[1]}) rotate(${c[2]})`" :fill="cols[i % 4]" stroke="#8B6359" stroke-width=".6" stroke-opacity=".4" />
    <circle v-for="(p, i) in puffs" :key="'p' + i" class="puff" :cx="p[0]" :cy="p[1]" r="2.6" fill="#F2E4D8" :style="{ animationDelay: p[2] + 's' }" />
  </g>
</template>
