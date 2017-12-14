import Build from "./Build";
import { connect } from "react-redux";
import { CHOOSE_OPTION } from "./actions";
import config from "./config";

const handleOption = dispatch => payload => {
  dispatch({ type: CHOOSE_OPTION, payload });
};

const handleSave = dispatch => () => {
  dispatch({ type: "SAVE" });
};

const mapStateToProps = ({ build }) => ({
  data: build.data,
  options: build.options,
  config
});

const mapDispatchToProps = dispatch => {
  return {
    handleOption: dispatch(handleOption),
    handleSave: dispatch(handleSave)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Build);
