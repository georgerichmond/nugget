import React, { Component } from "react";
import PostList from "./components/PostList/PostList";
import logo from "./img/nugget-logo.png";
import glamorous from "glamorous";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Upload from "./pages/Upload";
import { Image } from "semantic-ui-react";

const Container = glamorous.div({
  height: "100vh",
  width: "100vw",
  maxWidth: "1200px",
  margin: "auto"
});

const Menu = glamorous.header({
  padding: "0.5rem",
  height: "4rem",
  display: "flex"
});

const Logo = () => (
  <div>
    <img style={{ height: "100%" }} src={logo} alt="Nugget logo" />
  </div>
);

const Main = glamorous.div({});

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Menu borderless>
            <Logo />
          </Menu>
          <Main>
            <Route exact path="/" component={PostList} />
            <Route path="/upload" component={Upload} />
          </Main>
        </Container>
      </Router>
    );
  }
}

export default App;
