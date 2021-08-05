import fei from '../../src/index.js'
import fixtures from '../shared/fixtures.js'

function loadImage(source) {
  return new Promise((resolve) => {
    const image = new window.Image()
    image.addEventListener('load', () => resolve(image))
    image.src = source
  })
}

const table = window.document.createElement('table')
window.document.body.appendChild(table)
table.innerHTML =
  '<thead><tr><th>original</th><th>processed</th><th>time</th></tr></thead>.js'
const result = window.document.createElement('tbody')
table.appendChild(result)

for (const fixture of fixtures) {
  ;(async () => {
    const {name, file} = fixture

    const container = window.document.createElement('tr')
    result.appendChild(container)
    const originalCell = window.document.createElement('td')
    container.appendChild(originalCell)
    const processedCell = window.document.createElement('td')
    container.appendChild(processedCell)
    const timeCell = window.document.createElement('td')
    container.appendChild(timeCell)

    const image = await loadImage(file)
    originalCell.appendChild(image)

    const response = await window.fetch(file)
    const blob = await response.blob()
    const startTime = window.performance.now()
    const processed = await fei(blob, {
      maxSize: 200,
      fixOrientation: true,
    })
    timeCell.textContent = `${(window.performance.now() - startTime).toFixed(
      2
    )}ms`
    const url = window.URL.createObjectURL(processed)
    const newImage = await loadImage(url)
    processedCell.appendChild(newImage)
  })()
}
