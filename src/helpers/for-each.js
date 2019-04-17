const {forEach} = Array.prototype

function each(object, iteratee) {
  return forEach.call(object, iteratee)
}

export default each
