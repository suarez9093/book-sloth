import React, { useState } from "react";
import "./card.css";

function Card({
  message,
  first_name,
  last_name,
  photo,
  users,
  replies,
  id,
  likes,
}) {
  console.log(replies);
  const [isHidden, setIsHidden] = useState(true);
  const [like, setLike] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  console.log(like);
  function toggleReplies(e) {
    const button = e.target;
    const cardResContainer = button.parentNode;
    const card = cardResContainer.parentNode;
    const replyContainer = card.nextSibling;
    if (replyContainer.style.maxHeight) {
      replyContainer.style.maxHeight = null;
    } else {
      replyContainer.style.maxHeight = replyContainer.scrollHeight + "px";
    }
    setIsHidden((prevState) => !prevState);
  }

  function toggleLike(e) {
    const heart = e.target;
    if (heart.style.color === "") {
      heart.style.color = "red";
      heart.style.fontSize = "1.25em";
      setLike((prevState) => prevState + 1);
    } else {
      heart.style.color = "";
      heart.style.fontSize = "1em";
      setLike((prevState) => prevState - 1);
    }
  }

  return (
    <>
      <div className="card-container">
        <div className="card">
          <img className="card-img" src={photo} alt="user profile" />
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
                  <i onClick={toggleLike} className="fas fa-heart"></i> {like}
                </span>
              </div>
              <div className="interact-icon">
                <i className="fas fa-share-alt"></i>
              </div>
            </div>
          </div>
          <div className="card-response-container">
            <button onClick={toggleReplies} className="card-btn">
              12 min
              {isHidden && (
                <i className="fas fa-greater-than card-btn-icon"></i>
              )}
              {!isHidden && (
                <i className="fas fa-greater-than card-btn-rotate"></i>
              )}
            </button>
            <div className="card-tag">Ask</div>
          </div>
        </div>
        {/* {!isHidden && (
          <div className="reply-container">
            <div className="card">
              <img
                className="card-img"
                src={users.replies[0].photo}
                alt="user photo"
              />
              <div className="card-main">
                <p className="card-user">
                  {users.replies[0].first_name} {users.replies[0].last_name}
                </p>
                <p className="card-message">{users.replies[0].message}</p>
              </div>
              <div className="card-response-container">
                <span className="card-btn-text">4 hr</span>
              </div>
            </div>
          </div>
        )} */}
        {/* {!isHidden && ( */}
        <div className="reply-container">
          <div className="card">
            <img className="card-img" src={replies[0].photo} alt="user" />
            <div className="card-main">
              <p className="card-user">
                {replies[0].first_name} {replies[0].last_name}
              </p>
              <p className="card-message">{replies[0].message}</p>
            </div>
            <div className="card-response-container">
              <span className="card-btn-text">4 hr</span>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
}

export default Card;
