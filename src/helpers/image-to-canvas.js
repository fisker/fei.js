import {document} from './global-this'
import flip from './flip-canvas-context'
import rotate from './rotate-canvas-context'
import getImageSize from './get-image-size'

function toCanvas(image, {flipX, flipY, scale, rotated, degree}) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  const {width: imageWidth, height: imageHeight} = getImageSize(image)

  const width = imageWidth * scale
  const height = imageHeight * scale

  canvas.width = rotated ? height : width
  canvas.height = rotated ? width : height

  if (flipX || flipY) {
    flip(context, {
      flipX,
      flipY,
    })
  }

  if (degree) {
    rotate(context, {
      degree,
      rotated,
    })
  }

  context.drawImage(image, 0, 0, imageWidth, imageHeight, 0, 0, width, height)

  return canvas
}

export default toCanvas
