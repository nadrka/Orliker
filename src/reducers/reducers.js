import { SET_USER } from "../actions/actions";
import { combineReducers } from "redux";

function user(state = null, actions) {
  switch (actions.type) {
    case SET_USER:
      return actions.user;
    default:
      return state;
  }
}

export default combineReducers({ user });
