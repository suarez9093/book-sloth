import React, { useState } from "react";
import "./card.css";

function Card({ message, first_name, last_name, email, photo, users }) {
  const [isHidden, setIsHidden] = useState(true);
  function toggleReplies() {
    setIsHidden((prevState) => !prevState);
  }

  return (
    <>
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
                <i className="fas fa-heart"></i> 3
              </span>
            </div>
            <div className="interact-icon">
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
        </div>
        <div className="card-response-container">
          <button onClick={toggleReplies} className="card-btn">
            <span className="card-btn-text">12 min</span>
            <i className="fas fa-greater-than card-btn-icon"></i>
          </button>
          <div className="card-tag">Ask</div>
        </div>
        {!isHidden && (
          <div className="replies">
            <img className="card-img" src={users.replies[0].photo} alt="" />
            <div className="card-main">
              <p className="card-user">Hello</p>
              <p className="card-message">{users.replies[0].message}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
