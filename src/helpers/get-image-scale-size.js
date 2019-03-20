import getImageSize from './get-image-size'

function scaleLength(length, maxLength) {
  if (!maxLength || length < maxLength) {
    return 1
  }

  return maxLength / length
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
