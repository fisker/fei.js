import {CANVAS_TO_BLOB} from '../supports'
import dataURLToBlob from './dataurl-to-blob'

function toBlob(canvas, {type, quality}) {
  return new Promise(resolve => canvas.toBlob(resolve, type, quality))
}

function toDataURL(canvas, {type, quality}) {
  const dataURL = canvas.toDataURL(type, quality)
  const blob = dataURLToBlob(dataURL, type)
  return blob
}

export default (CANVAS_TO_BLOB ? toBlob : toDataURL)
