import React from "react";
import "./PlayerInvitation";

const PlayerInvitation = props => {
  const players = props.playerWithoutTeam.map(p => {
    return (
      <div className="TeamInvitation">
        <div className="TeamInvitationInfo">
          <img src={"http://localhost:3000/" + p.imgURL} width="50" height="50" />
          <div className="TeamInvitationName">{p.number} </div>
          <div className="TeamInvitationName">{p.firstName + " " + p.secondName}</div>
        </div>
        {!p.isSent && (
          <button onClick={() => props.onRequestTapped(p.id)} className="RequestButton">
            {" "}
            Zaproś do druzyny
          </button>
        )}

        {p.isSent && (
          <button disabled={true} className="RequestButton">
            {" "}
            Zaproszenie wysłane
          </button>
        )}
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
