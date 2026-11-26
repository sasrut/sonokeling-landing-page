<script setup lang="ts">
const levels = [{ z: 0, dx: 0, dy: 0 }, { z: 17, dx: 0.05, dy: 0.06 }]
const runners = [-0.7, -0.11, 0.48]
const boards = [0, 1, 2, 3, 4].map((i) => -0.8 + i * 0.335)
</script>
<template>
  <g>
    <ellipse cy="10" rx="100" ry="40" fill="#4B3430" opacity=".1" />
    <g v-for="(l, li) in levels" :key="li">
      <IsoBox v-for="y in runners" :key="'r' + y" :a="1.6" :b="0.22" :h="12" :gx="-0.8 + l.dx" :gy="y + l.dy" :z="l.z" top="#BE9585" left="#A97E70" right="#8B6359" />
      <IsoBox v-for="x in boards" :key="'b' + x" :a="0.27" :b="1.4" :h="5" :gx="x + l.dx" :gy="-0.7 + l.dy" :z="l.z + 12" top="#DDBFAF" left="#C9A092" right="#A97E70" />
    </g>
  </g>
</template>
