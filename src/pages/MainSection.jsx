import { Link } from "react-router-dom";
import "../styles/MainSection.css";
import sabiaLogo from "../assets/logos/logo_fucsiablanco.png";
import messageLogo from "../assets/logos/message.svg";
import notificationLogo from "../assets/logos/notification.svg";
import successLogo from "../assets/logos/success.svg";
import userImage from "../assets/logos/user.svg";

const Main = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="main-nav__container container">
          <Link to="https://sabiasyf.com/">
            <img src={sabiaLogo} alt="Sabia-logo" />
          </Link>
          <div className="account-options">
            <img src={notificationLogo} alt="notifications" />
            <img src={messageLogo} alt="messages" />
            <p>Cerrar sesión</p>
          </div>
        </div>
      </nav>
      <main className="main-content container">
        <div className="profile-details fadeInUp">
          <img src={userImage} alt="profile-image" />
          <h3>User Name</h3>
          <span>Useremail@example.com</span>
          <button>Edit your profile</button>
        </div>
        <div className="activity-section fadeInUp">
          <h2>Actividad</h2>
          <div className="login-notification">
            <span>Inicio de sesión exitoso!</span>
            <img src={successLogo} alt="success-icon" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
