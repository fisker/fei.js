import getImageSize from './get-image-size'

function getScaleSize(image, maxSize, rotated) {
  let scale = 1

  if (!maxSize) {
    return scale
  }

  const {maxWidth, maxHeight} = maxSize

  let {width, height} = getImageSize(image)

  if (rotated) {
    ;[width, height] = [height, width]
  }

  if (maxWidth && width > maxWidth) {
    scale = Math.min(scale, maxWidth / width)
  }

  if (maxHeight && height > maxHeight) {
    scale = Math.min(scale, maxHeight / height)
  }

  return scale
}

export default getScaleSize
