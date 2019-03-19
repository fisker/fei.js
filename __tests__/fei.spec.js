/**
 * @jest-environment jsdom-thirteen
 */

import fei from '../src'
import fixtures from './shared/fixtures'
import feiAsBlob from './shared/fei-as-blob'
import feiAsImage from './shared/fei-as-image'

const asBlob = feiAsBlob(fei)
const asImage = feiAsImage(fei)

describe('lib', () => {
  test('fei is a function', () => {
    expect(fei).toBeInstanceOf(Function)
  })

  test('return Promise', () => {
    expect(fei()).toBeInstanceOf(window.Promise)
  })

  test('return Promise<Blob>', async () => {
    const blob = await asBlob(fixtures[0])
    expect(blob).toBeInstanceOf(window.Blob)
  })

  test('do noting to <NotImage>', async () => {
    const somethingNotImage = {}
    const result = await fei(somethingNotImage)
    expect(result).toBe(somethingNotImage)
  })
})

describe('options', () => {
  test('options.maxSize = 100', async () => {
    const {naturalWidth, naturalHeight} = await asImage(fixtures[0], {
      maxSize: 100,
    })
    expect(naturalWidth).toBeLessThanOrEqual(100)
    expect(naturalHeight).toBeLessThanOrEqual(100)
  })

  test('options.maxSize = [400, 300]', async () => {
    const {naturalWidth, naturalHeight} = await asImage(fixtures[0], {
      maxSize: [400, 300],
    })
    expect(naturalWidth).toBeLessThanOrEqual(400)
    expect(naturalHeight).toBeLessThanOrEqual(300)
  })
})

describe('should fix orientation', () => {
  fixtures.forEach(fixture => {
    const {name, orientation, type} = fixture

    if (!orientation) {
      return
    }

    let width = 600
    let height = 450
    const targetSize = [width, height].join('x')

    if (orientation >= 4 && orientation <= 7) {
      ;[width, height] = [height, width]
    }
    const size = [width, height].join('x')

    const descPrefix = `${name} size should`
    const descContent =
      targetSize === size
        ? `keep ${size}`
        : `rotate from ${size} to ${targetSize}`

    test(`${descPrefix} ${descContent}`, async () => {
      const {naturalWidth, naturalHeight} = await asImage(fixture)
      expect([naturalWidth, naturalHeight].join('x')).toBe(targetSize)
    })
  })

  test(`image[4] should not reach width limit`, async () => {
    const {naturalWidth, naturalHeight} = await asImage(fixtures[4], {
      maxSize: [600, 450],
    })
    expect(`${naturalWidth}x${naturalHeight}`).toBe('600x450')
  })
})
