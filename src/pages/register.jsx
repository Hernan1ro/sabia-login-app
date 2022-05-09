import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import sabiaLogo from "../assets/logos/logo_verde.png";
import sabiaBanner from "../assets/images/sabiaBanner-green.png";
import formLogo from "../assets/illustrations/undraw_wallet_aym5.svg";

const Register = () => {
  return (
    <main className="main-register">
      <div className="main-register__container container">
        <div className="main-register-left">
          <a href="https://sabiasyf.com/">
            <img src={sabiaLogo} alt="sabia-logo" />
          </a>
          <img src={sabiaBanner} alt="sabia-family-image" />
        </div>
        <div className="main-register-right">
          <div className="form-container">
            <img src={formLogo} alt="form-logo" />
            <h3>Registro</h3>
            <p>
              Unete y empieza a prosperar tus <strong>Finanzas</strong>
            </p>
            <form action="">
              <div className="email">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  required
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
                />
              </div>
              <button type="submit">Inicia Sesión</button>
            </form>
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/">
              <p className="login-link">Inicia sesión aquí</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
