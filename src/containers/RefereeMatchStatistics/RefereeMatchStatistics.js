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
    matchInfo: {
      id: 1,
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
    players: {
      homeTeam: [
        // {
        //   id: 1,
        //   firstName: "Jan",
        //   secondName: "Naj",
        //   number: 69
        // }
      ],
      awayTeam: []
    },
    playersStatistics: [
      {
        teamId: 1,
        player: {
          id: 1,
          firstName: "Jan",
          secondName: "Naj",
          number: 69
        },
        goals: 1,
        assists: 1,
        yellowCards: 1,
        redCards: 1,
        didPlay: true
      }
    ]
  };

  componentDidMount() {
    this.getMatchInfo();
    this.getPlayersForMatch();
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
    const homePlayers = this.state.players.homeTeam.map(player => {
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
    const awayPlayers = this.state.players.awayTeam.map(player => {
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
    return (
      <div>
        <div className="flex topSection" style={{ justifyContent: "center" }}>
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
          <MatchDetails date={this.state.matchInfo.matchDate} place={this.state.matchInfo.place} />
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
    );
  }
}

export default RefereeMatchStatistics;
