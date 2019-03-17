const IMAGE_MIME = /^image\//

function isImage(mime) {
  return IMAGE_MIME.test(mime)
}

export default isImage
