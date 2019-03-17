import defaults from './defaults'
import isImage from './helpers/is-image-type'
import isJPEG from './helpers/is-jpeg-type'
import getOrientation from './helpers/get-orientation-from-blob'
import blobToUrl from './helpers/blob-to-url'
import parseMaxSize from './helpers/parse-max-size'
import loadImage from './helpers/load-image'
import getImageTransformInfo from './helpers/get-image-transform-info'
import imageToCanvas from './helpers/image-to-canvas'
import canvasToBlob from './helpers/canvas-to-blob'

async function processor(blob, options) {
  options = {
    ...defaults,
    ...options,
  }

  const maxSize = parseMaxSize(options)

  const {type} = blob

  if (!isImage(type)) {
    return blob
  }

  const orientation = isJPEG(type) ? await getOrientation(blob) : 0
  const url = await blobToUrl(blob)
  const image = await loadImage(url)
  const transform = getImageTransformInfo(image, orientation, maxSize)

  if (!transform) {
    return blob
  }

  var canvas = imageToCanvas(image, transform)
  const processed = await canvasToBlob(canvas, type, options.quality)

  return processed
}

export default processor
