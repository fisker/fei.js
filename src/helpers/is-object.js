import isNull from './is-null.js'
import isFunction from './is-function.js'

function isObject(x) {
  return !isNull(x) && (isFunction(x) || typeof x === 'object')
}

export default isObject
