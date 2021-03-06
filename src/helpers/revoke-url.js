import {SUPPORTS_REVOKE_OBJECT_URL} from '../supports'
import {URL} from './global-this'
import noop from './noop'

function revokeObjectURL(url) {
  try {
    URL.revokeObjectURL(url)
  } catch {}
}

const revoke = SUPPORTS_REVOKE_OBJECT_URL ? revokeObjectURL : noop

export default revoke
