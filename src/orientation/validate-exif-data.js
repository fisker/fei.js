import {EXIF_START, TIFF_FIRST_IFD_OFFSET, TIFF_TAG_MARK} from './constants'
import isLittleEndia from './is-tiff-align-little-endian'
import isBoolean from '../helpers/is-boolean'

function validateEXIFData(view, offset) {
  // Not valid EXIF data! NO 'Exif' found
  if (view.getUint32(offset) !== EXIF_START) {
    return false
  }

  const tiffOffset = offset + 6
  const littleEndian = isLittleEndia(view, tiffOffset)

  if (!isBoolean(littleEndian)) {
    return false
  }

  // "Not valid TIFF data! (no 0x002A)"
  if (view.getUint16(tiffOffset + 2, littleEndian) !== TIFF_TAG_MARK) {
    return false
  }

  const firstIFDOffset = view.getUint32(tiffOffset + 4, littleEndian)

  if (firstIFDOffset < TIFF_FIRST_IFD_OFFSET) {
    // Not valid TIFF data! (First offset less than 8)
    return false
  }

  return {
    tiffOffset,
    littleEndian,
    firstIFDOffset,
  }
}

export default validateEXIFData
