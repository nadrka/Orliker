import NumericInput from "react-numeric-input";
import "./TeamStatisticsByReferee.css";
import React, { Component } from "react";

class TeamStatisticsByReferee extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.name === nextProps.name) {
      return false;
    } else {
      return true;
    }
  }
  resultChanged = goals => {
    this.props.onResultChanged(this.props.isHomeTeam, goals);
  };
  render() {
    return (
      <div className="matchStatisticsByReferee">
        <div className="TeamNameInRefereeStatistics">{this.props.name}</div>
        <div className="smallNumeric">
          <NumericInput
            onChange={this.resultChanged}
            className="form-control"
            min={0}
            max={100}
            value={0}
          />
        </div>
      </div>
    );
  }
}

export default TeamStatisticsByReferee;
