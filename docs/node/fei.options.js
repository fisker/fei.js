/**
 * @jest-environment jsdom-thirteen
 */

import fei from '../../src'
import fixtures from '../shared/fixtures'
import feiAsImage from '../shared/fei-as-image'
import feiAsBlob from '../shared/fei-as-blob'

const asImage = feiAsImage(fei)
const asBlob = feiAsBlob(fei)

describe('options.maxSize', () => {
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

describe('options.fixOrientation', () => {
  const fixture = fixtures[4]
  test('options.fixOrientation default should be true', async () => {
    const {naturalWidth, naturalHeight} = await asImage(fixture)
    expect(naturalWidth).toBe(600)
    expect(naturalHeight).toBe(450)
  })

  test('options.fixOrientation = true', async () => {
    const {naturalWidth, naturalHeight} = await asImage(fixtures[4], {
      fixOrientation: true,
    })
    expect(naturalWidth).toBe(600)
    expect(naturalHeight).toBe(450)
  })

  test('options.fixOrientation = false', async () => {
    const {naturalWidth, naturalHeight} = await asImage(fixtures[4], {
      fixOrientation: false,
    })
    expect(naturalWidth).toBe(450)
    expect(naturalHeight).toBe(600)
  })
})

describe('options.quality', () => {
  test('options.quality', async () => {
    const {size: size1} = await asBlob(fixtures[0], {
      maxSize: 300,
      quality: 0.95,
    })

    const {size: size2} = await asBlob(fixtures[0], {
      maxSize: 300,
      quality: 0.5,
    })

    expect(size2).toBeLessThan(size1)
  })
})
