import {readFileSync} from 'fs'
import getOrientation from '../../src/orientation'
import images from '../shared/fixtures'

describe('jpeg image orientation', () => {
  for (const image of images) {
    const {name, file, orientation} = image

    test(`${name} orientation should be ${orientation}`, () => {
      const {buffer} = readFileSync(file)
      const result = getOrientation(buffer)
      expect(result).toBe(orientation)
    })
  }
})
