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

async function processor(blob, options = {}) {
  options = {
    ...defaults,
    ...options,
  }

  const {type = DEFAULT_MIME} = blob || {}

  if (!isImage(type)) {
    return blob
  }

  const {fixOrientation, quality, maxSize} = options

  const orientation =
    fixOrientation && isJPEG(type) ? await getOrientation(blob) : 0
  const image = await blobToImage(blob)
  const {width, height} = getImageSize(image)

  if (!width || !height) {
    // can't load image
    return blob
  }

  const transform = getImageTransformInfo(image, orientation, maxSize)

  if (!transform) {
    // no need to transform
    return blob
  }

  const canvas = imageToCanvas(image, transform)
  const processed = await canvasToBlob(canvas, {
    type,
    quality,
  })

  return processed
}

processor.setDefaults = setDefaults

export default processor
