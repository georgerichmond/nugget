import { UPLOAD_DATA, EDIT_DATA, PASTE_DATA } from "./actions";
import _ from "lodash";

const makeChanges = (state, action) => {
  const data = state.data ? _.clone(state.data) : [];
  action.payload.changes.forEach(change => {
    const [row, column, oldValue, newValue] = change;
    _.set(data, [row, column], newValue);
  });
  return { ...state, data };
};

const buildReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_DATA:
      return { ...state, data: action.payload };
    case EDIT_DATA:
    case PASTE_DATA:
      return makeChanges(state, action);
    default:
      return state;
  }
};

export default buildReducer;
