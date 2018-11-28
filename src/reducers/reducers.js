import { SET_USER, SET_LEAGUES } from "../actions/actions";
import { combineReducers } from "redux";

function user(state = null, actions) {
  switch (actions.type) {
    case SET_USER:
      return actions.user;
    default:
      return state;
  }
}

function leagues(state = [], actions) {
  switch (actions.type) {
    case SET_LEAGUES:
      return actions.leagues;
    default:
      return state;
  }
}

export default combineReducers({ user, leagues });
