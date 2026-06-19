import React from "react";
import "../styles/c.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="first-content">
          <span>{props.f}</span>
        </div>
        <div className="second-content">
          <span>{props.s}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
