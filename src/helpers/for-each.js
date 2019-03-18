const {forEach} = Array.prototype

function each(obj, iteratee) {
  return forEach.call(obj, iteratee)
}

export default each
