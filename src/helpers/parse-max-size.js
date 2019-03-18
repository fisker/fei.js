import isMaxSize from './is-max-size'

function parseMaxSize({maxWidth, maxHeight, maxSize}) {
  if (isMaxSize(maxWidth) && isMaxSize(maxHeight)) {
    maxSize = {
      maxWidth,
      maxHeight,
    }
  }

  if (Array.isArray(maxSize)) {
    ;[maxWidth, maxHeight] = maxSize
  } else if (typeof maxSize === 'number') {
    maxWidth = maxSize
    maxHeight = maxSize
  } else {
    ;({maxWidth = maxSize, maxHeight = maxSize} = maxSize)
  }

  if (!isMaxSize(maxWidth) || !isMaxSize(maxHeight)) {
    return null
  }

  return {
    maxWidth,
    maxHeight,
  }
}

export default parseMaxSize
