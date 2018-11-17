import React, { Component } from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import soccerLogo from "../../assets/images/soccer-logo.png";
import { Route, Link } from "react-router-dom";
import PlayerPanel from "../PlayerPanel/PlayerPanel";
import Register from "../Register/RegisterBox/RegisterBox";
import LeagueTable from "../LeagueTable/LeagueTable";
import LeagueSchedule from "../LeagueSchedule/LeagueSchedule";
import News from "../News/News";
import SingleNews from "../SingleNews/SingleNews";
import TeamPanel from "../TeamPanel/TeamPanel";
import Match from "../Match/Match";
class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar
          inverse
          collapseOnSelect
          style={{
            minHeight: "80px",
            fontSize: "21px",
            color: "white",
            padding: "12px",
            borderRadius: "0px",
            backgroundColor: "#0B0C10"
          }}
        >
          <Navbar.Header
            style={{
              fontSize: "35px"
            }}
          >
            <div>
              <img src={soccerLogo} width="35" height="35" style={{ marginRight: "7px" }} />
              NL3
            </div>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav />
            <Nav pullRight>
              <NavItem eventKey={0}>
                <Link to="/news">Aktualności</Link>
              </NavItem>
              <NavItem eventKey={1} href="#">
                <Link to="/schedule">Terminarz</Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to="/table">Tabela</Link>
              </NavItem>
              <NavItem eventKey={3}>
                <Link to="/panel/team">Panel Druzyny</Link>
              </NavItem>
              <NavItem eventKey={4}>
                <Link to="/panel/player">Panel Zawodnika</Link>
              </NavItem>
              <NavItem eventKey={5}>
                <Link to="/login">Logowanie</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/news" exact component={Match} />
        <Route path="/singleNews" exact component={SingleNews} />
        <Route path="/panel/player" exact component={PlayerPanel} />
        <Route path="/panel/team" exact component={TeamPanel} />
        <Route path="/login" exact component={Register} />
        <Route path="/table" exact component={LeagueTable} />
        <Route path="/schedule" exact component={LeagueSchedule} />
        <Route path="/" exact component={Register} />
      </div>
    );
  }
}

export default NavigationBar;
