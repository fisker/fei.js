import {IMAGE_BITMAP} from '../supports'
import blobToUrl from './blob-to-url'
import loadImage from './load-image'
import blobToImageBitmap from './blob-to-image-bitmap'

async function blobToImage(blob) {
  const url = await blobToUrl(blob)
  const image = await loadImage(url)
  return image
}

const toImage = IMAGE_BITMAP ? blobToImageBitmap : blobToImage

export default toImage
