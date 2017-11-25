import React from 'react'
import Post from "../../components/Post/Post";

import data from './data.json'
import BarChart from "../../components/BarChart/index";
import CategoryChart from "../../components/CategoryChart/index";


const barChart = <BarChart data={data} category={true}/>
const categoryChart = <CategoryChart data={data} category={true}/>

const Unemployment = () => ([
    <Post title="Inequality" chart={barChart} />,
    <Post title="Inequality" chart={categoryChart} />
  ]
)

export default Unemployment