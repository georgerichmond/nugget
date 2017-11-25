import React from 'react'
import Post from "../Post";
import './styles.css'
import Chart from '../Chart'
import LineChart from '../LineChart'
import BarChart from "../BarChart/index";
import Unemployment from "../../posts/Unemployment";
import Inequality from "../../posts/Inequality";

const posts = [{}]

const lineChart = <LineChart/>
const barChart = <BarChart/>

const PostList = () =>
  <div className="postList">
    <Post chart={lineChart}></Post>
    <Post chart={barChart}></Post>
    <Unemployment/>
    <Inequality/>
  </div>

export default PostList