import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import sabiaLogo from "../assets/logos/logo_fucsia.png";
import sabiaBanner from "../assets/images/sabiaBanner.png";
import formLogo from "../assets/illustrations/undraw_personal_finance_tqcd.svg";
import { useInputValue } from "../hooks/useInputValue";

const Login = () => {
  const email = useInputValue();
  const password = useInputValue();

  //------------On submit-------------------//
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dando submit");
    console.log(email.value);
    console.log(password.value);
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
