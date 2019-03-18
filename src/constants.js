export const JPEG_MIME = 'image/jpeg'
export const PNG_MIME = 'image/png'

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
