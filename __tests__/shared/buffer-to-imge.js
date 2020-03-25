import {Image} from 'canvas'
import mem from 'mem'

function bufferToImage(buffer) {
  return new Promise((resolve) => {
    const image = new Image()
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    image.onload = () => resolve(image)
    image.src = buffer
  })
}

export default mem(bufferToImage)
