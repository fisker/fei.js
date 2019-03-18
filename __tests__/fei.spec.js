/**
 * @jest-environment jsdom-thirteen
 */
/* globals window: true */
import {readFileSync} from 'fs'
import {Image} from 'canvas'
import images from './fixtures'
import fei from '../src'
import {readAsArrayBuffer} from '../src/helpers/file-reader'
import dataURLToBlob from '../src/helpers/dataurl-to-blob'
import blobToImage from '../src/helpers/blob-to-image'
import {
  ORIENTATION_TRANSFORMS,
  DEFAULT_TRANSFORM,
} from '../src/orientation/constants'

// window.Image.prototype.addEventListener = function(type, listener) {
//   if (type !== 'load') {
//     return
//   }
//   setTimeout(async () => {
//     const blob = dataURLToBlob(this.src)
//     const buffer = Buffer.from(await readAsArrayBuffer(blob))
//     const image = await bufferToImage(buffer)
//     'width,height,naturalWidth,naturalHeight'.split(',').forEach(prop => {
//       Object.defineProperty(this, prop, {
//         get() {
//           return image[prop]
//         },
//       })
//     })
//     listener()
//   })
// }

function bufferToImage(buffer) {
  return new Promise(resolve => {
    const image = new Image()
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    image.onload = () => resolve(image)
    image.src = buffer
  })
}

function getImageAsImage(index = 0) {
  const {file} = images[index]
  const {buffer} = readFileSync(file)
  return bufferToImage(buffer)
}

function getImageAsFile(index = 0) {
  const {name, file} = images[index]
  const {buffer} = readFileSync(file)
  return new window.File([buffer], name, {
    type: 'image/jpeg',
  })
}

function processImage(options, index = 0) {
  const file = getImageAsFile(index)
  return fei(file, options)
}

describe('lib', () => {
  test('fei is a function', () => {
    expect(fei).toBeInstanceOf(Function)
  })

  test('return Promise', () => {
    const processed = processImage({
      maxSize: null,
    })
    expect(processed).toBeInstanceOf(window.Promise)
  })

  test('return Promise<Blob>', async () => {
    const processed = await processImage({
      maxSize: null,
    })
    expect(processed).toBeInstanceOf(window.Blob)
  })
})

describe('options', () => {
  test('options.maxSize = 100', async () => {
    const file = getImageAsFile()
    const processed = await fei(file, {
      maxSize: 100,
    })
    const {naturalWidth, naturalHeight} = await blobToImage(processed)
    expect(naturalWidth).toBeLessThanOrEqual(100)
    expect(naturalHeight).toBeLessThanOrEqual(100)
  })

  test('options.maxSize = [400, 300]', async () => {
    const file = getImageAsFile()
    const processed = await fei(file, {
      maxSize: [400, 300],
    })
    const {naturalWidth, naturalHeight} = await blobToImage(processed)
    expect(naturalWidth).toBeLessThanOrEqual(400)
    expect(naturalHeight).toBeLessThanOrEqual(300)
  })
})

describe('should fix orientation', () => {
  images.forEach(({name, orientation}, index) => {
    const transform = ORIENTATION_TRANSFORMS[orientation] || DEFAULT_TRANSFORM
    const degree = transform[2]
    let [width, height] = [600, 450]
    if (Math.abs(degree) === 90) {
      ;[width, height] = [height, width]
    }

    test(`${name} size should from fix ${width}x${height} to 600x450`, async () => {
      const file = getImageAsFile(index)
      const processed = await fei(file, {
        maxSize: null,
      })
      const {naturalWidth, naturalHeight} = await blobToImage(processed)
      expect(`${naturalWidth}x${naturalHeight}`).toBe('600x450')
    })
  })

  test(`image[4] should not reach width limit`, async () => {
    const file = getImageAsFile(4)
    const processed = await fei(file, {
      maxSize: [600, 450],
    })
    const {naturalWidth, naturalHeight} = await blobToImage(processed)
    expect(`${naturalWidth}x${naturalHeight}`).toBe('600x450')
  })
})
