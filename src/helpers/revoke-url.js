import {SUPPORTS_REVOKE_OBJECT_URL} from '../supports.js'
import {URL} from './global-this.js'
import noop from './noop.js'

function revokeObjectURL(url) {
  try {
    URL.revokeObjectURL(url)
  } catch {}
}

const revoke = SUPPORTS_REVOKE_OBJECT_URL ? revokeObjectURL : noop

export default revoke
