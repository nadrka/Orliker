import React, { Component } from "react";
import MatchDetails from "../../components/Match/Details/MatchDetails";
import MatchHeader from "../../components/Match/Header/MatchHeader";
import "./Match.css";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";
import MatchStatistics from "../../components/Match/Statistics/Statistics";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
class Match extends Component {
  // this.props.match.params.id
  state = {
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
        result: 0,
        position: 0
      },
      awayTeam: {
        id: 2,
        name: "Apoel Morena",
        result: 0,
        position: 0
      }
    },

    matchStatistics: {
      homeTeam: {
        result: 5,
        name: null,
        statistics: []
      },
      awayTeam: {
        result: 5,
        name: null,
        statistics: []
      }
    }
  };

  componentDidMount() {
    this.getMatchInfo();
    this.getMatchStatistics();
  }

  getMatchInfo = async () => {
    let matchInfo = await getData(
      `${ROUTES.MATCHES}/${this.props.match.params.id}`
    );
    this.setState({ matchInfo: matchInfo });
  };

  getMatchStatistics = async () => {
    let matchStatistics = await getData(
      `${ROUTES.MATCHES}/${this.props.match.params.id}/statistics`
    );
    console.log(matchStatistics);
    this.setState({ matchStatistics: matchStatistics });
  };

  render() {
    return (
      <div>
        <MatchHeader match={this.state.matchInfo} />
        <MatchDetails
          date={this.state.matchInfo.matchDate}
          place={this.state.matchInfo.place}
        />
        <MatchStatistics statistics={this.state.matchStatistics} />
      </div>
    );
  }
}

export default Match;
