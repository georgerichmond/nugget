export const ySeriesNames = data => data[0].slice(1);

export const ySeries = data => data.slice(1).map(row => row.slice(1));

export const xSeriesNames = data => data.slice(1).map(row => row[0]);

export const yColumn = (data, column) => ySeries(data).map(row => row[column]);

export const xObjects = data => xSeriesNames(data).map(x => ({ x }));

export const yObjects = (data, column) =>
  yColumn(data, column).map(y => ({ y }));

export const rowsToObjects = (data, column) =>
  xObjects(data).map((xObject, rowIndex) => ({
    ...xObject,
    ...yObjects(data, column)[rowIndex]
  }));

export const tableToSeries = data =>
  ySeriesNames(data).map((name, column) => rowsToObjects(data, column));

export default tableToSeries;
