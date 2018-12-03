import React, { Component } from "react";
import "./PlayerDetails.css";
import PlayerDetail from "../../../components/PlayerDetail/PlayerDetail";
import { connect } from "react-redux";
import { putData } from "../../../utils/NetworkFunctions";
import { ROUTES } from "../../../utils/Constants";
import { changeName, changePlayer } from "../../../actions/actions";

const labels = {
  name: {
    title: "Imię i nazwisko: "
  },
  number: {
    title: "Numer: "
  },
  position: {
    title: "Pozycja: "
  },
  strongerFoot: {
    title: "Lepsza noga: "
  }
};
class PlayerDetails extends Component {
  async changePlayer(toChange, value) {
    try {
      let objToSend = {};
      if (toChange === "name") {
        var names = value.split(" ", 2);
        console.log("First name: " + names[0]);
        this.props.changeName(names[0], names[1]);
        objToSend["firstName"] = names[0];
        objToSend["secondName"] = names[1];
      } else {
        if (toChange === "number") {
          this.props.changePlayer(toChange, parseInt(value));
          objToSend[toChange] = parseInt(value);
        } else {
          this.props.changePlayer(toChange, value);
          objToSend[toChange] = value;
        }
      }
      await putData(ROUTES.PLAYERS, objToSend, { Authorization: this.props.loggedUser.token });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const transformedPlayerDetails = Object.keys({ ...labels }).map(key => {
      let value = "";
      if (this.props.player) {
        if (key === "name") value = `${this.props.player.user.firstName} ${this.props.player.user.secondName}`;
        else value = this.props.player[key];
      }
      /*console.log(this.props.player);
      console.log(this.props.loggedUser);*/
      return (
        <PlayerDetail
          key={key}
          serverKeyName={key}
          name={labels[key].title}
          value={value}
          canChange={
            this.props.loggedUser && this.props.player && this.props.player.id == this.props.loggedUser.player.id
          }
          onChange={value => {
            this.changePlayer(key, value);
          }}
        />
      );
    });
    return <div className="PlayerDetails">{transformedPlayerDetails}</div>;
  }
}

const mapStateToProps = state => {
  return { loggedUser: state.user };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: (firstName, secondName) => {
      dispatch(changeName(firstName, secondName));
    },
    changePlayer: (param, value) => {
      dispatch(changePlayer(param, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerDetails);
