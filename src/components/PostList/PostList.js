import React from "react";
import Post from "../Post";
import "./styles.css";
import Chart from "../Chart";
import LineChart from "../LineChart";
import BarChart from "../BarChart/index";
import Unemployment from "../../posts/Unemployment";
import Inequality from "../../posts/Inequality";
import Employment from "../../posts/Employment";
import Cpih from "../../posts/Cpih";
import Poverty from "../../posts/Poverty";

const posts = [{}];

const lineChart = <LineChart />;
const barChart = <BarChart />;

const PostList = () => (
  <div className="postList">
    <Poverty />
    <Unemployment />
    <Inequality />
    <Employment />
    <Cpih />
  </div>
);

export default PostList;
