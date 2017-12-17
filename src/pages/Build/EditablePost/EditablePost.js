import React from "react";
import Post from "../../../components/Post";

const EditablePost = ({
  data,
  layout,
  handleHeaderClick,
  editing,
  handleChange,
  handleInput
}) => (
  <Post
    chart={{ data, layout }}
    handleHeaderClick={handleHeaderClick}
    editable={true}
    editing={editing}
    handleChange={handleChange}
    handleInput={handleInput}
  />
);

export default EditablePost;
