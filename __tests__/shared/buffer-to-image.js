import {Image} from 'canvas'
import mem from 'mem'

function bufferToImage(buffer) {
  return new Promise((resolve) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.src = buffer
  })
}

export default mem(bufferToImage)
