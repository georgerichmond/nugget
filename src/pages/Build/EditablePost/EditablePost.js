import React from "react";
import Post from "../../../components/Post";

const EditablePost = ({
  chart,
  headline,
  handleHeaderClick,
  editing,
  handleChange,
  handleInput
}) => (
  <Post
    headline={headline}
    chart={chart}
    handleHeaderClick={handleHeaderClick}
    editable={true}
    editing={editing}
    handleChange={handleChange}
    handleInput={handleInput}
  />
);

export default EditablePost;
