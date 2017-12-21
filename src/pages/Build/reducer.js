import { UPLOAD_DATA, EDIT_DATA, PASTE_DATA, CHOOSE_OPTION } from "./actions";
import _ from "lodash";
import exampleState from "./exampleState";

const makeChanges = (state, action) => {
  const data = state.chart.data ? _.clone(state.chart.data) : [];
  action.payload.changes.forEach(change => {
    const [row, column, oldValue, newValue] = change;
    _.set(data, [row, column], newValue);
  });
  return { ...state, chart: {...state.chart, data} };
};

const buildReducer = (state = exampleState, action) => {
  switch (action.type) {
    case UPLOAD_DATA:
      return { ...state, chart: {...state.chart, data: action.payload} };
    case EDIT_DATA:
    case PASTE_DATA:
      return makeChanges(state, action);
    case CHOOSE_OPTION:
      return { ...state, layout: { ...state.layout, ...action.payload } };
    case "EDIT_HEADER":
      return { ...state, editing: "header" };
    case "INPUT":
      const newState = _.cloneDeep(state);
      _.keys(action.payload).forEach(key => {
        _.set(newState, key, action.payload[key]);
      });
      return newState;
    default:
      return state;
  }
};

export default buildReducer;
