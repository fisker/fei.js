import {document} from './helpers/global-this'
import isFunction from './helpers/is-function'

const canvas = document.createElement('canvas')

export const CANVAS_TO_BLOB = isFunction(canvas.toBlob)
