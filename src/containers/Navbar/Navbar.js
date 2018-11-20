import React, { Component } from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import soccerLogo from "../../assets/images/soccer-logo.png";
import { Route, Link, NavLink } from "react-router-dom";
import PlayerPanel from "../PlayerPanel/PlayerPanel";
import Register from "../Register/RegisterBox/RegisterBox";
import LeagueTable from "../LeagueTable/LeagueTable";
import LeagueSchedule from "../LeagueSchedule/LeagueSchedule";
import News from "../News/News";
import SingleNews from "../SingleNews/SingleNews";
import TeamPanel from "../TeamPanel/TeamPanel";
import Match from "../Match/Match";
import TeamList from "../TeamList/TeamList";
import "../../components/UI/Link/Link.css";
class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <div className="NavLink">
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
              <img
                src={soccerLogo}
                width="35"
                height="35"
                style={{ marginRight: "7px" }}
              />
              NL3
            </div>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav />
            <Nav pullRight>
              <NavItem eventKey={0}>
                <NavLink to="/news">Aktualności</NavLink>
              </NavItem>
              <NavItem eventKey={1}>
                <NavLink to="/schedule">Terminarz</NavLink>
              </NavItem>
              <NavItem eventKey={2}>
                <NavLink to="/table">Tabela</NavLink>
              </NavItem>
              <NavItem eventKey={3}>
                <NavLink to="/panel/team">Panel Druzyny</NavLink>
              </NavItem>
              <NavItem eventKey={4}>
                <NavLink to="/panel/player">Panel Zawodnika</NavLink>
              </NavItem>
              <NavItem eventKey={5}>
                <NavLink to="/login">Logowanie</NavLink>
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
        <Route path="/siemka" exact component={Match} />

        <Route path="/schedule" exact component={LeagueSchedule} />
        <Route path="/" exact component={Register} />
      </div>
    );
  }
}

export default NavigationBar;
