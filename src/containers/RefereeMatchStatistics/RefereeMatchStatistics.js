import React, { Component } from "react";
import "./RefereeMatchStatistics.css";
import MatchDetails from "../../components/Match/Details/MatchDetails";
import PlayerStatisticsByReferee from "../../components/RefereeMatchStatistics/PlayerStatisticsByReferee/PlayerStatisticsByReferee";
import TeamStatisticsByReferee from "../../components/RefereeMatchStatistics/TeamStatisticsByReferee/TeamStatisticsByReferee";
class RefereeMatchStatistics extends Component {
  state = {
    matchInfo: {
      leagueId: 1,
      matchDate: "02-02-18",
      refereeId: 3,
      place: "Boisko Orlik SP 76 Arena - Jagiellońska 14",
      acceptMatchDate: "12312",
      homeTeam: {
        id: 1,
        name: "Hanza Lider",
        result: 0,
        position: 0
      },
      awayTeam: {
        id: 2,
        name: "Apoel Morena",
        result: 0,
        position: 0
      }
    }
  };

  chuj = siemka => {
    console.log(siemka);
  };
  render() {
    return (
      <div>
        <div className="teamsStatisticsByReferee">
          <div className="teamStatisticsByReferee">
            <TeamStatisticsByReferee />
          </div>

          <div className="teamStatisticsByReferee">
            <TeamStatisticsByReferee />
          </div>
        </div>
        <div>
          <MatchDetails
            date={this.state.matchInfo.matchDate}
            place={this.state.matchInfo.place}
          />
        </div>

        <div className="teamsStatisticsByReferee">
          <div className="teamStatisticsByReferee">
            <PlayerStatisticsByReferee />
            <PlayerStatisticsByReferee />
            <PlayerStatisticsByReferee />
          </div>

          <div className="teamStatisticsByReferee">
            <PlayerStatisticsByReferee />
            <PlayerStatisticsByReferee />
            <PlayerStatisticsByReferee />
          </div>
        </div>
      </div>
    );
  }
}

export default RefereeMatchStatistics;
