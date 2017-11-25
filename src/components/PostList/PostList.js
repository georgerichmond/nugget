import React from 'react'
import Post from "../Post";
import './styles.css'
import Chart from '../Chart'
import LineChart from '../LineChart'
import BarChart from "../BarChart/index";

const posts = [{}]

const lineChart = <LineChart/>
const barChart = <BarChart/>

const PostList = () =>
  <div className="postList">
    <Post chart={lineChart}></Post>
    <Post chart={barChart}></Post>
  </div>

export default PostList