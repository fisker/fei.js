import {URL} from './global-this'

function revoke(url) {
  try {
    URL.revokeObjectURL(url)
  } catch {}
}

export default revoke
