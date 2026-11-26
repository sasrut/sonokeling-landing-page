import SonokelingTree from '~/components/assets/SonokelingTree.vue'
import LogAsset from '~/components/assets/LogAsset.vue'
import BeamAsset from '~/components/assets/BeamAsset.vue'
import PlankAsset from '~/components/assets/PlankAsset.vue'
import WoodChips from '~/components/assets/WoodChips.vue'
import WoodPellets from '~/components/assets/WoodPellets.vue'
import PalletAsset from '~/components/assets/PalletAsset.vue'
import BarkAsset from '~/components/assets/BarkAsset.vue'

export interface Item {
  id: string
  label: string
  tagline: string
  about: string[]
  specs: [string, string][]
  comp: any
  gx: number; gy: number // floor tile position (room is 9 x 9 tiles)
  vb: string // viewBox used for the preview in the side panel
  rx: number // radius of the click / ripple footprint
  ly: number // label height above the footprint
}

// NOTE: copy below is placeholder. Replace with your real products, sizes and sourcing details.
export const items: Item[] = [
  {
    id: 'tree', label: 'Sonokeling tree', comp: SonokelingTree,
    tagline: 'Where every piece starts.',
    about: [
      'Sonokeling (Dalbergia latifolia), also called Indonesian rosewood, is a slow-growing hardwood known for its deep violet-brown heartwood and dark, flowing stripes.',
      'We tell you where each batch comes from and which paperwork travels with it.',
    ],
    specs: [['Botanical name', 'Dalbergia latifolia'], ['Heartwood', 'Violet-brown with dark stripes'], ['Sourcing', 'DIY, Central Java and surrounding areas']],
    gx: 1.8, gy: 1.8, vb: '-110 -310 220 340', rx: 62, ly: -290,
  },
  {
    id: 'log', label: 'Logs', comp: LogAsset,
    tagline: 'Whole logs, ready to be milled to your order.',
    about: ['Raw logs are graded by diameter, straightness and heartwood share. Tell us what you plan to cut and we will suggest the right log.'],
    specs: [['Length', 'up to 1.0 – 3.0 m'], ['Diameter', 'up to 20 – 80 cm'], ['Drying', 'air-dried / kiln-dried']],
    gx: 6.3, gy: 2.2, vb: '-110 -105 220 170', rx: 80, ly: -100,
  },
  {
    id: 'beam', label: 'Beams', comp: BeamAsset,
    tagline: 'Squared timber for structure and statement furniture.',
    about: ['Beams are cut square and planed on request. A good fit for table bases, mantels, stair stringers and exposed frames.'],
    specs: [['Section', 'custom e.g. 10×10, 15×15 cm'], ['Length', 'up to 3 m'], ['Finish', 'Rough sawn or planed']],
    gx: 3.4, gy: 5.6, vb: '-110 -130 220 200', rx: 90, ly: -125,
  },
  {
    id: 'plank', label: 'Planks', comp: PlankAsset,
    tagline: 'Boards for tabletops, flooring, panels and instruments.',
    about: ['Planks are sorted by grain and color so a set matches. Ask for book-matched boards if you are building a tabletop.'],
    specs: [['Thickness', 'up to 8 cm'], ['Width', 'up to 10 – 30 cm'], ['Grade', 'A / B / C'], ['Finish', 'Rough sawn or planed']],
    gx: 0.8, gy: 3.5, vb: '-100 -200 200 240', rx: 64, ly: -200,
  },
  {
    id: 'chips', label: 'Wood chips', comp: WoodChips,
    tagline: 'Offcuts and shavings, nothing wasted.',
    about: ['Chips and shavings from milling are bagged for smoking food, garden mulch, animal bedding and craft use.'],
    specs: [['Packing', 'up to 25 kg /sacks'], ['Use', 'Smoking, mulch, bedding, craft']],
    gx: 5.5, gy: 8.0, vb: '-90 -80 180 110', rx: 62, ly: -70,
  },
  {
    id: 'pellets', label: 'Wood pellets', comp: WoodPellets,
    tagline: 'Compact fuel made from clean wood fiber.',
    about: ['Wood pellets turn fine, dry sawdust into a consistent fuel for pellet stoves and boilers. They are a tidy way to put more of each timber batch to work.'],
    specs: [['Form', 'Small, pressed wood capsules'], ['Material', 'Clean, dry wood fiber'], ['Packing', 'sack/bags or bulk delivery']],
    gx: 3.6, gy: 7.9, vb: '-90 -75 180 120', rx: 62, ly: -70,
  },
  {
    id: 'bark', label: 'Bark', comp: BarkAsset,
    tagline: 'Rough outer bark, left as nature made it.',
    about: ['Bark pieces are collected for decoration, planters, natural dyes and display work.'],
    specs: [['Form', 'Slabs and curled pieces'], ['Packing', 'by kg or by sack']],
    gx: 8.4, gy: 8.0, vb: '-110 -80 220 130', rx: 70, ly: -60,
  },
  {
    id: 'pallet', label: 'Wood pallets', comp: PalletAsset,
    tagline: 'Shipping pallets and custom crates.',
    about: ['Standard and custom pallets for export and local freight. We can also build a crate around your finished furniture.'],
    specs: [['Sizes', 'custom e.g. 120×100 cm'], ['Treatment', 'untreated']],
    gx: 8.3, gy: 5.4, vb: '-110 -100 220 160', rx: 86, ly: -95,
  },
]
