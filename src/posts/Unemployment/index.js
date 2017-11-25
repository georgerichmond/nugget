import React from 'react'
import Post from "../../components/Post/Post";
import LineChart from "../../components/LineChart";

import data from './data.json'
import BarChart from "../../components/BarChart/index";


const lineChart = <LineChart data={data}/>
const barChart = <BarChart data={data}/>

const Unemployment = () => ([
    <Post title="Unemployment rate" chart={lineChart}/>,
  ]
)

export default Unemployment