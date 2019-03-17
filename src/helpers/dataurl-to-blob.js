import atob from './atob'
import Blob from './blob'

function dataURLToBlob(data, type) {
  var bin = atob(data.split(',')[1])
  var length = bin.length
  var arr = new Uint8Array(length)

  forEach.call(bin, function(_, i) {
    arr[i] = bin.charCodeAt(i)
  })

  return new Blob([arr], {
    type: type,
  })
}

export default dataURLToBlob
