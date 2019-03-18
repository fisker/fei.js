import {join} from 'path'

const fixtureDir = join(__dirname, './fixture/')
const images = [
  ...Array.from({length: 8}, (_, index) => ({
    name: `image_${index + 1}.jpg`,
    orientation: index + 1,
  })),
  {
    name: `image_no_orientation.jpg`,
    orientation: null,
  },
  {
    name: `image_unknown_orientation.jpg`,
    orientation: null,
  },
].map(({name, orientation}) => ({
  name,
  orientation,
  file: join(fixtureDir, name),
}))

export default images
