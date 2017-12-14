import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, dataToJS } from "react-redux-firebase";

const Foo = ({ foo }) => {
  return <div>{foo}</div>;
};

const wrappedFoo = firebaseConnect(["/foo"])(Foo);

export default connect(({ firebase }) => ({
  foo: dataToJS(firebase, "foo")
}))(wrappedFoo);
