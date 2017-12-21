import React from "react";
import Post from "../../components/Post/Post";
import LineChart from "../../components/LineChart";

import data from "./data.json";

const headline = "foo"
const layout = {title: 'ning'}

const Cpih = () => <Post
  headline={headline}
  chart={{ data, layout }}
/>;

export default Cpih;
