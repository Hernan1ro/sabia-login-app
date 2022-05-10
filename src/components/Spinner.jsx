import React from "react";
import "../styles/Spinner.css";

const Spinner = ({ type }) => {
  return (
    <div className="lds-ring">
      <div className={type}></div>
      <div className={type}></div>
      <div className={type}></div>
      <div className={type}></div>
    </div>
  );
};

export default Spinner;
