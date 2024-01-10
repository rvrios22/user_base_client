import React, { useState } from "react";

function SignupForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    }),
  };

  const handleFirstNameChannge = (e) => {
    setUser({
      ...user,
      firstName: e.target.value,
    });
  };
  const handleLastNameChannge = (e) => {
    setUser({
      ...user,
      lastName: e.target.value,
    });
  };
  const handleEmailChannge = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const handlePasswordChannge = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };
  const handleConfirmPasswordChannge = (e) => {
    setUser({
      ...user,
      confirmPassword: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    fetch("http://localhost:8080/signup", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
      );
  };

  return (
    <div>
      <h1>Create an Account</h1>
      <form method="POST">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleFirstNameChannge}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleLastNameChannge}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={handleEmailChannge}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handlePasswordChannge}
        />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleConfirmPasswordChannge}
        />
        <input type="submit" value="Sign Up" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default SignupForm;
