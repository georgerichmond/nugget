import * as d3 from "d3";
import Upload from "./Upload";
import { connect } from "react-redux";
import { UPLOAD_DATA } from "../actions";

const handleUpload = dispatch => {
  return e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const csvStr = reader.result;
      const data = d3.csvParseRows(csvStr);

      dispatch({ type: UPLOAD_DATA, payload: data });
    };

    reader.readAsText(file);
  };
};

const mapStateToProps = ({ firebase }) => ({});

const mapDispatchToProps = dispatch => {
  return {
    handleUpload: dispatch(handleUpload)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
