import {join} from 'path'

const fixtureDirectory = join(__dirname, '../fixture/')
const fixtures = [
  ...Array.from({length: 8}, (_, index) => ({
    name: `image_${index + 1}.jpg`,
    orientation: index + 1,
    type: 'image/jpeg',
  })),
  {
    name: `image_no_orientation.jpg`,
    orientation: null,
    type: 'image/jpeg',
  },
  {
    name: `image_unknown_orientation.jpg`,
    orientation: null,
    type: 'image/jpeg',
  },
  {
    name: `image_png.png`,
    orientation: null,
    type: 'image/png',
  },
].map((fixture) => ({
  ...fixture,
  file: join(fixtureDirectory, fixture.name),
}))

export default fixtures
