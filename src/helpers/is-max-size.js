function isMaxSize(size) {
  return typeof size === 'number' && Number.isFinite(size) && size > 0
}

export default isMaxSize
