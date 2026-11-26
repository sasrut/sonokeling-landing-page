<script setup lang="ts">
const canopy: [number, number, number, string][] = [[0,-228,52,'#A9B79B'],[-44,-196,38,'#B7C4A9'],[46,-200,40,'#9DAE90'],[0,-188,40,'#C3CEB6'],[-24,-250,30,'#C3CEB6'],[28,-252,28,'#B7C4A9'],[-62,-170,24,'#B7C4A9'],[64,-172,26,'#A9B79B']]
</script>
<template>
  <g>
    <ellipse cy="6" rx="78" ry="38" fill="#4B3430" opacity=".1" />
    <IsoBox :a="1.3" :b="1.3" :h="16" :gx="-0.65" :gy="-0.65" top="#8A6A5F" left="#CDA698" right="#A97E70" />
    <path d="M-15 -14 C-13 -80 -10 -130 -9 -190 L0 -190 L0 -14Z" fill="#A57C70" />
    <path d="M15 -14 C13 -80 10 -130 9 -190 L0 -190 L0 -14Z" fill="#86605A" />
    <g fill="none" stroke="#5E4039" stroke-opacity=".4" stroke-linecap="round" stroke-width="2">
      <path d="M-6 -16 C-5 -70 -5 -120 -4 -180" /><path d="M5 -16 C5 -70 4 -110 5 -170" />
    </g>
    <g fill="none" stroke="#8B6359" stroke-linecap="round" stroke-width="7">
      <path d="M-6 -150 C-24 -166 -36 -170 -48 -190" /><path d="M6 -140 C26 -158 40 -164 52 -184" />
    </g>
    <g class="sway">
      <circle v-for="(c, i) in canopy" :key="i" :cx="c[0]" :cy="c[1]" :r="c[2]" :fill="c[3]" />
      <circle cx="-14" cy="-236" r="16" fill="#D3DBC8" opacity=".8" /><circle cx="34" cy="-214" r="11" fill="#D3DBC8" opacity=".8" />
    </g>
    <g v-for="(l, i) in [[-34,-168,0],[22,-176,2.4],[50,-160,4.6]]" :key="i" :transform="`translate(${l[0]} ${l[1]})`">
      <path class="fall" d="M0 0 q6 -8 12 -2 q-4 8 -12 2z" fill="#9DAE90" :style="{ animationDelay: l[2] + 's' }" />
    </g>
  </g>
</template>
