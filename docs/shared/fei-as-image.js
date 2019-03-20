import feiAsBlob from './fei-as-blob'
import blobToImage from '../../src/helpers/blob-to-image'

function processor(fei) {
  const asBlob = feiAsBlob(fei)
  return async (fixture, options) => {
    const blob = await asBlob(fixture, options)
    return blobToImage(blob)
  }
}

export default processor
