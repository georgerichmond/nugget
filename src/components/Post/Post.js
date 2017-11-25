import React from 'react'
import './styles.css'
import avatar from '../../img/personas/ed.jpeg'

const Post = ({title = "Gross Domestic Product: Quarter on Quarter growth: CVM SA %", chart}) => <article className="post">
  <div className="postHeader">
    <div className="avatar">
      <img src={avatar} alt="Ed"/>
    </div>
    <div className="postHeaderText">
      <div>edconway</div>
      <h1>{title}</h1>
    </div>
  </div>
  <div className="chartContainer">
    {chart}
  </div>
</article>

export default Post