const fs = require('fs')

const XLSX = require('XLSX')

const addQuarters = require('date-fns/add_quarters');

const format = require('date-fns/format')


const d = XLSX.read('./data/IHYQ-071117.csv', {type: 'file'})

const j = XLSX.utils.sheet_to_json(d.Sheets.Sheet1)

const year = point => format(point.x.split(' ')[0])
const quarter = point => parseInt(point.x.split(' ')[1][1])

const k = j.map(point => ({
  x:  addQuarters(year(point), quarter(point) - 1),
  y: parseFloat(point.y)
}))

fs.writeFileSync('output.json', JSON.stringify(k, null, 2))

