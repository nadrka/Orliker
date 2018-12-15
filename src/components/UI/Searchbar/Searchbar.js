import React, { Component } from "react";
import "./Searchbar.css";
class Searchbar extends Component {
  state = {
    inputValue: ""
  };
  updateInputValue(evt) {
    // console.log(evt.target.value);
    this.setState({
      inputValue: evt.target.value
    });
  }

  searchFor = () => {
    // console.log(this.state.inputValue);
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onSerchbarChanged(this.state.inputValue);
    }
  };

  render() {
    return (
      <div id="custom-search-input">
        <div class="input-group col-md-12">
          <input
            type="text"
            class="form-control input-lg"
            placeholder="Szukaj..."
            onChange={evt => this.updateInputValue(evt)}
            onKeyPress={this.handleKeyPress}
          />
          <span class="input-group-btn" onClick={() => this.props.onSerchbarChanged(this.state.inputValue)}>
            <button class="btn btn-info btn-lg" type="button">
              <i class="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Searchbar;
