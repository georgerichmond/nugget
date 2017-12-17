import React from "react";

import tableToSeries from "../../transform/tableToSeries";
import LineChart from "../LineChart";

const Chart = ({ data, layout }) => {
  const series = data ? tableToSeries(data) : [];
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <LineChart series={series} layout={layout} />
    </div>
  );
};

export default Chart;
