import fei from '../../src'
import fixtures from '../shared/fixtures'

function loadImage(src) {
  return new Promise(resolve => {
    const image = new window.Image()
    image.addEventListener('load', () => resolve(image))
    image.src = src
  })
}

const table = window.document.createElement('table')
window.document.body.appendChild(table)
table.innerHTML =
  '<thead><tr><th>orignal</th><th>processed</th><th>time</th></tr></thead>'
const result = window.document.createElement('tbody')
table.appendChild(result)

for (const fixture of fixtures) {
  ;(async () => {
    const {name, file} = fixture

    const container = window.document.createElement('tr')
    result.appendChild(container)
    const orignalCell = window.document.createElement('td')
    container.appendChild(orignalCell)
    const processedCell = window.document.createElement('td')
    container.appendChild(processedCell)
    const timeCell = window.document.createElement('td')
    container.appendChild(timeCell)

    const image = await loadImage(file)
    orignalCell.appendChild(image)

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
