export const SET_USER = "SET_USER";
export const SET_LEAGUES = "SET_LEAGUES";

export function setUser(user) {
  return {
    type: SET_USER,
    user: user
  };
}

export function setLeagues(leagues) {
  return {
    type: SET_LEAGUES,
    leagues: leagues
  };
}
