export const JPEG_MIME = 'image/jpeg'
export const PNG_MIME = 'image/png'
export const DEFAULT_MIME = 'application/octet-stream'

// [flip-x, flip-y, degree]
export const ORIENTATION_TRANSFORMS = [
  [false, false, 0], // 1
  [true, false, 0], // 2
  [false, false, 180], // 3
  [false, true, 0], // 4
  [true, false, 90], // 5
  [false, false, 90], // 6
  [true, false, -90], // 7
  [false, false, -90], // 8
]
export const DEFAULT_TRANSFORM = ORIENTATION_TRANSFORMS[0]
export const ORIENTATION_TRANSFORMS_HUMAN = [
  'Horizontal',
  'Mirror-horizontal',
  'Rotate-180',
  'Mirror-vertical',
  'Mirror-horizontal-and-rotate-270-CW',
  'Rotate-90 CW',
  'Mirror-horizontal-and-rotate-90-CW',
  'Rotate-270-CW',
]
export const DEFAULT_TRANSFORM_HUMAN = 'none'
