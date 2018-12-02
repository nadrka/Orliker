import React, { Component } from "react";
import Schedule from "../../components/Schedule/Schedule";
import "./LeagueSchedule.css";
import { connect } from "react-redux";
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
    league: null,
    leagueOption: LEAGUEOPTIONS.LIGA1,
    matchOption: MATCHOPTIONS.ALL,
    playedMatches: [],
    upcomingMatches: []
  };

  componentDidMount() {
    if (this.props.leagues.length > 0) {
      this.setState({ league: this.props.leagues[0].id });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.league !== this.state.league) {
      this.getPlayedMatches(this.state.league);
      this.getUpcomingMatches(this.state.league);
    }
    if (!prevState.league && this.props.leagues.length > 0)
      this.setState({ league: this.props.leagues[0].id });
  }

  getUpcomingMatches = async league => {
    let upcomingMatches = await getData(
      `${ROUTES.LEAGUES}/${league}/matches/upcoming`
    );
    this.setState({ upcomingMatches });
  };

  getPlayedMatches = async league => {
    let playedMatches = await getData(
      `${ROUTES.LEAGUES}/${league}/matches/played`
    );
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
                {this.props.leagues.map(league => {
                  return (
                    <MenuItem
                      onSelect={() => this.setState({ league: league.id })}
                    >
                      {league.leagueNumber}. liga
                    </MenuItem>
                  );
                })}
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
          category={this.state.matchOption}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { leagues: state.leagues };
};

export default connect(mapStateToProps)(LeagueSchedule);
