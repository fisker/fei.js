import flipContext from './flip-canvas-context.js'
import rotateContext from './rotate-canvas-context.js'
import getImageSize from './get-image-size.js'
import createCanvas from './create-canvas.js'

function toCanvas(
  image,
  {flipX = false, flipY = false, scale = 1, rotate = false, degree = 0} = {},
) {
  const {width: imageWidth, height: imageHeight} = getImageSize(image)

  let [width, height] = [imageWidth, imageHeight].map((size) =>
    Math.floor(Math.max(1, size * scale)),
  )

  if (rotate) {
    ;[width, height] = [height, width]
  }

  const canvas = createCanvas(width, height)

  const context = canvas.getContext('2d')

  if (flipX || flipY) {
    flipContext(context, {width, height, flipX, flipY})
  }

  if (degree) {
    rotateContext(context, {width, height, degree, rotate})
  }

  context.drawImage(image, 0, 0, imageWidth * scale, imageHeight * scale)

  return canvas
}

export default toCanvas
