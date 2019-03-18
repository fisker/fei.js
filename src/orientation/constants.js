// https://www.media.mit.edu/pia/Research/deepview/exif.html
export const SOI_MARKER = 0xffd8
export const APP1_MARKER = 0xffe1
export const EXIF_START = 0x45786966
export const TIFF_ALIGN_INTEL = 0x4949
export const TIFF_ALIGN_MOTOROLA = 0x4d4d
export const TIFF_TAG_MARK = 0x002a
export const TIFF_FIRST_IFD_OFFSET = 0x00000008
export const TIFF_ORIENTATION_TAG_NO = 0x0112
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
