import React, { Component } from "react";
import Modal from "react-modal";
import App from "../../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropdownButton, MenuItem } from "react-bootstrap";
import "./MatchRequest.css";
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "45%",
    width: "35%"
  }
};

Modal.setAppElement(App);
class MatchRequest extends Component {
  state = {
    places: [{ name: "ZADUPIE" }, { name: "Decathlon" }],
    pickedPlace: null,
    referees: [{ name: "Janusz Grzyb" }, { name: "Marian Paździoch" }],
    pickeReferee: null,
    modalIsOpen: false,
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="CenterContent">
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              MECZ PRZECIWKO: HANZA LIDER
            </h2>
            <h3>Szczegóły wyzwania:</h3>
            <div className="space">
              <span className="glyphicon glyphicon-calendar" />
              Data i godzina: &nbsp;
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </div>
            <div className="space">
              <span className="glyphicon glyphicon-map-marker" />
              &nbsp;Boisko do rozegrania meczu: &nbsp;
              <DropdownButton
                title={this.state.pickedPlace}
                style={{ marginBottom: 5 }}
              >
                {this.state.places.map(place => {
                  return (
                    <MenuItem
                      onSelect={() =>
                        this.setState({ pickedPlace: place.name })
                      }
                    >
                      {place.name}
                    </MenuItem>
                  );
                })}
              </DropdownButton>
            </div>

            <div className="space">
              <span className="glyphicon glyphicon-eye-open" />
              &nbsp; Sędzia spotkania: &nbsp;
              <DropdownButton
                title={this.state.pickeReferee}
                style={{ marginBottom: 5 }}
              >
                {this.state.referees.map(referee => {
                  return (
                    <MenuItem
                      onSelect={() =>
                        this.setState({ pickeReferee: referee.name })
                      }
                    >
                      {referee.name}
                    </MenuItem>
                  );
                })}
              </DropdownButton>
            </div>
            <button className="RegisterButton" onClick={this.closeModal}>
              WYZWIJ
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MatchRequest;
