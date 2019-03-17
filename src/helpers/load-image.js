import Promise from './promise'
import Image from './image'
import revoke from './revoke-url'

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      revoke(url)
      resolve(img)
    }
    img.onerror = reject
  })
}

export default loadImage
