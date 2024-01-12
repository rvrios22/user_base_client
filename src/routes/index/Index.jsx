import React, { useState } from "react";
import Login from "../../components/login/Login";
import LoginImage from "../../components/loginImage/LoginImage";
import './index.css'
function Index() {
  return (
    <div className="index-container">
      <Login />
      <LoginImage />
    </div>
  );
}

export default Index;
