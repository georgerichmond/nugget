import React from "react";
import "./style.css";
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
  Hint,
  VerticalBarSeries,
  DiscreteColorLegend
} from "react-vis";
import { YAxis } from "react-vis/es/index";

const LineChart = ({ series, options }) => {
  const SeriesComponent =
    options.chartType === "bar" ? VerticalBarSeries : LineSeries;

  const plots = series.map((data, index) => {
    const mapped = data.map(({ x, y }, index) => ({
      x: index,
      y: parseFloat(y)
    }));

    return (
      <SeriesComponent
        key={index}
        data={mapped}
        nullAccessor={d => !isNaN(d.y)}
      />
    );
  });

  const plotProps = { margin: { left: 40, right: 20, top: 20, bottom: 30 } };

  return (
    <FlexibleXYPlot {...plotProps}>
      <DiscreteColorLegend
        items={["apples", "carrots"]}
        orientation="horizontal"
      />
      <VerticalGridLines tickTotal={7} />
      <HorizontalGridLines />
      {plots}
      <XAxis tickTotal={7} />
      <YAxis />
    </FlexibleXYPlot>
  );
};

export default LineChart;
