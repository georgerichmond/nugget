import _ from "lodash";

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_POST_SUCCESS":
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default postsReducer;
