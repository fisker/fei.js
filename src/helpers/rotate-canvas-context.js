import degreeToAngle from './degree-to-angle'

// https://github.com/buunguyen/exif-orient/blob/master/exif-orient.js
function rotate(context, {width, height, degree, rotate}) {
  context.translate(width / 2, height / 2)
  context.rotate(degreeToAngle(degree))
  context.translate(-width / 2, -height / 2)

  if (rotate) {
    context.translate((width - height) / 2, -(width - height) / 2)
  }
}

export default rotate
