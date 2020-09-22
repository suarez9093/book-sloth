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
      </div>
      <div className="card-response-container">
        <button className="card-btn">
          <span className="card-btn-text">12 min</span>
          <i class="fas fa-greater-than card-btn-icon"></i>
        </button>
        <div className="card-tag">Ask</div>
      </div>
    </div>
  );
}

export default Card;
