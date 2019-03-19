import isNull from './is-null'
import isFunction from './is-function'

function isObject(x) {
  return !isNull(x) && (isFunction(x) || typeof x === 'object')
}

export default isObject
