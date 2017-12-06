import React from 'react'
import Post from "../../components/Post/Post";

import data from './data.json'
import MultiLineChart from '../../components/MultiLineChart';


const lineChart = <MultiLineChart data={data}/>

const Poverty = () => ([
    <Post title="Poverty" chart={lineChart}/>,
  ]
)

export default Poverty