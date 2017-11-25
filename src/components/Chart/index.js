import data from './output.json'

import {VictoryChart, VictoryAxis, VictoryLine, VictoryLabel, Line} from 'victory';

import * as React from "react";

import parse from 'date-fns/parse'
import addMonths from 'date-fns/add_months'
const parsed = data.map(point => ({x: new Date(point.x), y: point.y}))
const xTickValues = ['1960', '1970', '1980', '1990', '2000', '2010', '2020'].map(year => addMonths(parse(year), 6))
const yTickValues = [-3, -2, -1, 0, 1, 2, 3, 4, 5]

const axisStyle = {
  axis: {stroke: "lightgrey"},
  tickLabels: {fill: 'grey'},
}

const padding = {top: 10, bottom: 20, left: 30, right: 20};
const domainPadding = {x: 0, y: 10}

const V = () => <VictoryChart padding={padding} domainPadding={domainPadding}


>
  <VictoryAxis
    style={axisStyle}
    tickFormat={(x) => new Date(x).getFullYear()}
    fixLabelOverlap={true}
    tickLabelComponent={<VictoryLabel dy={100}/>}

    tickComponent={<Line type={"tick"} style={{stroke: 'lightgrey'}} y1={280} y2={285}/>}


  />
  <VictoryAxis tickValues={yTickValues} dependentAxis
               tickFormat={(y) => y + '%'}
               style={axisStyle}
               gridComponent={<Line style={{stroke: '#F0F0F0'}}/>}

  />
  <VictoryLine data={parsed}
               interpolation="natural"
               style={{
                 data: {
                   stroke: "blue",
                   strokeWidth: '1px'
                 }
               }}

  />
</VictoryChart>

export default V