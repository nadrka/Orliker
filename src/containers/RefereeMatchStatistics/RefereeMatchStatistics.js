import React, { Component } from "react";
import "./RefereeMatchStatistics.css";
import { getData, postDataWithoutResponse, putData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import MatchDetails from "../../components/Match/Details/MatchDetails";
import PlayerStatisticsByReferee from "../../components/RefereeMatchStatistics/PlayerStatisticsByReferee/PlayerStatisticsByReferee";
import TeamStatisticsByReferee from "../../components/RefereeMatchStatistics/TeamStatisticsByReferee/TeamStatisticsByReferee";
export const MATCH_ID = 2;
class RefereeMatchStatistics extends Component {
  state = {
    matchInfo: null,
    players: {
      homeTeam: [],
      awayTeam: []
    },
    playersStatistics: []
  };

  async componentDidMount() {
    await this.getMatchInfo();
    await this.getPlayersForMatch();
  }

  getMatchInfo = async () => {
    let matchInfo = await getData(`${ROUTES.MATCHES}/${MATCH_ID}`);
    this.setState({ matchInfo: matchInfo });
  };

  getPlayersForMatch = async () => {
    let playersXD = await getData(`${ROUTES.MATCHES}/${MATCH_ID}/players`);
    const homePlayerStatistics = playersXD.homeTeam.map(player => {
      return {
        teamId: this.state.matchInfo.homeTeam.id,
        player: {
          id: player.id,
          firstName: player.firstName,
          secondName: player.secondName,
          number: player.number
        },
        goals: 0,
        assists: 0,
        redCards: 0,
        yellowCards: 0,
        didPlay: false
      };
    });
    const awayPlayerStatistics = playersXD.awayTeam.map(player => {
      return {
        teamId: this.state.matchInfo.awayTeam.id,
        player: {
          id: player.id,
          firstName: player.firstName,
          secondName: player.secondName,
          number: player.number
        },
        goals: 0,
        assists: 0,
        redCards: 0,
        yellowCards: 0,
        didPlay: false
      };
    });
    console.log(homePlayerStatistics.concat(awayPlayerStatistics));
    this.setState({ players: playersXD });
    this.setState({
      playersStatistics: homePlayerStatistics.concat(awayPlayerStatistics)
    });
  };

  filterStatisticForMatch = () => {
    const homeTeamStats = this.state.playersStatistics.filter(stat => {
      return stat.didPlay && stat.teamId == this.state.matchInfo.homeTeam.id;
    });

    const awayTeamStats = this.state.playersStatistics.filter(stat => {
      return stat.didPlay && stat.teamId == this.state.matchInfo.awayTeam.id;
    });

    const statistics = homeTeamStats.concat(awayTeamStats).map(statistic => {
      return {
        playerId: statistic.player.id,
        teamId: statistic.teamId,
        matchId: MATCH_ID,
        goals: statistic.goals,
        assists: statistic.assists,
        yellowCards: statistic.yellowCards,
        redCards: statistic.redCards
      };
    });
    console.log(statistics);
    this.creatStatisticForMatch(statistics);
  };

  creatStatisticForMatch = async statistics => {
    try {
      await postDataWithoutResponse(ROUTES.STATISTICS, statistics);
    } catch (error) {
      console.log(error);
    }
  };

  updateMatchResult = async () => {
    const result = {
      homeTeamResult: this.state.matchInfo.homeTeam.result,
      awayTeamResult: this.state.matchInfo.awayTeam.result,
      status: "Played"
    };
    try {
      await putData(`${ROUTES.MATCHES}/${MATCH_ID}`, result);
    } catch (error) {
      console.log(error);
    }
    console.log(result);
  };

  changePlayerStat = (id, amount, type) => {
    const playerStatisticsCopy = [...this.state.playersStatistics];
    console.log(playerStatisticsCopy);
    const index = playerStatisticsCopy.findIndex(p => p.player.id == id);

    playerStatisticsCopy[index][type] = amount;
    this.setState({ playersStatistics: playerStatisticsCopy });
    console.log(this.state.playersStatistics);
  };

  handleGoalsChanged = (id, amount, type) => {
    this.changePlayerStat(id, amount, type);
  };
  handleAssistsChanged = (id, amount, type) => {
    this.changePlayerStat(id, amount, type);
  };
  handleYellowCardsChanged = (id, amount, type) => {
    this.changePlayerStat(id, amount, type);
  };
  handleRedCardsChanged = (id, amount, type) => {
    this.changePlayerStat(id, amount, type);
  };
  handleDidPlayChanged = (id, amount, type) => {
    this.changePlayerStat(id, amount, type);
  };
  handleResultChange = (homeTeam, result) => {
    let matchInfoCopy = { ...this.state.matchInfo };
    console.log(homeTeam);
    if (homeTeam) {
      matchInfoCopy.homeTeam.result = result;
    } else {
      matchInfoCopy.awayTeam.result = result;
    }
    this.setState({ matchInfo: matchInfoCopy });
  };

  handleRequestButtonClick = () => {
    this.filterStatisticForMatch();
    this.updateMatchResult();
  };

  render() {
    console.log(this.state.players);
    let homePlayers = null;
    let awayPlayers = null;
    if (this.state.matchInfo != null) {
      homePlayers = this.state.players.homeTeam.map(player => {
        return (
          <PlayerStatisticsByReferee
            onGoalsChanged={this.handleGoalsChanged}
            onAssistsChanged={this.handleAssistsChanged}
            onYellowCardsChanged={this.handleYellowCardsChanged}
            onRedCardsChanged={this.handleRedCardsChanged}
            onCheckboxChanged={this.handleDidPlayChanged}
            player={player}
          />
        );
      });
      awayPlayers = this.state.players.awayTeam.map(player => {
        return (
          <PlayerStatisticsByReferee
            key={player.id}
            onGoalsChanged={this.handleGoalsChanged}
            onAssistsChanged={this.handleAssistsChanged}
            onYellowCardsChanged={this.handleYellowCardsChanged}
            onRedCardsChanged={this.handleRedCardsChanged}
            onCheckboxChanged={this.handleDidPlayChanged}
            player={player}
          />
        );
      });
    }
    return (
      <div>
        {this.state.matchInfo != null && (
          <div>
            <div className="flex topSection" style={{ justifyContent: "center", marginBottom: "20px" }}>
              <div className="flex class">
                <div className="bigFontBigMargin" style={{ minHeight: "80px", marginBottom: "20px" }}>
                  {this.state.matchInfo.leagueId} Liga
                </div>
              </div>
            </div>
            <div className="teamsStatisticsByReferee">
              <div className="teamStatisticsByReferee">
                <TeamStatisticsByReferee
                  name={this.state.matchInfo.homeTeam.name}
                  id={this.state.matchInfo.homeTeam.id}
                  isHomeTeam={true}
                  onResultChanged={this.handleResultChange}
                />
              </div>
              <div className="teamStatisticsByReferee">
                <TeamStatisticsByReferee
                  name={this.state.matchInfo.awayTeam.name}
                  id={this.state.matchInfo.awayTeam.id}
                  isHomeTeam={false}
                  onResultChanged={this.handleResultChange}
                />
              </div>
            </div>
            <div>
              <MatchDetails
                referee={this.state.matchInfo.referee}
                date={this.state.matchInfo.matchDate}
                place={this.state.matchInfo.place}
              />
            </div>
            <div className="teamsStatisticsByReferee">
              <div className="teamStatisticsByReferee">{homePlayers}</div>

              <div className="teamStatisticsByReferee">{awayPlayers}</div>
            </div>
            <div className="teamsStatisticsByReferee">
              <button onClick={this.handleRequestButtonClick} className="requestButton">
                {" "}
                Wyślij wyzwanie
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RefereeMatchStatistics;
