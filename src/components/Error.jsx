import errorImg from "../assets/illustrations/error.png";
import "../styles/Error.css";

const Error = ({ type }) => {
  return (
    <div className="error-msg">
      <em className={type}>
        Hubo un error al iniciar sesión, intena nuevamente
      </em>
      <img src={errorImg} alt="error-image" />
    </div>
  );
};

export default Error;
