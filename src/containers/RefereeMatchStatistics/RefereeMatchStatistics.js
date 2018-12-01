import React, { Component } from "react";
import "./RefereeMatchStatistics.css";

import PlayerStatisticsByReferee from "../../components/RefereeMatchStatistics/PlayerStatisticsByReferee/PlayerStatisticsByReferee";
import TeamStatisticsByReferee from "../../components/RefereeMatchStatistics/TeamStatisticsByReferee/TeamStatisticsByReferee";
class RefereeMatchStatistics extends Component {
  state = {};

  chuj = siemka => {
    console.log(siemka);
  };
  render() {
    return (
      <div className="teamsStatisticsByReferee">
        <div className="teamStatisticsByReferee">
          <TeamStatisticsByReferee />
          <PlayerStatisticsByReferee />
          <PlayerStatisticsByReferee />
          <PlayerStatisticsByReferee />
        </div>
        <div className="teamStatisticsByReferee">
          <TeamStatisticsByReferee />
          <PlayerStatisticsByReferee />
          <PlayerStatisticsByReferee />
          <PlayerStatisticsByReferee />
        </div>
      </div>
    );
  }
}

export default RefereeMatchStatistics;
