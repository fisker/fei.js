import read from './read.js'

function toBlob({name, file, type}) {
  const {buffer} = read(file)
  return new window.File([buffer], name, {
    type,
  })
}

export default toBlob
