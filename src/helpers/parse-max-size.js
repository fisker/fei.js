import isMaxSize from './is-max-size'

function parseMaxSize({maxSize}) {
  const [maxWidth, maxHeight] = Array.isArray(maxSize)
    ? maxSize
    : [maxSize, maxSize]

  if (!isMaxSize(maxWidth) || !isMaxSize(maxHeight)) {
    return null
  }

  return {
    maxWidth,
    maxHeight,
  }
}

export default parseMaxSize
