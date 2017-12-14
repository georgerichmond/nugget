import Spreadsheet from "./Spreadsheet";
import { connect } from "react-redux";
import _ from "lodash";

const handleAfterChange = dispatch => (changes, type) => {
  if (!changes) return;

  dispatch({
    type: "TABLE_" + _.snakeCase(type).toUpperCase(),
    payload: { changes }
  });
};

const mapStateToProps = ({ build }) => ({ data: build.data });

const mapDispatchToProps = dispatch => {
  return {
    handleAfterChange: dispatch(handleAfterChange)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spreadsheet);
