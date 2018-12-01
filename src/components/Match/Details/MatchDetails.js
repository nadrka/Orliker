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
        <div>{props.place}</div>
      </div>
      <div className="DetailFields">
        <div className="RowFlex">
          <span className="glyphicon glyphicon-calendar" />
          &nbsp;Data spotkania:
        </div>

        <div>{props.date}</div>
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
