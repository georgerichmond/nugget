import React from "react";

import tableToSeries from "../../transform/tableToSeries";
import LineChart from "../LineChart";

const Chart = ({ data }) => {
  const series = data ? tableToSeries(data) : [];
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <LineChart series={series} />
    </div>
  );
};

export default Chart;
