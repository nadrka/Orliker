import React from "react";
import "./MatchDetails.css";

const matchDetails = props => {
  return (
    <div className="Details">
      <div className="DetailFields">
        <div className="RowFlex">
          <span className="glyphicon glyphicon-map-marker" />
          &nbsp;Miejsce spotkania:
        </div>
        <div>Boisko Orlik SP 76 Arena - Jagiellońska 14</div>
      </div>
      <div className="DetailFields">
        <div className="RowFlex">
          <span className="glyphicon glyphicon-calendar" />
          &nbsp;Data spotkania:
        </div>

        <div>21-11-18 | 19:30</div>
      </div>
      <div className="DetailFields">
        <div className="RowFlex">
          <span className="glyphicon glyphicon-eye-open" />
          &nbsp; Sędzia spotkania:
        </div>
        <div>Janusz Grzyb</div>
      </div>
    </div>
  );
};

export default matchDetails;
