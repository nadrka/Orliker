import React, { Component } from "react";
import "./ClubDetails.css";
import apoelPicture from "../../../assets/images/apoel.png";

class ClubDetails extends Component {
  state = {};
  render() {
    return (
      <div className="ClubDetails">
        <div>
          <img src={apoelPicture} width="150" height="150" />
        </div>
        <div className="Span">
          <span>Apoel Morena</span>
        </div>
        <div className="Span">
          <span>Gdańsk - 1 liga</span>
        </div>
      </div>
    );
  }
}

export default ClubDetails;
