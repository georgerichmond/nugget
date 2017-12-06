import React from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import {
  LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, FlexibleXYPlot, AreaSeries,
  GradientDefs, Hint
} from 'react-vis';
import {YAxis} from "react-vis/es/index";



import raw from './output2.json'


const LineChart = ({data = raw}) => {

  const mapped = data.map(({x, y}, index) => ({x: index, y}))
  const mapped2 = data.map(({x, y}, index) => ({x: index, y: y - 1}))
  const mapped3 = data.map(({x, y}, index) => ({x: index, y: y - 2}))


  return <FlexibleXYPlot>
    <VerticalGridLines tickTotal={7}/>
    <HorizontalGridLines/>
    <LineSeries data={mapped}/>
    <LineSeries data={mapped2}/>
    <LineSeries data={mapped3}/>
    <XAxis tickTotal={7} tickFormat={v => data[v].x}/>
    <YAxis/>
  </FlexibleXYPlot>;
}


export default LineChart
