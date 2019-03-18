import isFinite from './is-finite'

function isMaxSize(size) {
  return typeof size === 'number' && isFinite(size) && size > 0
}

export default isMaxSize
