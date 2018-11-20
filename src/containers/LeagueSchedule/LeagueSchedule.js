import React, { Component } from "react";
import Schedule from "../../components/Schedule/Schedule";
import "./LeagueSchedule.css";
import { DropdownButton, MenuItem } from "react-bootstrap";

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
              <DropdownButton title="Wybierz ligę" style={{ marginBottom: 5 }}>
                <MenuItem onSelect={() => this.setState({ leagueOption: LEAGUEOPTIONS.LIGA1 })}>1. liga</MenuItem>
                <MenuItem onSelect={() => this.setState({ leagueOption: LEAGUEOPTIONS.LIGA2 })}>2. liga</MenuItem>
              </DropdownButton>
              <DropdownButton title="Rodzaj meczy" style={{ marginBottom: 5 }}>
                <MenuItem onSelect={() => this.setState({ matchOption: MATCHOPTIONS.ALL })}>Wszystkie</MenuItem>
                <MenuItem onSelect={() => this.setState({ matchOption: MATCHOPTIONS.FUTURE })}>Nadchodzące</MenuItem>
                <MenuItem onSelect={() => this.setState({ matchOption: MATCHOPTIONS.PAST })}>Przeszłe</MenuItem>
              </DropdownButton>
            </div>
          </div>
        </div>
        <Schedule incomingMatches={this.state.incomingMatches} playedMatches={this.state.playedMatches} />
      </div>
    );
  }
}

export default LeagueSchedule;
