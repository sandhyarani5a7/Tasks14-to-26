import React, { useState } from "react";

const Task24Two = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
      validateEmail(value);
    }
    if (id === "password") {
      setPassword(value);
      validatePassword(value);
    }
  };

  const validateEmail = (email) => {
    let emailError = "";
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      emailError = "This is invalid!";
    }

    setError((prevError) => ({ ...prevError, emailError }));
    return emailError === "";
  };

  const validatePassword = (password) => {
    let passwordError = "";

    if (password.trim() === "") {
      passwordError = "This is required";
    } else if (password.trim().length < 6) {
      passwordError = "Password must be at least 6 characters";
    }

    setError((prevError) => ({ ...prevError, passwordError }));
    return passwordError === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      setSubmittedData({ email, password });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <label>Enter Email</label>
        <input
          type="text"
          placeholder="Please enter email"
          onChange={handleChange}
          id="email"
          value={email}
        />
        <p>{error.emailError}</p>

        <label>Enter Password</label>
        <input
          type="password"
          placeholder="Please enter password"
          onChange={handleChange}
          id="password"
          value={password}
        />
        <p>{error.passwordError}</p>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>User Entered Data:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Task24Two;
