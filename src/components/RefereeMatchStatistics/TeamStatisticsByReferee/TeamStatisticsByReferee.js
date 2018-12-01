import React from "react";
import NumericInput from "react-numeric-input";
import "./TeamStatisticsByReferee.css";
const TeamStatisticsByReferee = props => {
  return (
    <div className="matchStatisticsByReferee">
      <div className="TeamNameInRefereeStatistics">HANZA LIDER</div>
      <div className="smallNumeric">
        <NumericInput
          onChange={this.chuj}
          className="form-control"
          min={0}
          max={100}
          value={0}
        />
      </div>
    </div>
  );
};

export default TeamStatisticsByReferee;
