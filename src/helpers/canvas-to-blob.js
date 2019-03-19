import {SUPPORTS_OFFSCREEN_CANVAS} from '../supports'
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

function convertToBlob(canvas, {type, quality}) {
  return canvas.convertToBlob(type, quality)
}

function canvasToBlob(canvas, options) {
  if (isFunction(canvas.toBlob)) {
    return toBlob(canvas, options)
  }

  if (SUPPORTS_OFFSCREEN_CANVAS && isFunction(canvas.convertToBlob)) {
    return convertToBlob(canvas, options)
  }

  return toDataURL(canvas, options)
}

export default canvasToBlob
