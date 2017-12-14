import React from "react";
import HotTable from "react-handsontable";

const Spreadsheet = ({ data, handleAfterChange }) => {
  const tableProps = {
    data,
    width: 500,
    height: 500,
    rowHeaders: true,
    colHeaders: true,
    minRows: 12,
    minCols: 9,
    onAfterChange: handleAfterChange
  };

  return <HotTable {...tableProps} />;
};

export default Spreadsheet;
