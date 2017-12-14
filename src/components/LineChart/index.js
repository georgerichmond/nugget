import React from "react";
import * as d3 from "d3-scale-chromatic";
import "../../../node_modules/react-vis/dist/style.css";
import {
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  FlexibleXYPlot,
  AreaSeries,
  GradientDefs,
  Hint
} from "react-vis";
import { YAxis } from "react-vis/es/index";

const LineChart = ({ series }) => {
  const colorRange = d3.schemeAccent;

  const plots = series.map((data, index) => {
    const mapped = data.map(({ x, y }, index) => ({
      x: index,
      y: parseFloat(y)
    }));

    return <LineSeries key={index} data={mapped} nullAccessor={d => !isNaN(d.y)} />;
  });

  const plotProps = { margin: { left: 40, right: 20, top: 20, bottom: 30 } };

  return (
    <FlexibleXYPlot {...plotProps}>
      <VerticalGridLines tickTotal={7} />
      <HorizontalGridLines />
      {plots}
      <XAxis tickTotal={7} />
      <YAxis />
    </FlexibleXYPlot>
  );
};

export default LineChart;
