import React from 'react'
import Post from "../Post";
import './styles.css'

const posts = [{}]

const PostList = () =>
  <div className="postList">
    {posts.map((p, index) => <Post key={index}></Post>)}
  </div>

export default PostList