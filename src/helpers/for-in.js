import hasOwn from './has-own'

function forIn(object, iteratee) {
  for (const key in object) {
    if (hasOwn(object, key)) {
      iteratee.call(object, object[key], key, object)
    }
  }
}

export default forIn
