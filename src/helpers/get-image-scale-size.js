import getImageSize from './get-image-size'
import {isFinite} from './global-this'

function scaleLength(length, maxLength) {
  if (isFinite(maxLength) && maxLength >= 1) {
    return maxLength / length
  }
  return 1
}

function getScaleSize(image, {maxWidth, maxHeight, rotate}) {
  let {width, height} = getImageSize(image)

  if (rotate) {
    ;[width, height] = [height, width]
  }

  const scaleX = scaleLength(width, maxWidth)
  const scaleY = scaleLength(height, maxHeight)

  return Math.min(scaleX, scaleY, 1)
}

export default getScaleSize
