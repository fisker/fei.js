import toBlob from './fixture-to-blob.js'

function processor(fei) {
  return (fixture, options) => {
    const blob = toBlob(fixture)
    return fei(blob, options)
  }
}

export default processor
