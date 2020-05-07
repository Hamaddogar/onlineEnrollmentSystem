import { createStore, combineReducers, compose } from "redux";

import userReducer from "./reducers/userReducer";

const rootreducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootreducer,
  {},
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
