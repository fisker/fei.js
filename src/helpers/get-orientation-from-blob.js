import {readAsArrayBuffer} from './file-reader'
import getOrientationFromBuffer from './get-orientation-from-buffer'

async function getOrientation(blob) {
  const buffer = await readAsArrayBuffer(blob)
  return getOrientationFromBuffer(buffer)
}

export default getOrientation
