import React, { Component } from "react";
import MatchDetails from "../../components/Match/Details/MatchDetails";
import MatchHeader from "../../components/Match/Header/MatchHeader";
import "./Match.css";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";

class Match extends Component {
  state = {
    match: {
      id: 1,
      league: "Gdańsk - 1 liga",
      firstTeam: {
        name: "Apoel Morena",
        scoredGoals: 4,
        isPlayingHome: true,
        position: 7
      },
      secondTeam: {
        name: "HanzaLider",
        scoredGoals: 4,
        isPlayingHome: false,
        position: 7
      },
      matchDate: {
        date: "09/09/2018",
        time: "20:45"
      },
      place: {
        name: "Za decathlonem",
        address: "ul. Janusza 5a",
        lon: 19.78,
        lat: 51.23
      },
      referee: {
        id: 1,
        name: "Janusz Spawacz"
      },
      homeTeam: true
    }
  };

  updateOption = isHomeTeamClicked => {
    this.setState({ homeTeam: isHomeTeamClicked });
  };

  showHomeTeamStatistics = choosenOption => {
    this.updateOption(false);
  };
  showAwayTeamStatistics = choosenOption => {
    this.updateOption(true);
  };
  render() {
    return (
      <div>
        <MatchHeader match={this.state.match} />
        <MatchDetails />
        <div className="Switcher">
          <PanelOption
            name={this.state.match.firstTeam.name}
            clicked={this.showHomeTeamStatistics}
            key="homeTeam"
            isActive={!this.state.homeTeam}
          />
          <PanelOption
            name={this.state.match.secondTeam.name}
            clicked={this.showAwayTeamStatistics}
            key="awayTeam"
            isActive={this.state.homeTeam}
          />
        </div>
      </div>
    );
  }
}

export default Match;
