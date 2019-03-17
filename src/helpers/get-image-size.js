function getImageSize({width, height, naturalWidth, naturalHeight}) {
  return {
    width: naturalWidth || width,
    height: naturalHeight || height,
  }
}

export default getImageSize
