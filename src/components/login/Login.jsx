import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "rr@mail.com", password: "pass" });
  const navigate = useNavigate();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  };

  const handleEmailChange = (e) => {
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

  const setTokenToLocalStorage = (token) => {
    localStorage.setItem("token", token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password to login");
    }
    fetch("http://localhost:8080/login", requestOptions)
      .then((res) => res.json())
      .then((payload) => {
        console.log(payload);
        const token = payload.data.token;
        setTokenToLocalStorage(token);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(setUser({ email: "", password: "" }));
  };

  return (
    <>
      <h1>Welcome Back!</h1>
      <p>Please Login</p>
      <form action="POST">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handlePasswordChannge}
          required
        />
        <input type="submit" value="Login" onClick={handleSubmit} />
      </form>
      <p>
        Don't have an account? Sign up <Link to="/signup">here</Link>
      </p>
    </>
  );
}

export default Login;
