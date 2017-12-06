import React from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import {
  XAxis, YAxis, HorizontalBarSeries, VerticalBarSeries, FlexibleWidthXYPlot
} from 'react-vis';
import _ from 'lodash'

const CategoryChart = ({data}) => {

  const plotProps = {yType: 'ordinal', height: 500}

  const mapped = data.map(({x, y}) => ({x: y, y: x}))
  const sorted = _.sortBy(mapped, 'x')

  return (
    <FlexibleWidthXYPlot {...plotProps}>
      <XAxis/>
      <HorizontalBarSeries data={sorted}/>
      <YAxis/>
    </FlexibleWidthXYPlot>
  )
}


export default CategoryChart
