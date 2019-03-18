// get orientation from a Arraybuffer
// most codes from urls bellow
// https://github.com/dominictarr/exif-orientation-lite/blob/master/index.js
// https://github.com/exif-js/exif-js/blob/master/exif.js

import {DataView} from '../helpers/global-this'
import isJPEG from './is-jpeg'
import getExifPosition from './get-exif-position'
import getOrientation from './get-orientation'

function orientation(buffer) {
  const view = new DataView(buffer)

  if (!isJPEG(view)) {
    return null
  }

  const exifOffset = getExifPosition(view)

  if (!exifOffset) {
    return null
  }

  return getOrientation(view, exifOffset)
}

export default orientation
