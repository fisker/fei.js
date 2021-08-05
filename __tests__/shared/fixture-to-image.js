import mem from 'mem'
import read from './read.js'
import bufferToImage from './buffer-to-image.js'

function toImage({file}) {
  const {buffer} = read(file)
  return bufferToImage(buffer)
}

export default mem(toImage)
