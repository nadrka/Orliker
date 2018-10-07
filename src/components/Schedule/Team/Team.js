import React, { Component } from "react";
import "./Team.css";
import profilePicture from "../../../assets/images/profilePicture.jpg";
import apoel from "../../../assets/images/apoel.png";
const team = props => {
  let teamNameWithLogo;
  if (props.isPlayingHome) {
    teamNameWithLogo = (
      <div className="Team">
        {props.name}
        <img
          src={apoel}
          width="50"
          height="50"
          style={{ marginLeft: "15px" }}
        />
      </div>
    );
  } else {
    teamNameWithLogo = (
      <div className="Team">
        <img
          src={apoel}
          width="50"
          height="50"
          style={{ marginRight: "15px" }}
        />
        {props.name}
      </div>
    );
  }
  return <div>{teamNameWithLogo}</div>;
};

export default team;
