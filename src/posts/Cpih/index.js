import React from 'react'
import Post from "../../components/Post/Post";
import LineChart from "../../components/LineChart";

import data from './data.json'

const lineChart = <LineChart data={data}/>

const Cpih = () => ([
    <Post title="CPIH" chart={lineChart}/>,
  ]
)

export default Cpih