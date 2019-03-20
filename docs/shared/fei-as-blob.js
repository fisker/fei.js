import toBlob from './fixture-to-blob'

function processor(fei) {
  return (fixture, options) => {
    const blob = toBlob(fixture)
    return fei(blob, options)
  }
}

export default processor
