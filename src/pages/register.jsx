import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import sabiaLogo from "../assets/logos/logo_verde.png";
import sabiaBanner from "../assets/images/sabiaBanner-green.png";
import formLogo from "../assets/illustrations/undraw_wallet_aym5.svg";
import { useInputValue } from "../hooks/useInputValue";
import axios from "axios";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const email = useInputValue();
  const password = useInputValue();
  const name = useInputValue();
  const lastName = useInputValue();

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
            <form onSubmit={handleSubmit}>
              <div className="name">
                <label htmlFor="name">Nombres</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombres"
                  required
                  {...name}
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Apellidos</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellidos"
                  required
                  {...lastName}
                />
              </div>
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
