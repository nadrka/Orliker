import React, { Component } from "react";
import "./Team.css";
import profilePicture from "../../../assets/images/profilePicture.jpg";
import apoel from "../../../assets/images/apoel.png";
import { Link } from "react-router-dom";
const team = props => {
  let teamNameWithLogo;
  if (props.isPlayingHome) {
    teamNameWithLogo = (
      <div className="Team GrayLink">
        <Link to="/panel/team" className="Result">
          {props.name}
        </Link>
        <img src={"http://localhost:3000/" + props.imgURL} width="52" height="55" style={{ marginLeft: "15px" }} />
      </div>
    );
  } else {
    teamNameWithLogo = (
      <div className="Team GrayLink">
        <img src={"http://localhost:3000/" + props.imgURL} width="52" height="55" style={{ marginRight: "15px" }} />
        <Link to="/panel/team" className="Result">
          {props.name}
        </Link>
      </div>
    );
  }
  return <div>{teamNameWithLogo}</div>;
};

export default team;
