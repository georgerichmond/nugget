const csv = require('csvtojson')

const fs = require('fs')

const csvStr = fs.readFileSync('./raw.csv')

csv()
  .fromString(csvStr)
  .on('end_parsed', (json) => {
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), () => console.log('written ok'))
  })

