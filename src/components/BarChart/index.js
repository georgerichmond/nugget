import React from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import {
  LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, FlexibleXYPlot, AreaSeries,
  GradientDefs, Hint, VerticalBarSeries, XYPlot, VerticalRectSeries, HorizontalRectSeries, HorizontalBarSeries
} from 'react-vis';
import {YAxis} from "react-vis/es/index";

import raw from './output.json'

const BarChart = ({data = raw}) => {

  const mapped = data.map((point, index) => ({x: index, y: point.y}))

  return <FlexibleXYPlot>
    <VerticalGridLines tickTotal={5}/>
    <HorizontalGridLines/>
    <VerticalBarSeries data={mapped}/>
    <XAxis tickTotal={5} tickFormat={v => data[v].x}/>
    <YAxis/>
  </FlexibleXYPlot>;
}


export default BarChart
