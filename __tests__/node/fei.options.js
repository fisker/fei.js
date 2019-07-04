/**
 * @jest-environment jsdom-thirteen
 */

import fei from '../../src'
import fixtures from '../shared/fixtures'
import feiAsImage from '../shared/fei-as-image'
import feiAsBlob from '../shared/fei-as-blob'

const asImage = feiAsImage(fei)
const asBlob = feiAsBlob(fei)

describe('options.maxWidth', () => {
  test('options.maxWidth = 100', async () => {
    const {naturalWidth} = await asImage(fixtures[0], {
      maxWidth: 100,
    })
    expect(naturalWidth).toBeLessThanOrEqual(100)
  })

  test('options.maxWidth = Infinity', async () => {
    const {naturalWidth} = await asImage(fixtures[0], {
      maxWidth: Infinity,
    })
    expect(naturalWidth).toBeLessThanOrEqual(600)
  })
})

describe('options.maxHeight', () => {
  test('options.maxHeight = 100', async () => {
    const {naturalHeight} = await asImage(fixtures[0], {
      maxHeight: 100,
    })
    expect(naturalHeight).toBeLessThanOrEqual(100)
  })

  test('options.maxHeight = Infinity', async () => {
    const {naturalHeight} = await asImage(fixtures[0], {
      maxHeight: Infinity,
    })
    expect(naturalHeight).toBeLessThanOrEqual(450)
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
      quality: 1,
    })

    const {size: size2} = await asBlob(fixtures[0], {
      quality: 0.2,
    })

    expect(size2).toBeLessThan(size1)
  })
})

describe('options.always', () => {
  test('options.always', async () => {
    const {size: size1} = await asBlob(fixtures[0])
    const {size: size2} = await asBlob(fixtures[0], {
      always: true,
    })

    expect(size1).not.toEqual(size2)
  })
})
