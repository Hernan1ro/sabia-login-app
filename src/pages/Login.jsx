import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import sabiaLogo from "../assets/logos/logo_fucsia.png";
import sabiaBanner from "../assets/images/sabiaBanner.png";
import formLogo from "../assets/illustrations/undraw_personal_finance_tqcd.svg";
import { useInputValue } from "../hooks/useInputValue";
import axios from "axios";

const Login = () => {
  const email = useInputValue();
  const password = useInputValue();

  //------------On submit-------------------//
  const handleSubmit = (e) => {
    e.preventDefault();

    //------------ data validation-------------//
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (!testEmail) {
      alert("Correo electrónico no válido");
    } else if (testEmail && password.value.length > 0) {
      const user = { username: email.value, password: password.value };
      onLogin(user);
    }
  };
  //------------- API query ------------//
  const onLogin = (user) => {
    const URL = process.env.API_LOGIN;

    axios
      .post(URL, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <main className="main-login">
      <div className="main-login__container container">
        <div className="main-login-left">
          <a href="https://sabiasyf.com/">
            <img src={sabiaLogo} alt="sabia-logo" />
          </a>
          <img src={sabiaBanner} alt="sabia-family-image" />
        </div>
        <div className="main-login-right">
          <div className="form-container">
            <img src={formLogo} alt="form-logo" />
            <h3>Inicio de sesión</h3>
            <p>
              ¿No tienes una cuenta?{" "}
              <Link to="/register">
                <strong>Registrate</strong>
              </Link>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="email">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  required
                  {...email}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Tu contraseña"
                  required
                  autoComplete="true"
                  {...password}
                />
              </div>
              <button type="submit">Inicia Sesión</button>
            </form>
            <p className="forgot-pass">¿Olvidaste tu contraseña?</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
