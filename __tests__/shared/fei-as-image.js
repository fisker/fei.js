import blobToImage from '../../src/helpers/blob-to-image.js'
import feiAsBlob from './fei-as-blob.js'

function processor(fei) {
  const asBlob = feiAsBlob(fei)
  return async (fixture, options) => {
    const blob = await asBlob(fixture, options)
    return blobToImage(blob)
  }
}

export default processor
