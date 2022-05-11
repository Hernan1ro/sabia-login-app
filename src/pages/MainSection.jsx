import "../styles/MainSection.css";
import sabiaLogo from "../assets/logos/logo_fucsiablanco.png";
import messageLogo from "../assets/logos/message.svg";
import notificationLogo from "../assets/logos/notification.svg";
import successLogo from "../assets/logos/success.svg";
import userImage from "../assets/logos/user.svg";
import useAccessToken from "../hooks/useAccessToken";

const Main = () => {
  const { setToken, newUser, setNewUser } = useAccessToken();
  const { first_name, last_name, email } = newUser;
  //---------- log out action -----------//
  const handleLogOut = () => {
    setToken("");
    setNewUser({});
  };
  return (
    <>
      <nav className="main-nav">
        <div className="main-nav__container container">
          <a href="https://sabiasyf.com/">
            <img src={sabiaLogo} alt="Sabia-logo" />
          </a>
          <div className="account-options">
            <img src={notificationLogo} alt="notifications" />
            <img src={messageLogo} alt="messages" />
            <a onClick={handleLogOut}>Cerrar sesión</a>
          </div>
        </div>
      </nav>
      <main className="main-content container">
        <div className="profile-details fadeInUp">
          <img src={userImage} alt="profile-image" />
          <h3>{first_name ? first_name + " " + last_name : "User Name"}</h3>
          <span>{email ? email : "Useremail@example.com"}</span>
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
