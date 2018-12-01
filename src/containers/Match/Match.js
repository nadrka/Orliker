import React, { Component } from "react";
import MatchDetails from "../../components/Match/Details/MatchDetails";
import MatchHeader from "../../components/Match/Header/MatchHeader";
import "./Match.css";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";
import MatchStatistics from "../../components/Match/Statistics/Statistics";

class Match extends Component {
  // this.props.match.params.id
  state = {
    match: {
      id: 1,
      matchInfo: {
        leagueId: 1,
        matchDate: "02-02-18",
        refereeId: 3,
        place: "Boisko Orlik SP 76 Arena - Jagiellońska 14",
        acceptMatchDate: "12312",
        homeTeam: {
          id: 1,
          name: "Hanza Lider",
          result: 5
        },
        awayTeam: {
          id: 2,
          name: "Apoel Morena",
          result: 7
        }
      },

      matchStatistics: {
        homeTeam: {
          name: "Hanza Lider",
          statistics: [
            {
              playerId: 1,
              playerNumber: 21,
              playerFirstName: "Karol",
              playerSecondName: "Nadratowski",
              playerPosition: "Defender",
              goals: 1,
              assists: 2,
              yellowCards: 0,
              redCards: 1
            }
          ]
        },
        awayTeam: {
          name: "Apoel Morena",
          statistics: [
            {
              playerId: 2,
              playerNumber: 5,
              playerFirstName: "Kamil",
              playerSecondName: "Nadratowski",
              playerPosition: "Defender",
              goals: 0,
              assists: 2,
              yellowCards: 1,
              redCards: 1
            }
          ]
        }
      }
    }
  };

  render() {
    return (
      <div>
        <MatchHeader match={this.state.match.matchInfo} />
        <MatchDetails
          date={this.state.match.matchInfo.matchDate}
          place={this.state.match.matchInfo.place}
        />
        <MatchStatistics statistics={this.state.matchStatistics} />
      </div>
    );
  }
}

export default Match;
