import React, { Component } from 'react';
import './App.css';
import PostList from "./components/PostList/PostList";
import logo from './img/nugget-logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="" className="App-logo"/>
        </header>
        <main>
          <PostList></PostList>
        </main>
      </div>
    );
  }
}

export default App;
