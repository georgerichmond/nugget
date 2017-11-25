import React from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import {
  LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, FlexibleXYPlot, AreaSeries,
  GradientDefs, Hint, VerticalBarSeries, XYPlot, VerticalRectSeries, HorizontalRectSeries, HorizontalBarSeries
} from 'react-vis';
import {YAxis} from "react-vis/es/index";

import output from './output.json'
const data = output.map((point, index) => ({x: index, y: point.y}))


const BarChart = ({}) =>
  <FlexibleXYPlot>
    <VerticalGridLines tickTotal={5}/>
    <HorizontalGridLines/>
    <VerticalBarSeries data={data}/>
    <XAxis tickTotal={5} tickFormat={v => output[v].x}/>
    <YAxis/>
  </FlexibleXYPlot>


export default BarChart
