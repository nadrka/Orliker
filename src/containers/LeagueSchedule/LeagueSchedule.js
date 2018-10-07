import React, { Component } from "react";
import Schedule from "../../components/Schedule/Schedule";

class LeagueSchedule extends Component {
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
      },
      {
        id: 3,
        firstTeam: {
          name: "Ast Wrzeszcz",
          scoredGoals: 1,
          isPlayingHome: true
        },
        secondTeam: {
          name: "Apoel Morena",
          scoredGoals: 2,
          isPlayingHome: false
        },
        matchDate: {
          date: "09/09/2018",
          time: "20:45"
        }
      },
      {
        id: 4,
        firstTeam: {
          name: "Marpoli",
          scoredGoals: 2,
          isPlayingHome: true
        },
        secondTeam: {
          name: "Apoel Morena",
          scoredGoals: 10,
          isPlayingHome: false
        },
        matchDate: {
          date: "09/09/2018",
          time: "20:45"
        }
      },
      {
        id: 5,
        firstTeam: {
          name: "Apoel Morena",
          scoredGoals: 5,
          isPlayingHome: true
        },
        secondTeam: {
          name: "Czarni Osowa",
          scoredGoals: 3,
          isPlayingHome: false
        },
        matchDate: {
          date: "09/09/2018",
          time: "20:45"
        }
      },
      {
        id: 6,
        firstTeam: {
          name: "Apoel Morena",
          scoredGoals: 5,
          isPlayingHome: true
        },
        secondTeam: {
          name: "OST Wrzeszcz",
          scoredGoals: 5,
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
      },
      {
        id: 3,
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
      },
      {
        id: 4,
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

export default LeagueSchedule;
