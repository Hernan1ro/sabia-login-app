import errorImg from "../assets/illustrations/error.png";
import "../styles/Error.css";

const Error = ({ type, message }) => {
  return (
    <div className="error-msg">
      <em className={type}>{message}</em>
      <img src={errorImg} alt="error-image" />
    </div>
  );
};

export default Error;
