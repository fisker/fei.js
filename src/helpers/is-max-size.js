import isFinite from './is-finite.js'

function isMaxSize(size) {
  return typeof size === 'number' && isFinite(size) && size > 0
}

export default isMaxSize
