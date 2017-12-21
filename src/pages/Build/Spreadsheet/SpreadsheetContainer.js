import Spreadsheet from "./Spreadsheet";
import { connect } from "react-redux";
import { PASTE_DATA, EDIT_DATA } from "../actions";

const handleAfterChange = dispatch => (changes, type) => {
  if (type === "edit") {
    dispatch({
      type: EDIT_DATA,
      payload: { changes }
    });
  }

  if (type === "CopyPaste.paste") {
    dispatch({
      type: PASTE_DATA,
      payload: { changes }
    });
  }
};

const mapStateToProps = ({ build }) => ({ data: build.chart.data });

const mapDispatchToProps = dispatch => {
  return {
    handleAfterChange: dispatch(handleAfterChange)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spreadsheet);
