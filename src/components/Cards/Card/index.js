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
    const heartBtn = e.target;
    if (heartBtn.style.color === "") {
      heartBtn.style.color = "red";
      heartBtn.style.fontSize = "1.25em";
      setLike((prevState) => prevState + 1);
    } else {
      heartBtn.style.color = "";
      heartBtn.style.fontSize = "1em";
      setLike((prevState) => prevState - 1);
    }
  }

  function toggleModal(e) {
    // if (replyContainer.style.maxHeight) {
    //   replyContainer.style.maxHeight = null;
    // } else {
    //   replyContainer.style.maxHeight = replyContainer.scrollHeight + "px";
    // }
    console.log(e.target.id);
    let overlay = document.getElementById("overlay");
    if (e.target.id === "") {
      overlay.style.display = "block";
      overlay.style.transition = "2s";
    } else if (e.target.id === "close-modal") {
      overlay.style.display = "none";
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
                  <i className="fas fa-share reply-icon"></i> 12
                </span>
              </div>
              <div className="interact-icon">
                <span>
                  <i onClick={toggleLike} className="fas fa-heart"></i> {like}
                </span>
              </div>
              <div className="interact-icon">
                <i onClick={toggleModal} className="fas fa-share-alt"></i>
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

        {/*  */}
      </div>
      <div id="overlay">
        <div id="modal">
          <h2>Share this post</h2>
          <div className="a2a_kit a2a_kit_size_32 a2a_default_style share-social-container">
            <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
            <a className="a2a_button_facebook"></a>
            <a className="a2a_button_twitter"></a>
            <a className="a2a_button_email"></a>
            <a className="a2a_button_linkedin"></a>
            <a className="a2a_button_reddit"></a>
          </div>
          <button onClick={toggleModal} id="close-modal">
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
