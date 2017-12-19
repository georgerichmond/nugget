import React, { Component } from "react";
import logo from "../img/nugget-logo.png";
import glamorous from "glamorous";

import { Fragment } from "redux-little-router";
import Home from "../pages/Home";
import Build from "../pages/Build";
import Foo from "../Foo";
import ShowPost from "../pages/ShowPost";

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

class Layout extends Component {
  render() {
    return (
      <Fragment forRoute="/">
        <Container>
          <Menu borderless>
            <Logo />
          </Menu>
          <Main>
            <Fragment forRoute="/">
              <Home />
            </Fragment>
            <Fragment forRoute="/foo">
              <Foo />
            </Fragment>
            <Fragment forRoute="/build">
              <Build />
            </Fragment>
            <Fragment forRoute="/posts">
              <ShowPost />
            </Fragment>
          </Main>
        </Container>
      </Fragment>
    );
  }
}

export default Layout;
