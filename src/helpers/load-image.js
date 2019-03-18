import Promise from './promise'
import Image from './image'
import revoke from './revoke-url'

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.addEventListener('load', () => {
      revoke(url)
      resolve(img)
    })
    img.addEventListener('error', reject)
  })
}

export default loadImage
