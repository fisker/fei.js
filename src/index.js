import isImage from './helpers/is-image-type'
import isJPEG from './helpers/is-jpeg-type'
import getOrientation from './helpers/get-orientation-from-blob'
import blobToImage from './helpers/blob-to-image'
import getImageTransformInfo from './helpers/get-image-transform-info'
import imageToCanvas from './helpers/image-to-canvas'
import canvasToBlob from './helpers/canvas-to-blob'
import getImageSize from './helpers/get-image-size'
import setDefaults from './helpers/set-defaults'
import {DEFAULT_MIME} from './constants'
import defaults from './defaults'

async function processor(input, options = {}) {
  options = {
    ...defaults,
    ...options,
  }

  const {type = DEFAULT_MIME} = input || {}

  if (!isImage(type)) {
    return input
  }

  const {
    fixOrientation,
    quality,
    maxWidth,
    maxHeight,
    always,
    preferSmaller,
  } = options

  const orientation =
    fixOrientation && isJPEG(type) ? await getOrientation(input) : 0
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
