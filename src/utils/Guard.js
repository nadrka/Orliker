export function isNormalPlayer(user) {
  return user != null && !user.isCaptain;
}

export function isCaptain(user) {
  return user != null && user.isCaptain;
}

export function isReferee(user) {
  return user != null && user.role === "Referee";
}

export function isAdmin(user) {
  return user != null && user.role === "Admin";
}
