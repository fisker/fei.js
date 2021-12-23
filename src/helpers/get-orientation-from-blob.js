import getJpegOrientation from 'jpeg-buffer-orientation'
import {readAsArrayBuffer} from './file-reader.js'

async function getOrientation(blob) {
  const buffer = await readAsArrayBuffer(blob)
  return getJpegOrientation(buffer)
}

export default getOrientation
