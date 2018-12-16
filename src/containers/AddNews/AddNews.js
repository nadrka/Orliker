import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Field, Button } from "react-bootstrap";

class AddNews extends Component {
  render() {
    return (
      <div className="flex columnFlex">
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="bigFontBigMargin">Dodaj nowy post</div>
          </div>
        </div>
        <div className="bottomSection">
          <form>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Tytuł</ControlLabel>
              <FormControl type="text" placeholder="tytuł" />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Treść</ControlLabel>
              <FormControl componentClass="textarea" placeholder="treść" />
            </FormGroup>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNews;
