import React, { Component } from "react";
import "./LeagueTable.css";
import { Link } from "react-router-dom";
import { LEAGUEOPTIONS } from "../LeagueSchedule/LeagueSchedule";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import { getData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";

const TABLE = [
  {
    name: "Apoel Morena",
    matches: 3,
    wins: 3,
    draws: 0,
    loses: 0,
    scoredGoals: 19,
    conceidedGoals: 0
  },
  {
    name: "Paladyni Prawilności",
    matches: 1,
    wins: 0,
    draws: 0,
    loses: 1,
    scoredGoals: 0,
    conceidedGoals: 9
  },
  {
    name: "Hanza Lider",
    matches: 2,
    wins: 2,
    draws: 0,
    loses: 0,
    scoredGoals: 10,
    conceidedGoals: 1
  },
  {
    name: "AST Wrzeszcz",
    matches: 2,
    wins: 1,
    draws: 1,
    loses: 0,
    scoredGoals: 7,
    conceidedGoals: 4
  },
  {
    name: "EGO",
    matches: 2,
    wins: 0,
    draws: 0,
    loses: 2,
    scoredGoals: 0,
    conceidedGoals: 11
  },
  {
    name: "KP Brzeźno",
    matches: 1,
    wins: 0,
    draws: 0,
    loses: 1,
    scoredGoals: 0,
    conceidedGoals: 4
  }
];

class LeagueTable extends Component {
  /*state = {
    leagueOption: LEAGUEOPTIONS.LIGA1
  };*/
  state = {
    //league: this.props.leagues[0].id,
    league: null,
    teams: []
  };

  componentDidMount() {
    if (this.props.leagues.length > 0) {
      this.setState({ league: this.props.leagues[0].id });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.league !== this.state.league) this.getTeamsForLeague(this.state.league);
    if (!prevState.league && this.props.leagues.length > 0) this.setState({ league: this.props.leagues[0].id });
  }

  async getTeamsForLeague(id) {
    let teams = await getData(`${ROUTES.LEAGUES}/${id}/teams`);
    this.setState({ teams: teams });
  }

  renderTable() {
    var toRender = this.state.teams.map((team, i) => {
      let classToUse = i % 2 ? "secondRow" : "firstRow";
      return (
        <tr
          className={classToUse}
          style={{
            backgroundColor: i == 0 ? "#33F422" : i > TABLE.length - 4 ? "#F5260A" : undefined
          }}
        >
          <td>{`${i + 1}.`}</td>
          <td
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              textAlign: "right"
            }}
          >
            <img
              src={require("../../assets/images/apoel.png")}
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
            <Link className="teamLink" to="/panel/team">
              {team.name}
            </Link>
          </td>
          <td>{team.matches}</td>
          <td>{team.wins}</td>
          <td>{team.draws}</td>
          <td>{team.loses}</td>
          <td>{`${team.scoredGoals}:${team.concedeGoals}`}</td>
          <td>{team.points}</td>
        </tr>
      );
    });
    /*TABLE.forEach(team => {
      team["points"] = team.wins * 3 + team.draws;
    });
    TABLE.sort((team1, team2) => {
      if (team2["points"] !== team1["points"]) return team2["points"] - team1["points"];
      else {
        return team2.scoredGoals - team2.conceidedGoals - (team1.scoredGoals - team1.conceidedGoals);
      }
    });
    var toRender = TABLE.map((team, i) => {
      let classToUse = i % 2 ? "secondRow" : "firstRow";
      return (
        <tr
          className={classToUse}
          style={{
            backgroundColor: i == 0 ? "#33F422" : i > TABLE.length - 4 ? "#F5260A" : undefined
          }}
        >
          <td>{`${i + 1}.`}</td>
          <td
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              textAlign: "right"
            }}
          >
            <img
              src={require("../../assets/images/apoel.png")}
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
            <Link className="teamLink" to="/panel/team">
              {team.name}
            </Link>
          </td>
          <td>{team.matches}</td>
          <td>{team.wins}</td>
          <td>{team.draws}</td>
          <td>{team.loses}</td>
          <td>{`${team.scoredGoals}:${team.conceidedGoals}`}</td>
          <td>{team.points}</td>
        </tr>
      );
    });*/
    return toRender;
  }

  render() {
    //console.log(this.props.leagues);
    return (
      <div>
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="bigFontBigMargin">Tabela</div>
            <div className="flex selectClass">
              <DropdownButton title="Wybierz ligę" style={{ marginBottom: 5 }}>
                {this.props.leagues.map(league => {
                  return (
                    <MenuItem onSelect={() => this.setState({ league: league.id })}>
                      {league.leagueNumber}. liga
                    </MenuItem>
                  );
                })}
              </DropdownButton>
            </div>
          </div>
        </div>
        <table style={{ width: "80%" }}>
          <tr className="headerSection">
            <th>Pozycja</th>
            <th />
            <th>Drużyna</th>
            <th>M</th>
            <th>Z</th>
            <th>R</th>
            <th>P</th>
            <th>Bramki</th>
            <th>Punkty</th>
          </tr>
          {this.renderTable()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { leagues: state.leagues };
};

export default connect(mapStateToProps)(LeagueTable);
