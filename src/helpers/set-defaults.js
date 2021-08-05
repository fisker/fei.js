import defaults from '../defaults.js'

function setDefaults(options = {}) {
  return Object.assign(defaults, options)
}

export default setDefaults
