import {URL, createImageBitmap, OffscreenCanvas} from './helpers/global-this.js'
import isFunction from './helpers/is-function.js'
import isObject from './helpers/is-object.js'

const SUPPORTS_URL = isFunction(URL)

export const SUPPORTS_CREATE_OBJECT_URL =
  SUPPORTS_URL && isFunction(URL.createObjectURL)

export const SUPPORTS_REVOKE_OBJECT_URL =
  SUPPORTS_URL && isFunction(URL.revokeObjectURL)

export const SUPPORTS_IMAGE_BITMAP = isFunction(createImageBitmap)

export const SUPPORTS_OFFSCREEN_CANVAS = ((OffscreenCanvas) => {
  if (!isFunction(OffscreenCanvas)) {
    return false
  }

  const canvas = new OffscreenCanvas(1, 1)
  if (!isObject(canvas) || !isFunction(canvas.convertToBlob)) {
    return false
  }

  const context = canvas.getContext('2d')
  if (!isObject(context) || !isFunction(context.drawImage)) {
    return false
  }

  return true
})(OffscreenCanvas)
