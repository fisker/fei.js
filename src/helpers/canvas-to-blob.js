import {SUPPORTS_OFFSCREEN_CANVAS} from '../supports.js'
import dataURLToBlob from './dataurl-to-blob.js'
import isFunction from './is-function.js'

function toBlob(canvas, {type, quality}) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, type, quality)
  })
}

function toDataURL(canvas, {type, quality}) {
  const dataURL = canvas.toDataURL(type, quality)
  const blob = dataURLToBlob(dataURL, type)
  return blob
}

function convertOffscreenCanvasToBlob(canvas, options) {
  return canvas.convertToBlob(options)
}

function canvasToBlob(canvas, options) {
  if (isFunction(canvas.toBlob)) {
    return toBlob(canvas, options)
  }

  if (SUPPORTS_OFFSCREEN_CANVAS && isFunction(canvas.convertToBlob)) {
    return convertOffscreenCanvasToBlob(canvas, options)
  }

  return toDataURL(canvas, options)
}

export default canvasToBlob
