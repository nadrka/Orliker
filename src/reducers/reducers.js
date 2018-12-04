import { SET_USER, SET_LEAGUES, CHANGE_NAME, CHANGE_PLAYER } from "../actions/actions";
import { combineReducers } from "redux";

function user(state = null, actions) {
  switch (actions.type) {
    case SET_USER:
      return actions.user;
    case CHANGE_NAME:
      return { ...state, firstName: actions.firstName, secondName: actions.secondName };
    case CHANGE_PLAYER:
      let newObject = { ...state };
      newObject[actions.param] = actions.value;
      return newObject;
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
