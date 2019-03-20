import getScaleSize from './get-image-scale-size'
import parseMaxSize from './parse-max-size'

import {
  ORIENTATION_TRANSFORMS,
  DEFAULT_TRANSFORM,
} from '../orientation/constants'

function transformInfo(image, orientation, maxSize) {
  const [flipX, flipY, degree] =
    ORIENTATION_TRANSFORMS[orientation - 1] || DEFAULT_TRANSFORM

  const {maxWidth, maxHeight} = parseMaxSize(maxSize)

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

  return null
}

export default transformInfo
