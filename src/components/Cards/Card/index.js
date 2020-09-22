import React from "react";
import "./card.css";

function Card({ message, first_name, last_name, email, photo }) {
  return (
    <div className="card">
      <img className="card-img" src={photo} alt="user photo" />
      <div className="card-main">
        <p className="card-user">
          {first_name} {last_name}
        </p>
        <p className="card-message">{message}</p>
        <div className="interact-icons">
          <div className="interact-icon">
            <span>
              <i className="fas fa-share share-icon"></i> 12
            </span>
          </div>
          <div className="interact-icon">
            <span>
              <i class="fas fa-heart"></i> 3
            </span>
          </div>
          <div className="interact-icon">
            <i class="fas fa-share-alt"></i>
          </div>
        </div>
        {/* Icon */}
        {/* Icon */}
      </div>
      <div className="card-response">
        <button className="card-btn">
          12 min <i class="fas fa-greater-than"></i>
        </button>
        <div className="card-tag">Ask</div>
      </div>
    </div>
  );
}

export default Card;
