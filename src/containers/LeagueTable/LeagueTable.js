import React, { Component } from "react";
import "./LeagueTable.css";
import { Link } from "react-router-dom";
import { LEAGUEOPTIONS } from "../LeagueSchedule/LeagueSchedule";
import { DropdownButton, MenuItem, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getData, postDataWithResponse } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import App from "../../App";
import "react-datepicker/dist/react-datepicker.css";
import { createNotification } from "../../utils/Notification";
import moment from "moment";
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "45%",
    width: "35%"
  }
};
const CANCHANGESEASON = {
  NO: 0,
  CANEND: 1,
  CANSTART: 2
};
Modal.setAppElement(App);
class LeagueTable extends Component {
  /*state = {
    leagueOption: LEAGUEOPTIONS.LIGA1
  };*/
  state = {
    //league: this.props.leagues[0].id,
    league: null,
    teams: [],
    pickedTeam: {
      name: "Unkown",
      id: 0
    },
    places: [{ id: 1, place: "ZADUPIE" }, { id: 2, place: "Decathlon" }],
    pickedPlace: { id: 0, place: "" },
    referees: [
      { id: 1, firstName: "Janusz", secondName: "Grzyb" },
      { id: 1, firstName: "Janusz", secondName: "Grzyb" }
    ],
    pickeReferee: {
      id: 0,
      firstName: "",
      secondName: ""
    },
    modalIsOpen: false,
    startDate: new Date(),
    canChangeSeason: CANCHANGESEASON.NO
  };

  componentDidMount() {
    this.getTeamsAllStadiums();
    this.getTeamsAllReferees();
    this.getCurrentSeason();
    if (this.props.leagues.length > 0) {
      this.setState({ league: this.props.leagues[0].id });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.league !== this.state.league) this.getTeamsForLeague(this.state.league);
    if (!prevState.league && this.props.leagues.length > 0) this.setState({ league: this.props.leagues[0].id });
  }

  async getCurrentSeason() {
    const season = await getData(`${ROUTES.SEASONS}/currentSeason`);
    let canChange = CANCHANGESEASON.NO;
    if (season) {
      if (moment().isAfter(moment(season.endDate))) canChange = CANCHANGESEASON.CANEND;
    } else {
      canChange = CANCHANGESEASON.CANSTART;
    }
    this.setState({ canChangeSeason: canChange });
  }

  async getTeamsForLeague(id) {
    let teams = await getData(`${ROUTES.LEAGUES}/${id}/teams`);
    this.setState({ teams: teams });
  }

  async getTeamsAllStadiums(id) {
    let places = await getData(`${ROUTES.PLACES}`);
    this.setState({ places: places });
  }

  async getTeamsAllReferees(id) {
    let referees = await getData(`${ROUTES.REFEREES}`);
    this.setState({ referees: referees });
  }

  async createMatchRequest() {
    try {
      let objectToSend = {
        homeTeamId: this.props.user.teamId,
        awayTeamId: this.state.pickedTeam.id,
        status: "ToAccept",
        placeId: this.state.pickedPlace.id,
        refereeId: this.state.pickeReferee.id,
        matchDate: this.state.startDate
      };

      console.log(objectToSend);
      await postDataWithResponse(ROUTES.MATCHES, objectToSend, { Authorization: this.props.user.token });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleMatchRequest = (teamId, teamName) => {
    const pickedTeamCopy = { ...this.state.pickedTeam };
    pickedTeamCopy.name = teamName;
    pickedTeamCopy.id = teamId;
    this.setState({ pickedTeam: pickedTeamCopy });
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#45A29E";
  };

  closeModal = () => {
    if (this.state.pickeReferee.id == 0) {
      this.setState({ modalIsOpen: false });
      createNotification("error", "Sędzie nie został wybrany!", "Wyzwanie zostało poprawnie stworzone!");
    } else if (this.state.pickedPlace.id == 0) {
      this.setState({ modalIsOpen: false });
      createNotification("error", "Boisko nie zostało wybrane!", "Wyzwanie zostało poprawnie stworzone!");
    } else if (this.state.startDate < new Date()) {
      this.setState({ modalIsOpen: false });
      createNotification("error", "Data nie moze być starsza od dzisiejszej!", "Wyzwanie zostało poprawnie stworzone!");
    } else {
      this.createMatchRequest();
      this.setState({ modalIsOpen: false });
      createNotification("success", "Sędzie lub boisko nie zostało wybrane", "Wyzwanie zostało poprawnie stworzone!");
    }
  };

  renderTable() {
    var toRender = this.state.teams.map((team, i) => {
      let classToUse = i % 2 ? "secondRow" : "firstRow";
      let canSend = this.props.user && this.props.user.isCaptain && team.id != this.props.user.teamId;
      return (
        <tr
          className={classToUse}
          style={{
            backgroundColor: i == 0 ? "#15ff00" : i > this.state.teams.length - 4 ? "#D80000" : undefined
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
              src={"http://localhost:3000/" + team.imgURL}
              style={{
                height: "50px",
                width: "60px",
                verticalAlign: "center",
                align: "middle",
                paddingRight: "10px"
              }}
            />
          </td>
          <td className="BlackLink">
            <Link className="teamLink" to={"panel/team/" + team.id}>
              {team.name}
            </Link>
            {"  "}
          </td>
          <td className="flex buttonCell">
            {canSend && (
              <button class="btn btn-light" onClick={() => this.handleMatchRequest(team.id, team.name)}>
                Wyzwij
              </button>
            )}
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

    return toRender;
  }

  startEndLeagueButtons() {
    if (this.props.user && this.props.user.role === "Admin")
      return (
        <div className="flex buttonOnRight">
          {this.state.canChangeSeason === CANCHANGESEASON.CANSTART && (
            <Button bsStyle="success">Rozpocznij nowy sezon</Button>
          )}
          {this.state.canChangeSeason === CANCHANGESEASON.CANEND && <Button bsStyle="danger">Zakończ sezon</Button>}
        </div>
      );
    return null;
  }

  render() {
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
              {this.startEndLeagueButtons()}
            </div>
          </div>
        </div>
        <table style={{ width: "80%" }}>
          <tr className="headerSection">
            <th>Pozycja</th>
            <th />
            <th>Drużyna</th>
            <th />
            <th>M</th>
            <th>Z</th>
            <th>R</th>
            <th>P</th>
            <th>Bramki</th>
            <th>Punkty</th>
          </tr>
          {this.renderTable()}
        </table>

        {/* MODAL */}
        {/* <button onClick={this.openModal}>Open Modal</button> */}

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h2 ref={subtitle => (this.subtitle = subtitle)}>MECZ PRZECIWKO: {this.state.pickedTeam.name}</h2>
                <h3>Szczegóły wyzwania:</h3>
                <div className="space">
                  <span className="glyphicon glyphicon-calendar" />
                  Data i godzina: &nbsp;
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="yyyy/MM/dd hh:mm"
                    timeCaption="time"
                  />
                </div>
                <div className="space">
                  <span className="glyphicon glyphicon-map-marker" />
                  &nbsp;Boisko do rozegrania meczu: &nbsp;
                  <DropdownButton title={this.state.pickedPlace.place} style={{ marginBottom: 5 }}>
                    {this.state.places.map(place => {
                      return <MenuItem onSelect={() => this.setState({ pickedPlace: place })}>{place.place}</MenuItem>;
                    })}
                  </DropdownButton>
                </div>

                <div className="space">
                  <span className="glyphicon glyphicon-eye-open" />
                  &nbsp; Sędzia spotkania: &nbsp;
                  <DropdownButton
                    title={this.state.pickeReferee.firstName + " " + this.state.pickeReferee.secondName}
                    style={{ marginBottom: 5 }}
                  >
                    {this.state.referees.map(referee => {
                      return (
                        <MenuItem
                          onSelect={() =>
                            this.setState({
                              pickeReferee: referee
                            })
                          }
                        >
                          {referee.firstName + " " + referee.secondName}
                        </MenuItem>
                      );
                    })}
                  </DropdownButton>
                </div>
                <button className="RegisterButton" onClick={this.closeModal}>
                  WYZWIJ
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { leagues: state.leagues, user: state.user };
};

export default connect(mapStateToProps)(LeagueTable);
