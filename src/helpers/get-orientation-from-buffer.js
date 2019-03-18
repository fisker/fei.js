import {DataView} from './global-this'

// https://www.media.mit.edu/pia/Research/deepview/exif.html
const SOI_MARKER = 0xffd8
const APP1_MARKER = 0xffe1
const EXIF_START = 0x45786966
const TIFF_ALIGN_INTEL = 0x4949
const TIFF_ALIGN_MOTOROLA = 0x4d4d
const TIFF_TAG_MARK = 0x002a
const TIFF_FIRST_IFD_OFFSET = 0x00000008
const TIFF_ORIENTATION_TAG_NO = 0x0112

// https://github.com/dominictarr/exif-orientation-lite/blob/master/index.js
// https://github.com/exif-js/exif-js/blob/master/exif.js

function getOrientationFromJPEG(view) {
  let offset = 2
  let marker
  const {byteLength} = view

  while (offset < byteLength) {
    // Not a valid marker
    if (view.getUint8(offset) !== 0xff) {
      return -1
    }

    marker = view.getUint16(offset)
    offset += 2

    if (marker === APP1_MARKER) {
      return getOrientationFromEXIFData(view, offset + 2)
    }

    offset += view.getUint16(offset + 2)
  }

  return -1
}

function getOrientationFromEXIFData(view, start) {
  // Not valid EXIF data! NO 'Exif' found
  if (view.getUint32(start) !== EXIF_START) {
    return -1
  }

  let littleEndian
  const tiffOffset = start + 6
  const tiffAlign = view.getUint16(tiffOffset)

  if (tiffAlign === TIFF_ALIGN_MOTOROLA) {
    littleEndian = false
  } else if (tiffAlign === TIFF_ALIGN_INTEL) {
    littleEndian = true
  } else {
    // "Not valid TIFF data! (no 0x4949 or 0x4D4D)"
    return -1
  }

  // "Not valid TIFF data! (no 0x002A)"
  if (view.getUint16(tiffOffset + 2, littleEndian) !== TIFF_TAG_MARK) {
    return -1
  }

  const firstIFDOffset = view.getUint32(tiffOffset + 4, littleEndian)

  if (firstIFDOffset < TIFF_FIRST_IFD_OFFSET) {
    // Not valid TIFF data! (First offset less than 8)
    return -1
  }

  const tags = view.getUint16(firstIFDOffset, littleEndian)
  const dirStart = tiffOffset + firstIFDOffset

  for (let i = 0; i < tags; i++) {
    const entryOffset = dirStart + i * 12 + 2
    if (view.getUint16(entryOffset, littleEndian) === TIFF_ORIENTATION_TAG_NO) {
      return view.getUint16(entryOffset + 8, littleEndian)
    }
  }

  return -1
}

function getOrientationFromBuffer(buffer) {
  const view = new DataView(buffer)

  // not jpeg
  if (view.getUint16(0) !== SOI_MARKER) {
    return -1
  }

  return getOrientationFromJPEG(view)
}

export default getOrientationFromBuffer
