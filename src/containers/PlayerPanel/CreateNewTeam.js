import React from "react";
import "./ClubDetails/ClubDetails.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
const CreateNewTeam = props => {
  return (
    <div className="ClubDetails">
      <div className="noTeamLabel">Nie masz drużyny</div>
      <MuiThemeProvider>
        <RaisedButton label="Stwórz własną" onClick={props.onOpen} />
        <div className="lineSeparator" />
        <RaisedButton
          label="Dołącz do istniejącej"
          onClick={props.onJoinRequest}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default CreateNewTeam;
