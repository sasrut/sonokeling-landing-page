<script setup lang="ts">
type Pellet = {
  axis: 'x' | 'y'
  len: number
  r: number
  gx: number
  gy: number
  z: number
  body: string
  dark: string
}

// Short cylinders read as small capsules while keeping the same isometric
// construction as the logs elsewhere in the workshop.
const pellets: Pellet[] = [
  { axis: 'x', len: 0.48, r: 5.2, gx: -0.68, gy: -0.22, z: 5, body: '#C58F63', dark: '#8A573C' },
  { axis: 'x', len: 0.44, r: 5.4, gx: -0.12, gy: -0.38, z: 7, body: '#D2A477', dark: '#956044' },
  { axis: 'x', len: 0.46, r: 5.1, gx: 0.38, gy: -0.22, z: 6, body: '#B97D54', dark: '#7A4934' },
  { axis: 'y', len: 0.45, r: 5.3, gx: -0.72, gy: 0.18, z: 8, body: '#D8AD7F', dark: '#925D40' },
  { axis: 'y', len: 0.48, r: 5.5, gx: -0.25, gy: 0.08, z: 9, body: '#C98F62', dark: '#814C36' },
  { axis: 'y', len: 0.43, r: 5.1, gx: 0.25, gy: 0.14, z: 8, body: '#D9AF80', dark: '#9A6547' },
  { axis: 'x', len: 0.45, r: 5.2, gx: 0.56, gy: 0.36, z: 7, body: '#B97950', dark: '#764531' },
  { axis: 'x', len: 0.46, r: 5.3, gx: -0.48, gy: 0.52, z: 14, body: '#D3A273', dark: '#8C573B' },
  { axis: 'x', len: 0.44, r: 5.3, gx: 0.04, gy: 0.44, z: 15, body: '#C48B5D', dark: '#814D35' },
  { axis: 'y', len: 0.42, r: 5.1, gx: 0.48, gy: 0.52, z: 14, body: '#DCAF7D', dark: '#915E40' },
  { axis: 'x', len: 0.4, r: 5, gx: -0.13, gy: 0.78, z: 20, body: '#B9784F', dark: '#70412F' },
]
</script>

<template>
  <g>
    <ellipse cy="12" rx="72" ry="31" fill="#4B3430" opacity=".12" />
    <IsoCyl
      v-for="(pellet, i) in pellets"
      :key="i"
      :axis="pellet.axis"
      :len="pellet.len"
      :r="pellet.r"
      :gx="pellet.gx"
      :gy="pellet.gy"
      :z="pellet.z"
      :body="pellet.body"
      :dark="pellet.dark"
      :rings="[[1, pellet.body], [0.68, '#F0C99D'], [0.3, pellet.dark]]"
    />
  </g>
</template>
