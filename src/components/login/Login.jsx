import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
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
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(setUser({ email: "", password: "" }));
  };

  return (
    <main>
      <h1 className="login-header header-clamp">Welcome to Your Budget Tool!</h1>
      <form action="POST" className="login-form text-clamp">
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
        <input
          className="login-button"
          type="submit"
          value="Login"
          onClick={handleSubmit}
        />
      </form>
      <p>
        Don't have an account? Sign up <Link to="/signup">here</Link>
      </p>
    </main>
  );
}

export default Login;
