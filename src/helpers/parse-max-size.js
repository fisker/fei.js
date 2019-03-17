import isMaxSize from './is-max-size'

function parseMaxSize({maxWidth, maxHeight, maxSize}) {
  if (isMaxSize(maxWidth) && isMaxSize(maxHeight)) {
    maxSize = {
      maxWidth,
      maxHeight,
    }
  }

  if (Array.isArray(maxSize)) {
    maxWidth = maxSize[0]
    maxHeight = maxSize[1]
  } else if (typeof maxSize === 'number') {
    maxWidth = maxSize
    maxHeight = maxSize
  } else {
    ;({maxWidth = maxSize, maxHeight = maxSize} = maxSize)
  }

  if (!isMaxSize(maxWidth) || !isMaxSize(maxHeight)) {
    null
  }

  return {
    maxWidth,
    maxHeight,
  }
}

export default parseMaxSize
