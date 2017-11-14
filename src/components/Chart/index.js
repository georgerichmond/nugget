import data from './output.json'

import {VictoryChart, VictoryAxis, VictoryLine, VictoryLabel} from 'victory';

import * as React from "react";

import parse from 'date-fns/parse'

const parsed = data.map(point => ({x: new Date(point.x), y: point.y}))

const xTickValues = ['1960', '1970', '1980', '1990', '2000', '2010', '2020'].map(year => parse(year))
const yTickValues = [-4, -2, 0, 2, 4]

const V = () => <VictoryChart

>
  <VictoryAxis
    tickFormat={(x) => new Date(x).getFullYear()}
    tickValues={xTickValues}
    tickLabelComponent={<VictoryLabel dy={80}/>}
  />
  <VictoryAxis tickValues={yTickValues} dependentAxis
               tickFormat={(y) => y + '%'}

  />
  <VictoryLine data={parsed}
               style={{
                 data: {
                   stroke: "blue",
                   strokeWidth: '1px'
                 }
               }}

  />
</VictoryChart>

export default V