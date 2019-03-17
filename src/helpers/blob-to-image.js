import Promise from './promise'
import blobToUrl from './blob-to-url'
import loadImage from './load-image'

function blobToImage(blob) {
  return Promise.resolve(blob)
    .then(blobToUrl)
    .then(loadImage)
}

export default blobToImage
