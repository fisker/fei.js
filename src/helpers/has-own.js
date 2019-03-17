const {hasOwnProperty} = Object.prototype

function hasOwn(obj, key) {
  return obj && hasOwnProperty.call(obj, key)
}

export default hasOwn
