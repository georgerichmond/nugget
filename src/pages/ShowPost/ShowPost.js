import React from "react";
import Post from "../../components/Post/Post";

class ShowPost extends React.Component {
  componentDidMount() {
    this.props.onGetPost(this.props.router.params.id);
  }

  render() {
    if (!this.props.post) return null;
    return (
      <div style={{ width: "50vw", height: "50vh" }}>
        <Post
          headline={this.props.post.headline}
          chart={{ ...this.props.post.chart }}
        />
      </div>
    );
  }
}

export default ShowPost;
