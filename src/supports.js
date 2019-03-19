import {URL, createImageBitmap, OffscreenCanvas} from './helpers/global-this'
import isFunction from './helpers/is-function'

export const SUPPORTS_CREATE_OBJECT_URL = URL && isFunction(URL.createObjectURL)
export const SUPPORTS_REVOKE_OBJECT_URL = URL && isFunction(URL.revokeObjectURL)
export const SUPPORTS_IMAGE_BITMAP = isFunction(createImageBitmap)
export const SUPPORTS_OFFSCREEN_CANVAS = isFunction(OffscreenCanvas)
