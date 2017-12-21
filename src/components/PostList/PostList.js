import React from "react";
import "./styles.css";
import database from "../../database";
import * as _ from "lodash";
import Post from "../Post";

class PostList extends React.Component {
  state = { posts: {} };

  componentDidMount() {
    const postsRef = database.ref("posts");
    postsRef.on("value", snapshot => {
      const posts = { ...this.state.posts, ...snapshot.val() };
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="postList">
        {
          Object.values(this.state.posts).map(post => <Post {...post}/>)
        }
      </div>
    );
  }
}

export default PostList;
