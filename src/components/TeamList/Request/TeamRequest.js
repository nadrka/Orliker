import React from "react";
import "./TeamRequest.css";
import apoel from "../../../assets/images/apoel.png";
const TeamRequest = props => {
  const teamsForLeague = props.teams.map(league => {
    return (
      <div>
        <div className="LeagueHeader">{league.league} Liga</div>
        {league.teams.map(t => {
          return (
            <div className="TeamInvitation">
              <div className="TeamInvitationInfo">
                <img src={apoel} width="50" height="50" />
                <div className="TeamInvitationName">{t.name}</div>
              </div>
              <button onClick={() => props.onRequestTapped(t.id)} className="RequestButton">
                {" "}
                Dolącz do druzyny
              </button>
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Wszystkie Druzyny</div>

      {teamsForLeague}
    </div>
  );
};

export default TeamRequest;
