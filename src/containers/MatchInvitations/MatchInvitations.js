import React, { Component } from "react";
import ReceivedChallenge from "../../components/ReceivedChallenge/ReceivedChallenge";

class MatchInvitations extends Component {
  render() {
    return (
      <div>
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="bigFontBigMargin">Wyzwania</div>
          </div>
        </div>
        <div className="Title">Odebrane wyzwania</div>
        <ReceivedChallenge />
        <div className="Title">Wysłane wyzwania</div>
      </div>
    );
  }
}

export default MatchInvitations;
