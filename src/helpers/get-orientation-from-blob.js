import {readAsArrayBuffer} from './file-reader'
import orientation from '../orientation'

async function getOrientation(blob) {
  const buffer = await readAsArrayBuffer(blob)
  return orientation(buffer)
}

export default getOrientation
