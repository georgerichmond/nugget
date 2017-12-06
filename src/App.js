import React, {Component} from 'react';
import './App.css';
import PostList from "./components/PostList/PostList";
import logo from './img/nugget-logo.png'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Upload from "./pages/Upload";
import XLSXPage from "./pages/XLSXPage/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="" className="App-logo"/>
          </header>
          <Route path="/upload" component={Upload}/>
          <main>
            <Route exact path="/" component={PostList}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
