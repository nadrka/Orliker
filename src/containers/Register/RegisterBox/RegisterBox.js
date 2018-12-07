import React, { Component } from "react";
import "./RegisterBox.css";
import Form from "../../../components/Form/Form";
import { postDataWithResponse } from "../../../utils/NetworkFunctions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../../actions/actions";
import { ROUTES } from "../../../utils/Constants";

class RegisterBox extends Component {
  state = {
    loginForm: {
      fields: {
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Adres email"
          },
          value: "",
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Hasło"
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
    },
    registrationForm: {
      fields: {
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Adres email"
          },
          value: "",
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        firsName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Imię"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        secondName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Nazwisko"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Hasło"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        repeatPassword: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Powtórz hasło"
          },
          value: "",
          validation: {
            required: true,
            isEqual: true
          },
          valid: false,
          touched: false
        }
      },
      formIsValid: false
    },
    isLogin: true
  };

  handleLoginButtonClicked = () => {
    this.setState({ isLogin: true });
  };
  handleRegistrationButtonClicked = () => {
    this.setState({ isLogin: false });
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

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      //isValid = pattern.test(value) && isValid;
      isValid = true && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isEqual) {
      const fields = this.state.registrationForm.fields;
      isValid = fields.password.value == fields.repeatPassword.value && isValid;
    }
    return isValid;
  }

  updateValidation = (inputIdentifier, form) => {
    let updatedOrderForm = {
      ...form
    };
    const updatedFormElement = {
      ...updatedOrderForm.fields[inputIdentifier]
    };
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm.fields[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm.fields) {
      formIsValid = updatedOrderForm.fields[inputIdentifier].valid && formIsValid;
    }
    updatedOrderForm.formIsValid = formIsValid;
    this.setState({
      form: updatedOrderForm
    });
  };

  isFormValid = () => {
    const form = this.state.isLogin ? this.state.loginForm : this.state.registrationForm;

    let formIsValid = true;

    for (let inputIdentifier in form.fields) {
      formIsValid = form.fields[inputIdentifier].valid && formIsValid;
    }
    return formIsValid;
  };

  handleInputChanged = (value, inputIdentifier) => {
    const form = this.state.isLogin ? this.state.loginForm : this.state.registrationForm;

    const updatedOrderForm = {
      ...form
    };
    const updatedFormElement = {
      ...updatedOrderForm.fields[inputIdentifier]
    };
    updatedFormElement.value = value;
    updatedOrderForm.fields[inputIdentifier] = updatedFormElement;

    this.setState({
      form: updatedOrderForm
    });
    this.updateValidation(inputIdentifier, form);
  };

  handleRegistration = () => {
    //if (!this.isFormValid()) return;
    if (this.state.isLogin) {
      this.login();
    } else {
      this.register();
    }
  };

  login = async () => {
    let data = {
      // login: this.state.loginForm.fields.email.value,
      // password: this.state.loginForm.fields.password.value,
      login: "karol",
      password: "12345"
    };
    console.log(data);
    try {
      let response = await postDataWithResponse(ROUTES.AUTH, data, {});
      this.props.setUser(response);
      this.props.history.push("/panel/player/" + response.id);
    } catch (error) {
      console.log(error);
    }
  };

  register = () => {
    let data = {
      firstName: this.state.registrationForm.fields.firsName.value,
      secondName: this.state.registrationForm.fields.secondName.value,
      login: this.state.registrationForm.fields.email.value,
      password: this.state.registrationForm.fields.password.value
    };
    postDataWithResponse("users", data)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const form = this.state.isLogin ? (
      <Form fields={this.state.loginForm.fields} onChanged={this.handleInputChanged} />
    ) : (
      <Form fields={this.state.registrationForm.fields} onChanged={this.handleInputChanged} />
    );

    return (
      <div className="RegisterBox">
        <div>
          <h4>Zaloguj się, aby dołączyć do drużyny lub założyć własną!</h4>
          <button onClick={this.handleLoginButtonClicked}>Zaloguj się</button>{" "}
          <button onClick={this.handleRegistrationButtonClicked}>Załóż konto</button>
        </div>
        {form}
        <button className="RegisterButton" onClick={this.handleRegistration}>
          {this.state.isLogin ? "Zaloguj się" : "Zarejestruj się"}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => {
      dispatch(setUser(user));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RegisterBox)
);
