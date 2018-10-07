import React, { Component } from "react";
import Form from "../../components/Form/Form";
import "./PlayerDetailsForm.css";
class PlayerDetailsForm extends Component {
  state = {
    detailsForm: {
      fields: {
        firstName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "First Name"
          },
          value: "",
          validation: {
            required: true,
            minLength: 3,
            maxLength: 20
          },
          valid: false,
          touched: false
        },
        secondName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Second Name"
          },
          value: "",
          validation: {
            required: true,
            minLength: 3,
            maxLength: 20
          },
          valid: false,
          touched: false
        },
        height: {
          elementType: "input",
          elementConfig: {
            type: "number",
            placeholder: "Height"
          },
          value: "",
          validation: {
            required: true,
            minValue: 130,
            maxValue: 220
          },
          valid: false,
          touched: false
        },
        weight: {
          elementType: "input",
          elementConfig: {
            type: "number",
            placeholder: "Weight"
          },
          value: "",
          validation: {
            required: true,
            minValue: 40,
            maxValue: 130
          },
          valid: false,
          touched: false
        },
        position: {
          elementType: "select",
          elementConfig: {
            label: "Postion: ",
            options: [
              { value: "goalkeeper", displayValue: "Goalkeeper" },
              { value: "defender", displayValue: "Defender" },
              { value: "midfielder", displayValue: "Midfielder" },
              { value: "striker", displayValue: "Striker" }
            ]
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        strongerFoot: {
          elementType: "select",
          elementConfig: {
            label: "Stronger foot: ",
            options: [
              { value: "leftFoot", displayValue: "Left foot" },
              { value: "rightFoot", displayValue: "Right foot" },
              { value: "bothFoot", displayValue: "Both foot" }
            ]
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      },
      formIsValid: false
    }
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.maxValue) {
      isValid = value <= rules.maxValue && isValid;
    }

    if (rules.minValue) {
      isValid = value >= rules.minValue && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }

  handleInputChanged = (value, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.detailsForm };
    const updatedFormElement = {
      ...updatedOrderForm.fields[inputIdentifier]
    };
    updatedFormElement.value = value;

    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm.fields[inputIdentifier] = updatedFormElement;
    this.setState({
      detailsForm: updatedOrderForm
    });
  };
  render() {
    return (
      <div className="PlayerDetailsBox">
        Change your details settings (It will update automatically):
        <div className="PlayerDetailsForm">
          <Form
            fields={this.state.detailsForm.fields}
            onChanged={this.handleInputChanged}
          />
        </div>
      </div>
    );
  }
}

export default PlayerDetailsForm;
