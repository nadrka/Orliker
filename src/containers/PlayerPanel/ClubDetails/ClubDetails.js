import React, { Component } from "react";
import "./ClubDetails.css";
import apoelPicture from "../../../assets/images/apoel.png";
import { Link } from "react-router-dom";
import TeamPanel from "../../TeamPanel/TeamPanel";
import Match from "../../Match/Match";
class ClubDetails extends Component {
  state = {};
  render() {
    return (
      <div className="ClubDetails">
        <div>
          <img src={apoelPicture} width="150" height="150" />
        </div>
        <div className="Span">
          <span>
            <Link to="/panel/team">Apoel Morena</Link>
          </span>
        </div>
        <div className="Span">
          <span>Gdańsk - 1 liga</span>
        </div>
      </div>
    );
  }
}

export default ClubDetails;
