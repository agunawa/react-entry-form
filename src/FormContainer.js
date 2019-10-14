import React, { Component } from "react";
import FormComponent from "./components/FormComponent";

const initialState = {
  fullName: "",
  department: "",
  quote: "",
  isDarkTheme: false,
  genericError: ""
};

class FormContainer extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  validate = () => {
    let genericError = "";
    if (!this.state.fullName || !this.state.department || !this.state.quote) {
      genericError = "Before continuing all fields must be filled.";
    }

    if (genericError) {
      this.setState({ genericError });
      return false;
    }
    return true;
  };

  handleClick = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
  };

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        {...this.state}
      />
    );
  }
}

export default FormContainer;
