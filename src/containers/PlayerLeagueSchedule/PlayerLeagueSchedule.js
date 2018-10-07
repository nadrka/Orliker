import React, { Component } from "react";
import Schedule from "../../components/Schedule/Schedule";

class PlayerLeagueSchedule extends Component {
  state = {
    playedMatches: [
      {
        id: 1,
        firstTeam: {
          name: "Apoel Morena",
          scoredGoals: 4,
          isPlayingHome: true
        },
        secondTeam: {
          name: "HanzaLider",
          scoredGoals: 4,
          isPlayingHome: false
        },
        matchDate: {
          date: "09/09/2018",
          time: "20:45"
        }
      },
      {
        id: 2,
        firstTeam: {
          name: "RedBulls",
          scoredGoals: 0,
          isPlayingHome: true
        },
        secondTeam: {
          name: "Apoel Morena",
          scoredGoals: 3,
          isPlayingHome: false
        },
        matchDate: {
          date: "09/09/2018",
          time: "20:45"
        }
      }
    ],
    incomingMatches: [
      {
        id: 1,
        firstTeam: {
          name: "Apoel Morena",
          scoredGoals: "-",
          isPlayingHome: true
        },
        secondTeam: {
          name: "HanzaLider",
          scoredGoals: "-",
          isPlayingHome: false
        },
        matchDate: {
          date: "09/09/2018",
          time: "20:45"
        }
      },
      {
        id: 2,
        firstTeam: {
          name: "RedBulls",
          scoredGoals: "-",
          isPlayingHome: true
        },
        secondTeam: {
          name: "Apoel Morena",
          scoredGoals: "-",
          isPlayingHome: false
        },
        matchDate: {
          date: "09/09/2018",
          time: "20:45"
        }
      }
    ]
  };
  render() {
    return (
      <Schedule
        incomingMatches={this.state.incomingMatches}
        playedMatches={this.state.playedMatches}
      />
    );
  }
}

export default PlayerLeagueSchedule;
