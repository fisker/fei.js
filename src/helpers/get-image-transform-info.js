import {ORIENTATION_TRANSFORMS, DEFAULT_TRANSFORM} from '../constants.js'
import getScaleSize from './get-image-scale-size.js'

function transformInfo(image, {maxWidth, maxHeight, orientation}) {
  const [flipX, flipY, degree] =
    ORIENTATION_TRANSFORMS[orientation - 1] || DEFAULT_TRANSFORM

  const rotate = Math.abs(degree) === 90
  const scale = getScaleSize(image, {
    maxWidth,
    maxHeight,
    rotate,
  })

  if (flipX || flipY || degree || scale !== 1) {
    return {
      flipX,
      flipY,
      degree,
      rotate,
      scale,
    }
  }
}

export default transformInfo
