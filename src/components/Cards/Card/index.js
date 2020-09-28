import React, { useState } from "react";
import "./card.css";

function Card({ users }) {
  const { message, first_name, last_name, photo, likes, replies } = users;

  const [isHidden, setIsHidden] = useState(true);
  const [like, setLike] = useState(likes);

  function toggleReplies(e) {
    const button = e.target;
    const cardResContainer = button.parentNode;
    const card = cardResContainer.parentNode;
    const replyContainer = card.nextSibling;
    if (!replyContainer) {
      return;
    } else if (replyContainer.style.maxHeight) {
      replyContainer.style.maxHeight = null;
    } else {
      replyContainer.style.maxHeight = replyContainer.scrollHeight + "px";
    }
    setIsHidden((prevState) => !prevState);
  }

  function toggleLike(e) {
    const heartBtn = e.target;
    console.dir(heartBtn);
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
    let overlay = document.querySelector(".overlay");
    if (e.target.className === "fas fa-share-alt") {
      overlay.style.display = "block";
    } else if (e.target.className === "modal-btn") {
      overlay.style.display = "none";
    }
  }

  return (
    <>
      {/* Message Container
    ===========================================================
    */}
      {message && (
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

          {/* Reply Container
    ===========================================================
    */}
          {replies && (
            <div className="reply-container">
              <div className="card">
                <img className="card-img" src={replies[0].photo} alt="user" />
                <div className="card-main">
                  <p className="card-user">
                    {replies[0].first_name} {replies[0].last_name}{" "}
                  </p>
                  <p className="card-message">{replies[0].message} </p>
                </div>
                <div className="card-response-container">
                  <span className="card-btn-text">4 hr</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal
    ===========================================================
    */}

      <div className="overlay">
        <div className="modal">
          <h2 className="modal-title">Share this post</h2>
          <ul className="modal-share-links">
            <li className="modal-share-item">
              <a
                className="modal-link"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="modal-img"
                  src="https://cdn.worldvectorlogo.com/logos/facebook-2.svg"
                  alt="facebook"
                />
              </a>
            </li>
            <li className="modal-share-item">
              <a className="modal-link" href="http://www.twitter.com/tweet">
                <img
                  className="modal-img"
                  src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
                  alt="twitter"
                />
              </a>
            </li>
            <li className="modal-share-item">
              <a
                className="modal-link"
                href="http://www.reddit.com/submit?url=https://stackoverflow.com/questions/24823114/post-to-reddit-via-url&title=Post%20to%20Reddit%20via%20URL"
              >
                <img
                  className="modal-img"
                  src="https://www.logo.wine/a/logo/Reddit/Reddit-Logomark-Color-Logo.wine.svg"
                  alt="reddit"
                />
              </a>
            </li>
            <li className="modal-share-item"></li>
          </ul>

          <button onClick={toggleModal} className="modal-btn">
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
