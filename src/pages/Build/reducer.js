import { UPLOAD_DATA, TABLE_EDIT } from "./actions";
import _ from "lodash";

const makeChanges = (state, action) => {
  let data = state.data ? _.clone(state.data) : [];
  action.payload.changes.forEach(change => {
    const [row, column, oldValue, newValue] = change;
    data = _.set(data, [row, column], newValue);
  });
  return { ...state, data };
};

const buildReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_DATA:
      return { ...state, data: action.payload };
    case TABLE_EDIT:
      return makeChanges(state, action);
    default:
      return state;
  }
};

export default buildReducer;
