import defaults from './defaults'
import isImage from './helpers/is-image-type'
import isJPEG from './helpers/is-jpeg-type'
import getOrientation from './helpers/get-orientation-from-blob'
import blobToImage from './helpers/blob-to-image'
import parseMaxSize from './helpers/parse-max-size'
import getImageTransformInfo from './helpers/get-image-transform-info'
import imageToCanvas from './helpers/image-to-canvas'
import canvasToBlob from './helpers/canvas-to-blob'
import {DEFAULT_MIME} from './constants'

async function processor(blob, options) {
  options = {
    ...defaults,
    ...options,
  }

  const {type = DEFAULT_MIME} = blob || {}

  if (!isImage(type)) {
    return blob
  }

  const maxSize = parseMaxSize(options)
  const {fixOrientation} = options

  const orientation =
    fixOrientation && isJPEG(type) ? await getOrientation(blob) : 0
  const image = await blobToImage(blob)
  const transform = getImageTransformInfo(image, orientation, maxSize)

  if (!transform) {
    return blob
  }

  const canvas = imageToCanvas(image, transform)
  const processed = await canvasToBlob(canvas, type, options.quality)

  return processed
}

export default processor
