import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import sabiaLogo from "../assets/logos/logo_fucsia.png";
import sabiaBanner from "../assets/Images/sabiaBanner.png";
import formLogo from "../assets/illustrations/undraw_personal_finance_tqcd.svg";
import { useInputValue } from "../hooks/useInputValue";
import axios from "axios";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useAccessToken from "../hooks/useAccessToken";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useInputValue();
  const password = useInputValue();
  const { setToken } = useAccessToken();
  const navigate = useNavigate();

  //------------On submit-------------------//
  const handleSubmit = (e) => {
    e.preventDefault();

    //------------ data validation-------------//
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (!testEmail) {
      showError();
    } else if (testEmail && password.value.length > 0) {
      const user = { username: email.value, password: password.value };
      onLogin(user);
    } else {
      showError();
    }
  };
  //------------- API query ------------//
  const onLogin = (user) => {
    setLoading(true);
    // const URL = import.meta.env.VITE_API_LOGIN;
    const URL =
      "http://ec2-3-91-159-6.compute-1.amazonaws.com/api/token/login/";

    axios
      .post(URL, user)
      .then(function (response) {
        handleLogin(response);
        setLoading(false);
      })
      .catch(function (error) {
        setErrorMsg("Password o email incorrecto, intenta nuevamente");
        setLoading(false);
        showError();
      });
  };
  //-------------- Error handler--------------//
  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };
  //--------------- Handle login ----------------//
  const handleLogin = ({ data: { access } }) => {
    setToken(access);
    navigate("/main");
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
              {loading ? (
                <Spinner type="primary" />
              ) : (
                <button type="submit">Inicia Sesión</button>
              )}
            </form>
            {error && <Error type={"primary"} message={errorMsg} />}
            <p className="forgot-pass">¿Olvidaste tu contraseña?</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
