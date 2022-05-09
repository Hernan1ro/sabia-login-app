import React from "react";
import "../styles/Login.css";
import sabiaLogo from "../assets/logos/logo_fucsia.png";
import sabiaBanner from "../assets/images/sabiaBanner.png";

const Login = () => {
  return (
    <main className="main">
      <div className="main__container container">
        <div className="main-left">
          <img src={sabiaLogo} alt="sabia-logo" />
          <img src={sabiaBanner} alt="sabia-family-image" />
        </div>
        <div className="main-right">
          <div className="form-container"></div>
        </div>
      </div>
    </main>
  );
};

export default Login;
