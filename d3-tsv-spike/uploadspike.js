const parse = require('csv-parse');
const fs = require('fs')

const d3 = require('d3')

const _slice = require('lodash/slice')
const _ = require('lodash')


const transposed = d3.transpose(parsed)

fs.writeFileSync('foo.json', JSON.stringify(transposed, null, 2))

const columnNames = transposed[0].map

const xPoints = _.slice(transposed, 1).map(row => row[0])

const dataPoints = _.slice(transposed, 1).map(cols => _.slice(cols, 1))

console.log(xPoints)
