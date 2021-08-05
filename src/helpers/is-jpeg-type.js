import {JPEG_MIME} from '../constants.js'

function isJpeg(mime) {
  return mime === JPEG_MIME
}

export default isJpeg
