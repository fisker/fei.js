import {SUPPORTS_IMAGE_BITMAP} from '../supports.js'
import blobToUrl from './blob-to-url.js'
import loadImage from './load-image.js'
import blobToImageBitmap from './blob-to-image-bitmap.js'

async function blobToImage(blob) {
  const url = await blobToUrl(blob)
  const image = await loadImage(url)
  return image
}

const toImage = SUPPORTS_IMAGE_BITMAP ? blobToImageBitmap : blobToImage

export default toImage
