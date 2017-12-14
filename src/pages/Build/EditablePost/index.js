import EditablePost from "./EditablePost";
import { connect } from "react-redux";

const mapStateToProps = ({ build }) => ({ data: build.data, options: build.options });

export default connect(mapStateToProps)(EditablePost);
