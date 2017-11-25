import React from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import {
  LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, FlexibleXYPlot, AreaSeries,
  GradientDefs, Hint, VerticalBarSeries, XYPlot, VerticalRectSeries, HorizontalRectSeries, HorizontalBarSeries
} from 'react-vis';
import {YAxis} from "react-vis/es/index";

import raw from './output.json'

const BarChart = ({data = raw, category = false}) => {

  const mapped = category ? data : data.map((point, index) => ({x: index, y: point.y}))
  const tickFormatter = v => data[v].x;

  const plotProps = category ? {xType: 'ordinal'} : {}

  return (
    <FlexibleXYPlot {...plotProps}>
      {category ? <VerticalGridLines/> : <VerticalGridLines tickTotal={5}/>}
      <HorizontalGridLines/>
      <VerticalBarSeries data={mapped}/>
      {category ? <XAxis/> : <XAxis tickTotal={5} tickFormat={tickFormatter}/>}
      <YAxis/>
    </FlexibleXYPlot>
  )
}


export default BarChart
