import mem from 'mem'
import read from './read'

function toBlob({name, file, type}) {
  const {buffer} = read(file)
  return new window.File([buffer], name, {
    type,
  })
}

export default mem(toBlob)
