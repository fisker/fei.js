import URL from './url'

function revoke(url) {
  try {
    URL.revokeObjectURL(url)
  } catch {}
}

export default revoke
