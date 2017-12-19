import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Layout from "./Layout/Layout";
import { routerForBrowser } from "redux-little-router";
import routes from "./routes";
import buildReducer from "./pages/Build/reducer";
import postsReducer from './pages/ShowPost/reducer'

const { reducer, middleware, enhancer } = routerForBrowser({
  routes
});

const createMyStore = compose(
  enhancer,
  applyMiddleware(thunk),
  applyMiddleware(middleware),
  applyMiddleware(logger)
)(createStore);

const rootReducer = combineReducers({
  posts: postsReducer,
  router: reducer,
  build: buildReducer
});

const initialState = {};
const store = createMyStore(rootReducer, initialState);

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
