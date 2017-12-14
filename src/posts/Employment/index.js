import React from "react";
import Post from "../../components/Post/Post";

import data from "./data.json";
import BarChart from "../../components/BarChart/index";
import CategoryChart from "../../components/CategoryChart/index";

const barChart = <BarChart data={data} category={true} />;
const categoryChart = <CategoryChart data={data} category={true} />;

const Employment = () => [
  <Post title="Employment (vertical bars)" chart={barChart} />,
  <Post title="Employment (horizontal bars, sorted)" chart={categoryChart} />
];

export default Employment;
