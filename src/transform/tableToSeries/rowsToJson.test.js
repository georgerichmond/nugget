import {
  rowsToObjects,
  tableToSeries,
  xObjects,
  xSeriesNames,
  yColumn,
  yObjects,
  ySeries,
  ySeriesNames
} from "./index";

import simple from "./simple.json";

test("ySeriesNames", () => {
  expect(ySeriesNames(simple)).toEqual(["Up", "Down"]);
});

test("xSeriesNames", () => {
  expect(xSeriesNames(simple)).toEqual([
    "1971 JAN-MAR",
    "1971 FEB-APR",
    "1971 MAR-MAY",
    "1971 APR-JUN",
    "1971 MAY-JUL"
  ]);
});

test("ySeries", () => {
  expect(ySeries(simple)).toEqual([
    ["3.8", ""],
    ["3.9", "8.1"],
    ["4.0", "7.1"],
    ["4.1", ""],
    ["4.3", "9.5"]
  ]);
});

test("yColumn", () => {
  expect(yColumn(simple, 0)).toEqual(["3.8", "3.9", "4.0", "4.1", "4.3"]);
  expect(yColumn(simple, 1)).toEqual(["", "8.1", "7.1", "", "9.5"]);
});

test("xObjects", () => {
  expect(xObjects(simple)).toEqual([
    { x: "1971 JAN-MAR" },
    { x: "1971 FEB-APR" },
    { x: "1971 MAR-MAY" },
    { x: "1971 APR-JUN" },
    { x: "1971 MAY-JUL" }
  ]);
});

test("yObjects", () => {
  expect(yObjects(simple, 1)).toEqual([
    { y: "" },
    { y: "8.1" },
    { y: "7.1" },
    { y: "" },
    { y: "9.5" }
  ]);
});

test("rowsToObjects", () => {
  expect(rowsToObjects(simple, 0)).toEqual([
    { x: "1971 JAN-MAR", y: "3.8" },
    { x: "1971 FEB-APR", y: "3.9" },
    { x: "1971 MAR-MAY", y: "4.0" },
    { x: "1971 APR-JUN", y: "4.1" },
    { x: "1971 MAY-JUL", y: "4.3" }
  ]);

  expect(rowsToObjects(simple, 1)).toEqual([
    { x: "1971 JAN-MAR", y: "" },
    { x: "1971 FEB-APR", y: "8.1" },
    { x: "1971 MAR-MAY", y: "7.1" },
    { x: "1971 APR-JUN", y: "" },
    { x: "1971 MAY-JUL", y: "9.5" }
  ]);
});

test("tableToSeries", () => {
  expect(tableToSeries(simple)).toEqual([
    [
      { x: "1971 JAN-MAR", y: "3.8" },
      { x: "1971 FEB-APR", y: "3.9" },
      { x: "1971 MAR-MAY", y: "4.0" },
      { x: "1971 APR-JUN", y: "4.1" },
      { x: "1971 MAY-JUL", y: "4.3" }
    ],
    [
      { x: "1971 JAN-MAR", y: "" },
      { x: "1971 FEB-APR", y: "8.1" },
      { x: "1971 MAR-MAY", y: "7.1" },
      { x: "1971 APR-JUN", y: "" },
      { x: "1971 MAY-JUL", y: "9.5" }
    ]
  ]);
});
