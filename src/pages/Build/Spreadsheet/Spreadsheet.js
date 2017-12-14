import React from "react";
import HotTable from "react-handsontable";
import * as _ from "lodash";

const Spreadsheet = ({ data, handleAfterChange }) => {
  const tableProps = {
    data: _.cloneDeep(data),
    width: 500,
    height: 500,
    rowHeaders: true,
    colHeaders: true,
    minRows: 12,
    minCols: 6,
    onAfterChange: handleAfterChange
  };

  return <HotTable {...tableProps} />;
};

export default Spreadsheet;
