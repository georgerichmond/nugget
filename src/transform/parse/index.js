const fs = require("fs");
const d3 = require("d3");
const _ = require("lodash");

const input = fs.readFileSync("./foo.csv").toString();
const parsed = d3.csvParseRows(input);
const columns = parsed[0].map(fullText => ({
  label: fullText,
  key: _.camelCase(fullText)
}));
const dataColumns = _.slice(columns, 1);
const rows = _.slice(parsed, 1);
const xPoints = rows.map(row => row[0]);
const yData = rows.map(row => _.slice(row, 1));

const dataSeries = dataColumns.map((series, seriesIndex) => ({
  [series.key]: yData.map((row, rowIndex) => ({
    x: xPoints[rowIndex],
    y: row[seriesIndex]
  }))
}));

console.log(JSON.stringify(dataSeries, null, 2));
