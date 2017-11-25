import React from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import {
  LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, FlexibleXYPlot, AreaSeries,
  GradientDefs, Hint
} from 'react-vis';
import {YAxis} from "react-vis/es/index";
import output2 from './output2.json'
const data = output2.map((point, index) => ({x: index, y: point.y}))






const LineChart = ({}) =>
  <FlexibleXYPlot>
    <VerticalGridLines tickTotal={7}/>
    <HorizontalGridLines />
    <LineSeries data={data}/>
    <XAxis tickTotal={7} tickFormat={v => output2[v].x}/>
    <YAxis/>
  </FlexibleXYPlot>


export default LineChart
