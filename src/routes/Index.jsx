import React from "react";
import { Link } from "react-router-dom";
function Index() {
  return (
    <>
      <h1>Welcome Back!</h1>
      <p>Please Login</p>
      <form action="POST"></form>
      <p>Don't have an account? Sign up <Link to='/signup'>here</Link></p>
    </>
  );
}

export default Index;
