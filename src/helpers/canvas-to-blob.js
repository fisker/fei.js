import dataURLToBlob from './dataurl-to-blob'
import isFunction from './is-function'

function toBlob(canvas, {type, quality}) {
  return new Promise(resolve => canvas.toBlob(resolve, type, quality))
}

function toDataURL(canvas, {type, quality}) {
  const dataURL = canvas.toDataURL(type, quality)
  const blob = dataURLToBlob(dataURL, type)
  return blob
}

function canvasToBlob(canvas, options) {
  if (isFunction(canvas.toBlob)) {
    return toBlob(canvas, options)
  }

  return toDataURL(canvas, options)
}

export default canvasToBlob
