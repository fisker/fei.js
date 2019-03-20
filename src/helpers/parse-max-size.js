import isMaxSize from './is-max-size'

function parseMaxSize(maxSize) {
  const [maxWidth, maxHeight] = Array.isArray(maxSize)
    ? maxSize
    : [maxSize, maxSize]

  return {
    maxWidth: isMaxSize(maxWidth) ? maxWidth : undefined,
    maxHeight: isMaxSize(maxHeight) ? maxHeight : undefined,
  }
}

export default parseMaxSize
