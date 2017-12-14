import EditablePost from "./EditablePost";
import { connect } from "react-redux";

const mapStateToProps = ({ build }) => ({ data: build.data });

export default connect(mapStateToProps)(EditablePost);
