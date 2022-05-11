import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import sabiaLogo from "../assets/logos/logo_verde.png";
import sabiaBanner from "../assets/images/sabiaBanner-green.png";
import formLogo from "../assets/illustrations/undraw_wallet_aym5.svg";
import { useInputValue } from "../hooks/useInputValue";
import axios from "axios";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useAccessToken from "../hooks/useAccessToken";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useInputValue();
  const password = useInputValue();
  const name = useInputValue();
  const lastName = useInputValue();
  const { setNewUser, setToken } = useAccessToken();
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
    } else if (
      testEmail &&
      password.value.length > 0 &&
      password.value.length < 128 &&
      name.value.length < 150 &&
      lastName.value.length < 150
    ) {
      const user = {
        first_name: name.value,
        last_name: lastName.value,
        username: email.value,
        password: password.value,
      };
      onLogin(user);
    } else {
      showError();
    }
  };
  //------------- API query ------------//
  const onLogin = (user) => {
    setLoading(true);
    const URL = import.meta.env.VITE_API_REGISTER;

    axios
      .post(URL, user)
      .then(function (response) {
        handleLogin(response);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        setErrorMsg("Ha habido un error, intentalo nuevamente");
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
  //--------------- Handle register ----------------//
  const handleLogin = ({ data }) => {
    setToken(data.id);
    setNewUser(data);
    navigate("/main");
  };
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
                <input
                  type="text"
                  name="name"
                  placeholder="Nombres"
                  required
                  {...name}
                />
              </div>
              <div className="lastName">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellidos"
                  required
                  {...lastName}
                />
              </div>
              <div className="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  required
                  {...email}
                />
              </div>
              <div className="password">
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
                <Spinner type="secondary" />
              ) : (
                <button type="submit">Registrate</button>
              )}
            </form>
            {error && <Error type={"secondary"} message={errorMsg} />}
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
