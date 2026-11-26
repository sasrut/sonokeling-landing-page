<script setup lang="ts">
import { world as W, poly } from '~/utils/iso'

const N = 9, H = 250, T = 26, TH = 0.3 // room size (tiles), wall height, slab thickness, wall thickness
const f = {
  slabL: poly([W(0, N), W(N, N), W(N, N, -T), W(0, N, -T)]),
  slabR: poly([W(N, N), W(N, 0), W(N, 0, -T), W(N, N, -T)]),
  floor: poly([W(0, 0), W(N, 0), W(N, N), W(0, N)]),
  wallL: poly([W(TH, TH), W(TH, N), W(TH, N, H), W(TH, TH, H)]),
  wallR: poly([W(TH, TH), W(N, TH), W(N, TH, H), W(TH, TH, H)]),
  capL: poly([W(0, 0, H), W(0, N, H), W(TH, N, H), W(TH, 0, H)]),
  capR: poly([W(0, 0, H), W(N, 0, H), W(N, TH, H), W(0, TH, H)]),
  endL: poly([W(0, N), W(TH, N), W(TH, N, H), W(0, N, H)]),
  endR: poly([W(N, 0), W(N, TH), W(N, TH, H), W(N, 0, H)]),
  shaft: poly([W(3, TH), W(5.4, TH), W(7.6, 4.2), W(5.2, 4.2)]),
}
const lines = Array.from({ length: N + 1 }, (_, k) => ({ a: poly([W(k, 0), W(k, N)]), b: poly([W(0, k), W(N, k)]) }))
const wallLines = Array.from({ length: N - 1 }, (_, k) => ({ l: poly([W(TH, k + 1), W(TH, k + 1, H)]), r: poly([W(k + 1, TH), W(k + 1, TH, H)]) }))
// flat decals on the walls: local x runs along the wall, local y runs down
const ML = (gy: number, z: number) => { const [x, y] = W(TH, gy, z); return `matrix(-0.894 0.447 0 1 ${x} ${y})` }
const MR = (gx: number, z: number) => { const [x, y] = W(gx, TH, z); return `matrix(0.894 0.447 0 1 ${x} ${y})` }
const motes = [[800,360,0],[850,420,2],[900,380,4],[940,470,1],[880,500,5],[820,455,3],[960,400,6]]
const emit = defineEmits<{ gallery: [] }>()
</script>

<template>
  <g>
    <defs>
      <linearGradient id="wb-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D5E2E1" /><stop offset="1" stop-color="#F6EDDD" /></linearGradient>
      <linearGradient id="wb-light" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF8EC" stop-opacity=".6" /><stop offset="1" stop-color="#FFF8EC" stop-opacity=".05" /></linearGradient>
      <clipPath id="wb-glass"><rect width="160" height="110" /></clipPath>
      <filter id="wb-blur"><feGaussianBlur stdDeviation="16" /></filter>
    </defs>

    <ellipse cx="600" cy="850" rx="540" ry="44" fill="#4B3430" opacity=".16" filter="url(#wb-blur)" />

    <!-- floor slab -->
    <polygon :points="f.slabL" fill="#B99485" /><polygon :points="f.slabR" fill="#A07D6F" />
    <polygon :points="f.floor" fill="#DCC3B4" />
    <g fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="1.5">
      <template v-for="(l, i) in lines" :key="i"><polyline :points="l.a" /><polyline :points="l.b" /></template>
    </g>
    <polygon :points="f.shaft" fill="url(#wb-light)" class="shaft" />

    <!-- walls -->
    <polygon :points="f.endL" fill="#C4A698" /><polygon :points="f.endR" fill="#C4A698" />
    <polygon :points="f.wallL" fill="#D9C0B1" /><polygon :points="f.wallR" fill="#EBD9CE" />
    <g fill="none" stroke="#85594F" stroke-opacity=".07" stroke-width="2">
      <template v-for="(w, i) in wallLines" :key="i"><polyline :points="w.l" /><polyline :points="w.r" /></template>
    </g>
    <polygon :points="f.capL" fill="#F4EAE2" /><polygon :points="f.capR" fill="#F8F0EA" />

    <!-- workshop address board -->
    <g :transform="ML(1.6, 330)" aria-label="Bantul, Yogyakarta, Indonesia">
      <rect width="220" height="76" rx="5" fill="#85594F" opacity=".25" transform="translate(5 6)" />
      <rect width="220" height="76" rx="5" fill="#A97E70" stroke="#6F4D44" stroke-width="3" />
      <rect x="9" y="9" width="202" height="58" rx="2" fill="#F2E4D8" stroke="#D3B09F" stroke-width="2" />
      <circle cx="18" cy="18" r="2.5" fill="#6F4D44" /><circle cx="202" cy="18" r="2.5" fill="#6F4D44" />
      <circle cx="18" cy="58" r="2.5" fill="#6F4D44" /><circle cx="202" cy="58" r="2.5" fill="#6F4D44" />
      <g transform="translate(220 0) scale(-1 1)">
        <text x="110" y="34" text-anchor="middle" fill="#4B3430" font-size="15" font-weight="700" font-family="Figtree, system-ui, sans-serif">Bantul, Yogyakarta</text>
        <text x="110" y="54" text-anchor="middle" fill="#85594F" font-size="14" font-family="Figtree, system-ui, sans-serif">Indonesia</text>
      </g>
    </g>

    <!-- right wall: window, sconce, hanging saw -->
    <g :transform="MR(3, 200)" class="hotspot" role="button" tabindex="0" aria-label="View log photos"
      @click="emit('gallery')" @keydown.enter.prevent="emit('gallery')" @keydown.space.prevent="emit('gallery')">
      <rect class="ring" x="-18" y="-18" width="196" height="152" rx="8" />
      <rect x="-7" y="-7" width="174" height="124" rx="4" fill="#F7EFE9" />
      <g clip-path="url(#wb-glass)">
        <rect width="160" height="110" fill="url(#wb-sky)" />
        <circle cx="122" cy="30" r="16" fill="#FFF6E3" />
        <g class="drift"><ellipse cx="20" cy="34" rx="20" ry="7" fill="#fff" opacity=".85" /><ellipse cx="34" cy="30" rx="12" ry="7" fill="#fff" opacity=".85" /></g>
        <g class="fly"><path d="M0 0 q4 -5 8 0 q4 -5 8 0" fill="none" stroke="#6B5750" stroke-width="1.6" stroke-linecap="round" /></g>
        <path d="M0 92 Q40 66 80 84 T160 76 V110 H0Z" fill="#B7C4A9" /><path d="M0 104 Q50 84 100 98 T160 92 V110 H0Z" fill="#9DAE90" />
        <path d="M80 0 V110 M0 55 H160" stroke="#F7EFE9" stroke-width="6" />
      </g>
      <rect x="-12" y="117" width="184" height="9" rx="3" fill="#C9A092" />
    </g>
    <g :transform="MR(2.2, 170)">
      <circle cy="14" r="30" fill="#FFE6B0" class="glow" />
      <rect x="-3" y="-4" width="6" height="14" fill="#8B6359" /><path d="M-9 8 h18 l-3 22 h-12z" fill="#C9A092" /><rect x="-6" y="14" width="12" height="12" fill="#FFF2CC" />
    </g>
    <g :transform="MR(6.4, 222)">
      <g class="swing">
        <circle r="3" fill="#85594F" /><path d="M0 0 V18" stroke="#85594F" stroke-width="1.5" />
        <rect x="-10" y="16" width="20" height="34" rx="9" fill="#A57C70" /><rect x="-4" y="24" width="8" height="16" rx="4" fill="#E6D3C7" />
        <path d="M-9 50 L9 50 L3 150 L-3 150Z" fill="#D2C9C3" /><path d="M-9 50 L-3 150" stroke="#B3A9A2" stroke-width="2" />
      </g>
    </g>

    <!-- left wall: shelves -->
    <g :transform="ML(4.8, 125)">
      <rect y="0" width="255" height="9" rx="2" fill="#A97E70" /><rect x="20" y="9" width="6" height="18" fill="#8B6359" /><rect x="230" y="9" width="6" height="18" fill="#8B6359" />
      <rect x="14" y="-30" width="26" height="30" rx="5" fill="#F2E4D8" /><rect x="16" y="-37" width="22" height="7" rx="2" fill="#BE9A8A" />
      <rect x="64" y="-34" width="10" height="34" fill="#C3CEB6" /><rect x="76" y="-28" width="10" height="28" fill="#CFA89A" /><rect x="88" y="-38" width="10" height="38" fill="#D5B8A8" />
      <rect x="130" y="-24" width="28" height="24" rx="3" fill="#C3CEB6" /><rect x="136" y="-30" width="16" height="6" fill="#9DAE90" />
      <rect x="180" y="-14" width="60" height="14" rx="2" fill="#CFA89A" /><rect x="200" y="-24" width="18" height="10" rx="2" fill="#85594F" />
    </g>
    <g :transform="ML(5.0, 62)">
      <rect y="0" width="230" height="9" rx="2" fill="#A97E70" /><rect x="20" y="9" width="6" height="16" fill="#8B6359" /><rect x="204" y="9" width="6" height="16" fill="#8B6359" />
      <rect x="30" y="-28" width="70" height="28" rx="3" fill="#D5B8A8" /><path d="M40 -18 h50 M40 -10 h50" stroke="#85594F" stroke-opacity=".35" stroke-width="3" />
      <rect x="130" y="-20" width="26" height="20" rx="3" fill="#F2E4D8" /><rect x="170" y="-30" width="34" height="30" rx="4" fill="#C9A092" />
    </g>

    <g fill="#FFF8EC"><circle v-for="(m, i) in motes" :key="i" class="mote" :cx="m[0]" :cy="m[1]" r="2.6" :style="{ animationDelay: m[2] + 's', animationDuration: 8 + (i % 3) * 2 + 's' }" /></g>
  </g>
</template>
