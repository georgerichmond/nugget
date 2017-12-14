import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

import george from "../../img/personas/george.jpg";

const CommentExampleComment = () => (
  <Comment.Group size="small">
    <Comment>
      <Comment.Avatar src={george} />
      <Comment.Content>
        <Comment.Author as="a">George</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar src={george} />
      <Comment.Content>
        <Comment.Author as="a">George</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>This is very interesting.</Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default CommentExampleComment;
