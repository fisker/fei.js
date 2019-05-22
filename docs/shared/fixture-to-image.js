import mem from 'mem'
import read from './read'
import bufferToImage from './buffer-to-imge'

function toImage({file}) {
  const {buffer} = read(file)
  return bufferToImage(buffer)
}

export default mem(toImage)
