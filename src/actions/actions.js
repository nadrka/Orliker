export const SET_USER = "SET_USER";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_PLAYER = "CHANGE_PLAYER";
export const SET_LEAGUES = "SET_LEAGUES";

export function setUser(user) {
  return {
    type: SET_USER,
    user: user
  };
}

export function changeName(firstName, secondName) {
  return {
    type: CHANGE_NAME,
    firstName: firstName,
    secondName: secondName
  };
}

export function changePlayer(param, value) {
  return {
    type: CHANGE_PLAYER,
    param: param,
    value: value
  };
}

export function setLeagues(leagues) {
  return {
    type: SET_LEAGUES,
    leagues: leagues
  };
}
