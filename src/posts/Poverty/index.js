import React from "react";
import Post from "../../components/Post/Post";

import data from "./data.json";
import LineChart from "../../components/LineChart";

const lineChart = <LineChart data={data} />;

const Poverty = () => [<Post title="Poverty" chart={lineChart} />];

export default Poverty;
