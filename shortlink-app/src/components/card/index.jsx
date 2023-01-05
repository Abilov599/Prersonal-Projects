import React from "react";
import "./index.scss";

const Card = ({ icon, h1Text, pText, marginTop }) => {
  return (
    <div style={{ marginTop: `${marginTop}` }} className="card">
      <div className="card-icon">
        <img src={icon} alt="" />
      </div>
      <div className="card-body">
        <h1>{h1Text}</h1>
        <p>{pText}</p>
      </div>
    </div>
  );
};

export default Card;
