import React, { Component } from "react";
import TeamInvitation from "../../components/TeamList/Invitation/TeamInvitation";
import TeamRequest from "../../components/TeamList/Request/TeamRequest";
import Searchbar from "../../components/UI/Searchbar/Searchbar";
import "./TeamList.css";
class TeamList extends Component {
  state = {};
  handleSearchbarChange = inputValue => {
    console.log(inputValue);
  };
  render() {
    return (
      <div>
        <div className="SearchbarBar">
          <Searchbar onSerchbarChanged={this.handleSearchbarChange} />
        </div>

        <TeamInvitation />
        <TeamRequest />
      </div>
    );
  }
}

export default TeamList;
