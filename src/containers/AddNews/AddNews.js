import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Field, Button } from "react-bootstrap";
import { postDataWithoutResponse } from "../../utils/NetworkFunctions";
import { ROUTES } from "../../utils/Constants";
import { connect } from "react-redux";

class AddNews extends Component {
  async submit(event) {
    event.preventDefault();
    await postDataWithoutResponse(
      ROUTES.NEWSES,
      { title: event.target.elements.title.value, content: event.target.elements.content.value },
      { Authorization: this.props.user.token }
    );
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="flex columnFlex">
        <div className="flex topSection" style={{ justifyContent: "center" }}>
          <div className="flex class">
            <div className="bigFontBigMargin">Dodaj nowy post</div>
          </div>
        </div>
        <div className="bottomSection">
          <form onSubmit={this.submit.bind(this)}>
            <FormGroup controlId="title">
              <ControlLabel>Tytuł</ControlLabel>
              <FormControl type="text" placeholder="tytuł" />
            </FormGroup>
            <FormGroup controlId="content">
              <ControlLabel>Treść</ControlLabel>
              <FormControl componentClass="textarea" placeholder="treść" />
            </FormGroup>

            <Button type="submit">Dodaj</Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(AddNews);
