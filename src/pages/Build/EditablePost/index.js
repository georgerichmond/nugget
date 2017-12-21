import EditablePost from "./EditablePost";
import { connect } from "react-redux";

const mapStateToProps = ({ build }) => ({
  headline: build.headline,
  chart: build.chart
});

const handleInput = event => {
  const { target: { innerText, dataset: { name } } } = event;
  return { type: "INPUT", payload: { [name]: innerText } };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: payload => dispatch({ type: "EDIT_CHART", payload }),
    handleInput: event => dispatch(handleInput(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditablePost);
