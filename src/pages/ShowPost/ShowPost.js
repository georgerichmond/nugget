import React from 'react'
import Post from "../../components/Post/Post";

class ShowPost extends React.Component{

  componentDidMount() {
    this.props.onGetPost(this.props.router.params.id)
  }

  render() {
    if(!this.props.post) return null;
    return <Post headline={this.props.post.headline} chart={{...this.props.post}}/>
  }
}

export default ShowPost