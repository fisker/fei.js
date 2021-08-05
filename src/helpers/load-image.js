import {Promise, Image} from './global-this.js'
import revoke from './revoke-url.js'

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.addEventListener('load', () => {
      revoke(url)
      resolve(image)
    })
    image.addEventListener('error', reject)
  })
}

export default loadImage
