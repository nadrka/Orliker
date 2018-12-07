import React from "react";
import "./MatchDetails.css";
import moment from "moment";

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

        <div>{moment(props.date).format("DD.MM.YYYY HH:mm")}</div>
      </div>
      <div className="DetailFields">
        <div className="RowFlex">
          <span className="glyphicon glyphicon-eye-open" />
          &nbsp; Sędzia spotkania:
        </div>
        <div>{props.referee.firstName + " " + props.referee.secondName}</div>
      </div>
    </div>
  );
};

export default matchDetails;
