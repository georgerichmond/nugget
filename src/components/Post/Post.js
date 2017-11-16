import React from 'react'
import './styles.css'
import avatar from '../../img/personas/ed.jpeg'
import Chart from '../Chart'

const Post = () => <article className="post">
  <div className="postHeader">
    <div className="avatar">
      <img src={avatar} alt="Ed"/>
    </div>
    <div className="postHeaderText">
      <div>edconway</div>
      <h1>Gross Domestic Product: Quarter on Quarter growth: CVM SA %</h1>
    </div>
  </div>
  <div className="chartContainer">
    <Chart/>
  </div>
</article>

export default Post