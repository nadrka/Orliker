import React, { Component } from "react";
import Schedule from "../../components/Schedule/Schedule";
import "./LeagueSchedule.css";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";

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
    playedMatches: [],
    upcomingMatches: []
  };

  componentDidMount() {
    this.getUpcomingMatches();
    this.getPlayedMatches();
  }

  getUpcomingMatches = async () => {
    let upcomingMatches = await getData(`${ROUTES.LEAGUES}/1/matches/upcoming`);
    this.setState({ upcomingMatches });
  };

  getPlayedMatches = async () => {
    let playedMatches = await getData(`${ROUTES.LEAGUES}/1/matches/played`);
    this.setState({ playedMatches });
  };

  render() {
    return (
      <div>
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="flex bigFontBigMargin">Terminarz</div>
            <div className="flex selectClass">
              <DropdownButton title="Wybierz ligę" style={{ marginBottom: 5 }}>
                <MenuItem
                  onSelect={() =>
                    this.setState({ leagueOption: LEAGUEOPTIONS.LIGA1 })
                  }
                >
                  1. liga
                </MenuItem>
                <MenuItem
                  onSelect={() =>
                    this.setState({ leagueOption: LEAGUEOPTIONS.LIGA2 })
                  }
                >
                  2. liga
                </MenuItem>
              </DropdownButton>
              <DropdownButton title="Rodzaj meczy" style={{ marginBottom: 5 }}>
                <MenuItem
                  onSelect={() =>
                    this.setState({ matchOption: MATCHOPTIONS.ALL })
                  }
                >
                  Wszystkie
                </MenuItem>
                <MenuItem
                  onSelect={() =>
                    this.setState({ matchOption: MATCHOPTIONS.FUTURE })
                  }
                >
                  Nadchodzące
                </MenuItem>
                <MenuItem
                  onSelect={() =>
                    this.setState({ matchOption: MATCHOPTIONS.PAST })
                  }
                >
                  Przeszłe
                </MenuItem>
              </DropdownButton>
            </div>
          </div>
        </div>
        <Schedule
          upcomingMatches={this.state.upcomingMatches}
          playedMatches={this.state.playedMatches}
        />
      </div>
    );
  }
}

export default LeagueSchedule;
