import {document, URL, createImageBitmap} from './helpers/global-this'
import isFunction from './helpers/is-function'

const canvas = document.createElement('canvas')

export const CANVAS_TO_BLOB = isFunction(canvas.toBlob)
export const CREATE_OBJECT_URL = URL && isFunction(URL.createObjectURL)
export const REVOKE_OBJECT_URL = URL && isFunction(URL.revokeObjectURL)
export const IMAGE_BITMAP = isFunction(createImageBitmap)
