import React, { Component } from "react";
import Schedule from "../../components/Schedule/Schedule";
import "./LeagueSchedule.css";

export const LEAGUEOPTIONS = {
  LIGA1: "1LIGA",
  LIGA2: "2LIGA"
};

const MATCHOPTIONS = {
  ALL: 0,
  PAST: 1,
  FUTURE: 2
};

class LeagueSchedule extends Component {
  state = {
    leagueOption: LEAGUEOPTIONS.LIGA1,
    matchOption: MATCHOPTIONS.ALL,
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
      <div>
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="flex bigFontBigMargin">Terminarz</div>
            <div className="flex selectClass">
              <label className="flex">
                Liga:
                <select value={this.state.leagueOption} onChange={e => this.setState({ leagueOption: e.target.value })}>
                  <option value={LEAGUEOPTIONS.LIGA1}>1. liga</option>
                  <option value={LEAGUEOPTIONS.LIGA2}>2. liga</option>
                </select>
              </label>
              <label className="flex">
                Rodzaj meczy:
                <select value={this.state.matchOption} onChange={e => this.setState({ matchOption: e.target.value })}>
                  <option value={MATCHOPTIONS.ALL}>Wszystkie</option>
                  <option value={MATCHOPTIONS.FUTURE}>Nadchodzące</option>
                  <option value={MATCHOPTIONS.PAST}>Przeszłe</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <Schedule incomingMatches={this.state.incomingMatches} playedMatches={this.state.playedMatches} />
      </div>
    );
  }
}

export default LeagueSchedule;
