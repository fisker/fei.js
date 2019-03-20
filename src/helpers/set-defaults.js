import defaults from '../defaults'

function setDefaults(options = {}) {
  return Object.assign(defaults, options)
}

export default setDefaults
