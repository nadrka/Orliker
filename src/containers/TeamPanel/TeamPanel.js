import React, { Component } from "react";
import "./TeamPanel.css";
import PlayerStatistics from "../PlayersStatistics/PlayersStatistics";
import LeagueSchedule from "../LeagueSchedule/LeagueSchedule";
import PanelOption from "../../components/PanelOptions/PanelOption/PanelOption";
import PanelOptions from "../../components/PanelOptions/PanelOptions";
import Schedule from "../../components/Schedule/Schedule";
import { getData, putData, putFormatData } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

const MENUOPTIONS = {
  MATCHES: 0,
  PLAYERS: 1
};

class TeamPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
      option: MENUOPTIONS.MATCHES,
      players: null,
      playedMatches: [],
      upcomingMatches: [],
      lastMatch: null,
      canChange: false,
      isBeingChanged: false
    };
  }

  async componentDidMount() {
    try {
      const team = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}`);
      const players = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}/playersWithStats`);
      const upcomingMatches = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}/matches/upcoming`);
      const playedMatches = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}/matches/played`);
      const lastMatch = playedMatches[0];
      this.setState({
        team: team,
        players: players,
        playedMatches: playedMatches,
        upcomingMatches: upcomingMatches,
        lastMatch: lastMatch,
        canChange: this.props.user && this.props.user.isCaptain && this.props.match.params.id == this.props.user.teamId
      });
    } catch (error) {
      console.log(error);
    }
  }

  uploadHandler = async file => {
    const formData = new FormData();
    formData.append("teamImage", file, file.name);
    await putFormatData(`${ROUTES.TEAMS}/image`, formData, { Authorization: this.props.user.token });
    const team = await getData(`${ROUTES.TEAMS}/${this.props.match.params.id}`);
    this.setState({ team });
  };

  fileChangedHandler = event => {
    const file = event.target.files[0];
    console.log(file);
    this.uploadHandler(file);
  };

  getStyle(index) {
    if (index === this.state.option) {
      return "activeColor";
    }
    return "inactiveColor";
  }
  renderOption() {
    if (this.state.option == MENUOPTIONS.PLAYERS) {
      return <PlayerStatistics players={this.state.players} />;
    } else if (this.state.option == MENUOPTIONS.MATCHES) {
      return (
        <Schedule upcomingMatches={this.state.upcomingMatches} playedMatches={this.state.playedMatches} category={0} />
      );
    }
  }
  async handlePressedKey(e) {
    if (e.key === "Enter") {
      try {
        let name = e.target.value;
        await putData(ROUTES.TEAMS, { name: name }, { Authorization: this.props.user.token });
        this.setState(prevState => {
          return { isBeingChanged: false, team: { ...prevState.team, name: name } };
        });
      } catch (error) {
        console.log(error);
        this.setState({ isBeingChanged: false });
      }
    }
  }
  renderName() {
    if (this.state.isBeingChanged) {
      return (
        <input
          className="inputClass big"
          type="text"
          onKeyPress={event => {
            this.handlePressedKey(event);
          }}
          defaultValue={this.state.team.name}
        />
      );
    } else
      return (
        <div className="bigFontBigMargin">
          {this.state.team.name}{" "}
          {this.state.canChange && (
            <Glyphicon
              glyph="glyphicon glyphicon-pencil"
              bsClass={"glyphicon"}
              onClick={() => {
                this.setState({ isBeingChanged: true });
              }}
            />
          )}
        </div>
      );
  }
  render() {
    let { lastMatch } = this.state;
    let img = null;
    if (this.state.team != null && this.state.team.imgURL != null) {
      img = <img className="img coverClass" src={"http://localhost:3000/" + this.state.team.imgURL} alt="no pic" />;
    } else {
      // img = <img className="img" src={require("../../assets/images/apoel.png")} alt="no pic" />;
    }
    return (
      <div className="flex mainContainerTeamPanel">
        <div className="flex topSection">
          <div className="flex picSection">{img}</div>

          {this.state.team && (
            <div className="flex textSection">
              {this.renderName()}
              <div className="mediumFontMediumMargin mediumMarginWithBorder">
                {this.state.team.position}. miejsce - {this.state.team.currentLegue.leagueNumber} liga
              </div>
              <div className="mediumFontMediumMargin">
                Bilans: {this.state.team.wins} Z {this.state.team.draws} R {this.state.team.loses} P
              </div>
              <div className="mediumFontMediumMargin">
                Kapitan: {this.state.team.captain.user.firstName} {this.state.team.captain.user.secondName}
              </div>
              <div className="mediumFontMediumMargin">
                Ostatni mecz:{" "}
                {lastMatch
                  ? `${lastMatch.homeTeam.name} ${lastMatch.homeTeam.result}-${lastMatch.awayTeam.result} ${
                      lastMatch.awayTeam.name
                    }`
                  : "-"}
              </div>
              {this.state.canChange && (
                <div>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={this.fileChangedHandler}
                    ref={fileInput => (this.fileInput = fileInput)}
                  />
                  <button style={{ color: "black", marginTop: "10px" }} onClick={() => this.fileInput.click()}>
                    {" "}
                    Pick team logo{" "}
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="flex marginSection" />
        </div>
        <div className="flex bottomSection">
          <PanelOptions
            labels={["Mecze", "Zawodnicy"]}
            options={[MENUOPTIONS.MATCHES, MENUOPTIONS.PLAYERS]}
            fun={arg => {
              this.setState({ option: arg });
            }}
          />
          {this.renderOption()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(TeamPanel);
