import React from 'react'
import {Card, Image} from "semantic-ui-react";
import Chart from "../Chart/index";
import Comments from "../Comments";
import ed from '../../img/personas/ed.jpg'


const Post = ({chart: {data}}) => (
  <Card fluid>
    <Card.Content>
      <Card.Meta
        style={{
          display: "grid",
          gridGap: "0.5rem",
          gridTemplateRows: "auto",
          gridTemplateColumns: "auto auto 1fr auto",
          marginBottom: '1rem'
        }}
      >
        <Image avatar src={ed} />
        <span>edconway</span>
        <span />
        <span>15 Feb 2017</span>
      </Card.Meta>
      <Card.Header>
        Carrots are the most important vegetable of them all
      </Card.Header>
      <Card.Description>
        Change in poverty over the years.
      </Card.Description>

      <Chart data={data} />

      <Comments />
    </Card.Content>
  </Card>
);

export default Post