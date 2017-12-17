import React from "react";
import { Card, Image } from "semantic-ui-react";
import Chart from "../Chart/index";
import Comments from "../Comments";
import ed from "../../img/personas/ed.jpg";

const Post = ({
  chart: { data, layout },
  handleHeaderClick,
  editing,
  content,
  handleInput,
  editable
}) => (
  <Card fluid>
    <Card.Content>
      <Card.Meta
        style={{
          display: "grid",
          gridGap: "0.5rem",
          gridTemplateRows: "auto",
          gridTemplateColumns: "auto auto 1fr auto",
          marginBottom: "1rem"
        }}
      >
        <Image avatar src={ed} />
        <span>edconway</span>
        <span />
        <span>15 Feb 2017</span>
      </Card.Meta>
      <Card.Header
        data-name="headline"
        onClick={handleHeaderClick}
        contentEditable={editable}
        suppressContentEditableWarning={editable}
        onInput={handleInput}
      >
        headline
      </Card.Header>
      <Card.Description
        data-name="chart.title"
        contentEditable={editable}
        suppressContentEditableWarning={editable}
        onInput={handleInput}
      >
        {layout.title}
      </Card.Description>
      <Chart data={data} layout={layout} />

      <Comments />
    </Card.Content>
  </Card>
);

export default Post;
