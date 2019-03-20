// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import orientation from 'jpeg-buffer-orientation'
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import {readAsArrayBuffer} from './file-reader'

async function getOrientation(blob) {
  const buffer = await readAsArrayBuffer(blob)
  return orientation(buffer)
}

export default getOrientation
