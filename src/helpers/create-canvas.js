import {OffscreenCanvas, document} from './global-this'
import {SUPPORTS_OFFSCREEN_CANVAS} from '../supports'

function createOffscreenCanvas(width, height) {
  return new OffscreenCanvas(width, height)
}

function createHTMLCanvasElement(width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  return canvas
}

const createCanvas = SUPPORTS_OFFSCREEN_CANVAS
  ? createOffscreenCanvas
  : createHTMLCanvasElement

export default createCanvas
