import getScaleSize from './get-image-scale-size'
import {ORIENTATION_TRANSFORMS, DEFAULT_TRANSFORM} from '../constants'

function getImageTransformInfo(image, orientation, maxSize) {
  const [flipX, flipY, degree] =
    ORIENTATION_TRANSFORMS[orientation - 1] || DEFAULT_TRANSFORM
  const rotated = Math.abs(degree) === 90
  const scale = getScaleSize(image, maxSize, rotated)

  if (flipX || flipY || degree || scale !== 1) {
    return {
      flipX,
      flipY,
      degree,
      rotated,
      scale,
    }
  }

  return null
}

export default getImageTransformInfo
