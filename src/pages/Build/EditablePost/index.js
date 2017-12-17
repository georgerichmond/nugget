import EditablePost from "./EditablePost";
import { connect } from "react-redux";

const mapStateToProps = ({ build }) => ({
  data: build.data,
  layout: build.layout
});

const handleInput = event => {
  const { target: { innerText, dataset: { name } } } = event;
  return { type: "INPUT", payload: { [name]: innerText } };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: payload => dispatch({ type: "EDIT_CHART", payload }),
    handleInput: event => dispatch(handleInput(event)),
    handleHeaderClick: () => dispatch({ type: "EDIT_HEADER" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditablePost);
