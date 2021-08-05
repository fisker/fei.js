import isImage from './helpers/is-image-type.js'
import isJpeg from './helpers/is-jpeg-type.js'
import getOrientation from './helpers/get-orientation-from-blob.js'
import blobToImage from './helpers/blob-to-image.js'
import getImageTransformInfo from './helpers/get-image-transform-info.js'
import imageToCanvas from './helpers/image-to-canvas.js'
import canvasToBlob from './helpers/canvas-to-blob.js'
import getImageSize from './helpers/get-image-size.js'
import setDefaults from './helpers/set-defaults.js'
import {DEFAULT_MIME} from './constants.js'
import defaults from './defaults.js'

async function processor(input, options = {}) {
  options = {
    ...defaults,
    ...options,
  }

  const {type = DEFAULT_MIME} = input || {}

  if (!isImage(type)) {
    return input
  }

  const {fixOrientation, quality, maxWidth, maxHeight, always, preferSmaller} =
    options

  const orientation =
    fixOrientation && isJpeg(type) ? await getOrientation(input) : 0
  const image = await blobToImage(input)
  const {width, height} = getImageSize(image)

  if (!width || !height) {
    // can't load image
    return input
  }

  const transform = getImageTransformInfo(image, {
    maxWidth,
    maxHeight,
    orientation,
  })

  let processed = input

  if (transform || always || quality) {
    const canvas = imageToCanvas(image, transform)
    processed = await canvasToBlob(canvas, {
      type,
      quality,
    })
  }

  if (!transform && preferSmaller && processed.size > input.size) {
    return input
  }

  return processed
}

processor.setDefaults = setDefaults

export default processor
