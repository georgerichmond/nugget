import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reactReduxFirebase, firebaseStateReducer } from "react-redux-firebase";
import logger from "redux-logger";
import Layout from "./Layout/Layout";
import { routerForBrowser } from 'redux-little-router';
import routes from "./routes";

const firebaseConfig = {
  apiKey: "AIzaSyC2ALnvG2NMd5yp1f0SyDpvX4NM3gai2_M",
  authDomain: "nugget-stage.firebaseapp.com",
  databaseURL: "https://nugget-stage.firebaseio.com",
  projectId: "nugget-stage",
  storageBucket: "nugget-stage.appspot.com",
  messagingSenderId: "551989691075"
};
const reduxFirebaseConfig = { userProfile: "users" };




const {
  reducer,
  middleware,
  enhancer
} = routerForBrowser({
  routes,
})

const createStoreWithFirebaseAndLogger = compose(
  enhancer,
  applyMiddleware(middleware),
  applyMiddleware(logger),
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig)
)(createStore);

const rootReducer = combineReducers({
  router: reducer,
  firebase: firebaseStateReducer
});

const initialState = {};
const store = createStoreWithFirebaseAndLogger(rootReducer, initialState);

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
