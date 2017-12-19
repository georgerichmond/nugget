import ShowPost from "./ShowPost";
import { connect } from "react-redux";
import database from "../../database";
import _ from 'lodash'

export function getPost(id) {
  return dispatch => {
    dispatch({ type: "GET_POST" });
    return database
      .ref(`/posts/${id}`)
      .once("value", snap => {
        const post = snap.val();
        dispatch({ type: "GET_POST_SUCCESS", payload: { [`${id}`]: post } });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: "GET_POST_ERROR" });
      });
  };
}

const mapStateToProps = ({ posts, router }) => {
  return ({
    post: posts[router.params.id],
    router
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPost: id => {
      dispatch(getPost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);
