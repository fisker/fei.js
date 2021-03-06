// https://github.com/buunguyen/exif-orient/blob/master/exif-orient.js
function flip(context, {width, height, flipX, flipY}) {
  const translateX = flipX ? width : 0
  const translateY = flipY ? height : 0
  const scaleX = flipX ? -1 : 1
  const scaleY = flipY ? -1 : 1

  context.translate(translateX, translateY)
  context.scale(scaleX, scaleY)
}

export default flip
