import Build from "./Build";
import { connect } from "react-redux";
import { CHOOSE_OPTION } from "./actions";
import config from "./config";
import database from "../../database";
import { push } from "redux-little-router";

const handleOption = dispatch => payload => {
  dispatch({ type: CHOOSE_OPTION, payload });
};

const handleSave = (dispatch, getState) => () => {
  const { build } = getState();
  database
    .ref("posts")
    .push(build)
    .then(({ key }) => {
      dispatch({ type: "SAVE_SUCCESS", payload: { key } });
      dispatch(push('/posts/' + key));
    });
};

const mapStateToProps = ({ build }) => ({
  headline: build.headline,
  data: build.data,
  layout: build.layout,
  config
});

const mapDispatchToProps = dispatch => {
  return {
    handleOption: dispatch(handleOption),
    handleSave: dispatch(handleSave)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Build);
