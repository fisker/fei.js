import hasOwn from './has-own'

function forIn(obj, iteratee) {
  var key
  for (key in obj) {
    if (hasOwn(obj, key)) {
      iteratee.call(obj, obj[key], key, obj)
    }
  }
}

export default forIn
