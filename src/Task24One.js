import React, { Component } from "react";

class Task24One extends Component {
  state = {
    name: "",
    age: "",
    dob: "",
    contact: "",
    email: "",
    password: "",
    formValid: false,
    errors: {
      nameError: "",
      ageError: "",
      dobError: "",
      contactError: "",
      emailError: "",
      passwordError: "",
    },
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value }, () => {
      switch (id) {
        case "name":
          this.validateName();
          break;
        case "age":
          this.validateAge();
          break;
        case "dob":
          this.validateDob();
          break;
        case "contact":
          this.validateContact();
          break;
        case "email":
          this.validateEmail();
          break;
        case "password":
          this.validatePassword();
          break;
        default:
          break;
      }
    });
  };

  validateName = () => {
    const { name, errors } = this.state;
    let nameError = "";
    let formValid = true;

    if (name.trim() === "") {
      nameError = "This is required";
      formValid = false;
    } else if (name.trim().length < 3) {
      nameError = "This is invalid";
      formValid = false;
    }

    this.setState({ errors: { ...errors, nameError }, formValid });
    return formValid;
  };

  validateAge = () => {
    const { age, errors } = this.state;
    let ageError = "";
    let formValid = true;

    if (age.trim() === "") {
      ageError = "This is required";
      formValid = false;
    } else if (isNaN(age) || age.trim().length > 3) {
      ageError = "This is invalid";
      formValid = false;
    }

    this.setState({ errors: { ...errors, ageError }, formValid });
    return formValid;
  };

  validateDob = () => {
    const { dob, errors } = this.state;
    let dobError = "";
    let formValid = true;

    if (dob.trim() === "") {
      dobError = "This is required";
      formValid = false;
    }

    this.setState({ errors: { ...errors, dobError }, formValid });
    return formValid;
  };

  validateContact = () => {
    const { contact, errors } = this.state;
    let contactError = "";
    let formValid = true;

    if (contact.trim() === "") {
      contactError = "This is required";
      formValid = false;
    } else if (contact.trim().length < 10) {
      contactError = "This is invalid";
      formValid = false;
    }

    this.setState({ errors: { ...errors, contactError }, formValid });
    return formValid;
  };

  validateEmail = () => {
    const { email, errors } = this.state;
    let emailError = "";
    let formValid = true;
    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

    if (!emailRegex.test(email)) {
      emailError = "This is invalid!";
      formValid = false;
    }

    this.setState({ errors: { ...errors, emailError }, formValid });
    return formValid;
  };

  validatePassword = () => {
    const { password, errors } = this.state;
    let passwordError = "";
    let formValid = true;

    if (password.trim() === "") {
      passwordError = "This is required";
      formValid = false;
    } else if (password.trim().length < 6) {
      passwordError = "Password must be at least 6 characters";
      formValid = false;
    }

    this.setState({ errors: { ...errors, passwordError }, formValid });
    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateName() &&
      this.validateAge() &&
      this.validateDob() &&
      this.validateContact() &&
      this.validateEmail() &&
      this.validatePassword()
    ) {
      alert("Form is submitted");

      const { name, age, dob, contact, email, password } = this.state;
      const user = { name, age, dob, contact, email, password };
      this.props.add(user);

      this.setState({
        name: "",
        age: "",
        dob: "",
        contact: "",
        email: "",
        password: "",
      });
    }
  };

  render() {
    const { name, age, dob, contact, email, password, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Signup Form</h2>
        <label>Enter Name</label>
        <input
          type="text"
          placeholder="Please enter name"
          onChange={this.handleChange}
          id="name"
          value={name}
        />
        <p>{errors.nameError}</p>

        <label>Enter Age</label>
        <input
          type="text"
          placeholder="Please enter age"
          onChange={this.handleChange}
          id="age"
          value={age}
        />
        <p>{errors.ageError}</p>

        <label>Enter Date of Birth</label>
        <input
          type="date"
          placeholder="Please enter date of birth"
          onChange={this.handleChange}
          id="dob"
          value={dob}
        />
        <p>{errors.dobError}</p>

        <label>Enter Contact</label>
        <input
          type="text"
          placeholder="Please enter contact"
          onChange={this.handleChange}
          id="contact"
          value={contact}
        />
        <p>{errors.contactError}</p>

        <label>Enter Email</label>
        <input
          type="text"
          placeholder="Please enter email"
          onChange={this.handleChange}
          id="email"
          value={email}
        />
        <p>{errors.emailError}</p>

        <label>Enter Password</label>
        <input
          type="password"
          placeholder="Please enter password"
          onChange={this.handleChange}
          id="password"
          value={password}
        />
        <p>{errors.passwordError}</p>

        <button>Submit</button>
      </form>
    );
  }
}

export default Task24One;
