const parse = require('csv-parse');
const fs = require('fs')


const input = fs.readFileSync('./raw2.csv')
parse(input, {auto_parse: true, columns: true, quote: null}, function(err, output){
  console.log(output)
});