import degreeToAngle from './degree-to-angle'

// https://github.com/buunguyen/exif-orient/blob/master/exif-orient.js
function rotate(context, {degree, rotated}) {
  const {canvas} = context
  const {width, height} = canvas

  context.translate(width / 2, height / 2)
  context.rotate(degreeToAngle(degree))
  context.translate(-width / 2, -height / 2)

  if (rotated) {
    context.translate((width - height) / 2, -(width - height) / 2)
  }
}

export default rotate
