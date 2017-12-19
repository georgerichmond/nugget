import React from "react";
import Post from "../../../components/Post";

const EditablePost = ({
  headline,
  data,
  layout,
  handleHeaderClick,
  editing,
  handleChange,
  handleInput
}) => (
  <Post
    headline={headline}
    chart={{ data, layout }}
    handleHeaderClick={handleHeaderClick}
    editable={true}
    editing={editing}
    handleChange={handleChange}
    handleInput={handleInput}
  />
);

export default EditablePost;
