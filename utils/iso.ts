// 2:1 isometric projection. 1 floor tile = (60, 30) px along each ground axis, z is in px.
export const U = 60
export const V = 30
export const OX = 600 // screen position of the room's back corner (gx=0, gy=0)
export const OY = 290

/** local coordinates (origin at gx=0, gy=0, z=0) */
export const loc = (x: number, y: number, z = 0): [number, number] => [(x - y) * U, (x + y) * V - z]
/** scene coordinates */
export const world = (x: number, y: number, z = 0): [number, number] => {
  const [a, b] = loc(x, y, z)
  return [OX + a, OY + b]
}
export const poly = (pts: number[][]) => pts.map((p) => p.join(',')).join(' ')
