import React from "react";
import "./PlayerInvitation";
import profilePicture from "../../../assets/images/profilePicture.jpg";
const PlayerInvitation = props => {
  const players = props.playerWithoutTeam.map(p => {
    return (
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">
          <img src={profilePicture} width="50" height="50" />
          <div className="TeamInvitationName">{p.number} </div>
          <div className="TeamInvitationName">
            {p.firstName + " " + p.secondName}
          </div>
        </div>
        <button className="RequestButton"> Zaproś do druzyny</button>
      </div>
    );
  });
  return (
    <div className="TeamInvitations">
      <div className="TeamInvitationHeader">Wszyscy zawodnicy bez druzyn</div>
      {players}
    </div>
  );
};

export default PlayerInvitation;
