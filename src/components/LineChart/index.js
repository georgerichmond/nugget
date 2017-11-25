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


  return <FlexibleXYPlot>
    <VerticalGridLines tickTotal={7}/>
    <HorizontalGridLines/>
    <LineSeries data={mapped}/>
    <XAxis tickTotal={7} tickFormat={v => data[v].x}/>
    <YAxis/>
  </FlexibleXYPlot>;
}


export default LineChart
