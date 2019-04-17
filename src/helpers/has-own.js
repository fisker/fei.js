const {hasOwnProperty} = Object.prototype

function hasOwn(object, key) {
  return object && hasOwnProperty.call(object, key)
}

export default hasOwn
