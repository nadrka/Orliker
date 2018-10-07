import React, { Component } from "react";
import Input from "../UI/input/Input.js";
class Form extends Component {
  handleInputChanged = (event, inputIdentifier) => {
    this.props.onChanged(event.target.value, inputIdentifier);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.props.fields) {
      formElementsArray.push({
        id: key,
        config: this.props.fields[key]
      });
    }
    let form = (
      <form onSubmit={this.props.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.handleInputChanged(event, formElement.id)}
          />
        ))}
        {/* <Button btnType="Success" disabled={!this.props.state.formIsValid}>
        //   ORDER
        // </Button> */}
      </form>
    );
    return form;
  }
}

export default Form;
