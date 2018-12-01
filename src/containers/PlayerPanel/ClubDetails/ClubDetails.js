import React, { Component } from "react";
import "./ClubDetails.css";
import apoelPicture from "../../../assets/images/apoel.png";
import { Link } from "react-router-dom";
import TeamPanel from "../../TeamPanel/TeamPanel";
import Match from "../../Match/Match";
class ClubDetails extends Component {
  render() {
    if (this.props.team)
      return (
        <div className="ClubDetails">
          <div>
            <img src={apoelPicture} width="150" height="150" />
          </div>
          <div className="Span Link">
            <span>
              <Link to={"/panel/team/" + this.props.team.id}>{this.props.team.name}</Link>
            </span>
          </div>
          <div className="Span">
            <span>
              <Link to="/table">Gdańsk - {this.props.team.currentLegue.leagueNumber} liga</Link>
            </span>
          </div>
        </div>
      );
    return null;
  }
}

export default ClubDetails;
