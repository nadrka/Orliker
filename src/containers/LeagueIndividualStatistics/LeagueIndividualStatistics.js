import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import assists from "../../assets/images/assist.png";
import goals from "../../assets/images/goals.png";
import redCard from "../../assets/images/red-card.png";
import yellowCard from "../../assets/images/yellow-card.png";
import profilePicture from "../../assets/images/profilePicture.jpg";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import { connect } from "react-redux";
import "./LeagueIndividualStatistics.css";
class LeagueIndividualStatistics extends Component {
  state = {
    league: null,
    individualStatistics: {
      bestScorers: [
        {
          player: {
            id: 1,
            firstName: "Karol",
            secondName: "Nadratowski"
          },
          team: {
            id: 1,
            name: "Apoel Morena"
          },
          goals: 1
        }
      ],
      bestAsistants: [
        {
          player: {
            id: 1,
            firstName: "Karol",
            secondName: "Nadratowski"
          },
          team: {
            id: 1,
            name: "Apoel Morena"
          },
          assists: 5
        }
      ],
      mostYellowCards: [
        {
          player: {
            id: 1,
            firstName: "Karol",
            secondName: "Nadratowski"
          },
          team: {
            id: 1,
            name: "Apoel Morena"
          },
          yellowCards: 3
        }
      ],
      mostRedCards: [
        {
          player: {
            id: 1,
            firstName: "Karol",
            secondName: "Nadratowski"
          },
          team: {
            id: 1,
            name: "Apoel Morena"
          },
          redCards: 2
        }
      ]
    }
  };

  componentDidMount() {
    console.log("siemka");
    if (this.props.leagues.length > 0) {
      this.setState({ league: this.props.leagues[0].id });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.league !== this.state.league) {
      this.getIndividualStatistics(this.state.league);
    }
    if (!prevState.league && this.props.leagues.length > 0)
      this.setState({ league: this.props.leagues[0].id });
  }

  getIndividualStatistics = async league => {
    let individualStatistics = await getData(
      `${ROUTES.LEAGUES}/${league}/statistics`
    );

    this.setState({ individualStatistics: individualStatistics });
  };
  render() {
    const scorers = this.state.individualStatistics.bestScorers.map(
      (stats, i) => {
        let classToUse = i % 2 ? "secondRow" : "firstRow";
        return (
          <tr className={classToUse}>
            <td>{`${i + 1}.`}</td>
            <td
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                textAlign: "right"
              }}
            >
              <img
                src={profilePicture}
                alt="no pic"
                style={{
                  height: "50px",
                  width: "auto",
                  verticalAlign: "center",
                  align: "middle",
                  paddingRight: "10px"
                }}
              />
            </td>
            <td className="BlackLink">
              {/* <Link className="teamLink" to={"panel/team/" + 1}> */}
              {stats.player.firstName + " " + stats.player.secondName}
              {/* </Link> */}
            </td>
            <td>{stats.team.name}</td>
            <td>{stats.goals}</td>
          </tr>
        );
      }
    );
    const assistants = this.state.individualStatistics.bestAsistants.map(
      (stats, i) => {
        let classToUse = i % 2 ? "secondRow" : "firstRow";
        return (
          <tr className={classToUse}>
            <td>{`${i + 1}.`}</td>
            <td
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                textAlign: "right"
              }}
            >
              <img
                src={profilePicture}
                alt="no pic"
                style={{
                  height: "50px",
                  width: "auto",
                  verticalAlign: "center",
                  align: "middle",
                  paddingRight: "10px"
                }}
              />
            </td>
            <td className="BlackLink">
              {/* <Link className="teamLink" to={"panel/team/" + 1}> */}
              {stats.player.firstName + " " + stats.player.secondName}
              {/* </Link> */}
            </td>
            <td>{stats.team.name}</td>
            <td>{stats.assists}</td>
          </tr>
        );
      }
    );
    const yellow = this.state.individualStatistics.mostYellowCards.map(
      (stats, i) => {
        let classToUse = i % 2 ? "secondRow" : "firstRow";
        return (
          <tr className={classToUse}>
            <td>{`${i + 1}.`}</td>
            <td
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                textAlign: "right"
              }}
            >
              <img
                src={profilePicture}
                alt="no pic"
                style={{
                  height: "50px",
                  width: "auto",
                  verticalAlign: "center",
                  align: "middle",
                  paddingRight: "10px"
                }}
              />
            </td>
            <td className="BlackLink">
              {/* <Link className="teamLink" to={"panel/team/" + 1}> */}
              {stats.player.firstName + " " + stats.player.secondName}
              {/* </Link> */}
            </td>
            <td>{stats.team.name}</td>
            <td>{stats.yellowCards}</td>
          </tr>
        );
      }
    );
    const red = this.state.individualStatistics.mostRedCards.map((stats, i) => {
      let classToUse = i % 2 ? "secondRow" : "firstRow";
      return (
        <tr className={classToUse}>
          <td>{`${i + 1}.`}</td>
          <td
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              textAlign: "right"
            }}
          >
            <img
              src={profilePicture}
              alt="no pic"
              style={{
                height: "50px",
                width: "auto",
                verticalAlign: "center",
                align: "middle",
                paddingRight: "10px"
              }}
            />
          </td>
          <td className="BlackLink">
            {/* <Link className="teamLink" to={"panel/team/" + 1}> */}
            {stats.player.firstName + " " + stats.player.secondName}
            {/* </Link> */}
          </td>
          <td>{stats.team.name}</td>
          <td>{stats.redCards}</td>
        </tr>
      );
    });
    return (
      <div>
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="bigFontBigMargin">Statystyki indywidualne</div>
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
            </div>
          </div>
        </div>
        <div className="LeagueIndividualStatistic">
          <div className="LeagueIndividualStatisticHeader">
            NAJWIĘCEJ BRAMEK
            <img src={goals} width="50" height="50" />
          </div>
          <table className="TableWrapper" style={{ width: "80%" }}>
            <tr
              className="headerSection"
              style={{ backgroundColor: " #2b7a78" }}
            >
              <th>Pozycja</th>
              <th />
              <th>Imię i nazwisko</th>
              <th>Druyna</th>
              <th>Bramki</th>
            </tr>
            {scorers}
          </table>
          <div className="LeagueIndividualStatisticHeader">
            NAJWIĘCEJ ASYST
            <img src={assists} width="50" height="50" />
          </div>
          <table className="TableWrapper" style={{ width: "80%" }}>
            <tr
              className="headerSection"
              style={{ backgroundColor: " #2b7a78" }}
            >
              <th>Pozycja</th>
              <th />
              <th>Imię i nazwisko</th>
              <th>Druyna</th>
              <th>Asysty</th>
            </tr>
            {assistants}
          </table>
          <div className="LeagueIndividualStatisticHeader">
            NAJWIĘCEJ ŻOŁTYCH KARTEK
            <img src={yellowCard} width="50" height="50" />
          </div>
          <table className="TableWrapper" style={{ width: "80%" }}>
            <tr
              className="headerSection"
              style={{ backgroundColor: " #2b7a78" }}
            >
              <th>Pozycja</th>
              <th />
              <th>Imię i nazwisko</th>
              <th>Druyna</th>
              <th>Kartki</th>
            </tr>
            {yellow}
          </table>
          <div className="LeagueIndividualStatisticHeader">
            NAJWIĘCEJ CZERWONYCH KARTEK
            <img src={redCard} width="50" height="50" />
          </div>
          <table className="TableWrapper" style={{ width: "80%" }}>
            <tr
              className="headerSection"
              style={{ backgroundColor: " #2b7a78" }}
            >
              <th>Pozycja</th>
              <th />
              <th>Imię i nazwisko</th>
              <th>Druyna</th>
              <th>Kartki</th>
            </tr>
            {red}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { leagues: state.leagues };
};

export default connect(mapStateToProps)(LeagueIndividualStatistics);
