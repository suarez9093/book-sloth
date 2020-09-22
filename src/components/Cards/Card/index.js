import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src="" alt="" />
      <div className="card-main">
        <p className="card-user"></p>
        <p className="card-message">{props.message}</p>
        {/* Icon */}
        {/* Icon */}
        {/* Icon */}
      </div>
      <div className="card-response">
        <button className="card-btn">Click</button>
        <div className="card-tag">Ask</div>
      </div>
    </div>
  );
}

export default Card;
