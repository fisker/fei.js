import flipContext from './flip-canvas-context'
import rotateContext from './rotate-canvas-context'
import getImageSize from './get-image-size'
import createCanvas from './create-canvas'

function toCanvas(image, {flipX, flipY, scale, rotate, degree}) {
  const {width: imageWidth, height: imageHeight} = getImageSize(image)

  const width = (rotate ? imageHeight : imageWidth) * scale
  const height = (rotate ? imageWidth : imageHeight) * scale

  const canvas = createCanvas(width, height)

  const context = canvas.getContext('2d')

  if (flipX || flipY) {
    flipContext({context, width, height, flipX, flipY})
  }

  if (degree) {
    rotateContext({context, width, height, degree, rotate})
  }

  context.drawImage(image, 0, 0, imageWidth * scale, imageHeight * scale)

  return canvas
}

export default toCanvas
