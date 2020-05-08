import { createStore, compose } from "redux";

import { SET_USER, SET_COURSE } from "./types";
import isEmpty from "../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  courses: [],
};

function storeState(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case SET_COURSE:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(
  storeState,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
