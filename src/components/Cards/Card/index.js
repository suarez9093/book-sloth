import React, { useState } from "react";
import "./card.css";

function Card({ users, replies }) {
  const { message, first_name, last_name, photo, id, likes } = users;
  const [foundUser, setFoundUser] = useState();

  const [isHidden, setIsHidden] = useState(true);
  const [like, setLike] = useState(likes);

  function toggleReplies(e) {
    const button = e.target;
    const cardResContainer = button.parentNode;
    const card = cardResContainer.parentNode;
    console.dir(card);
    const replyContainer = card.nextSibling;
    console.dir(replyContainer);
    if (replyContainer.style.maxHeight) {
      replyContainer.style.maxHeight = 0;
    } else {
      replyContainer.style.maxHeight = replyContainer.scrollHeight + "px";
    }
    setIsHidden((prevState) => !prevState);
  }

  // function reply() {
  //   console.log(replies[0].reply_user_id);
  //   let user;
  //   for (let [key, value] of Object.entries(users)) {
  //     if (value === replies[0].reply_user_id) {
  //       user = users;
  //     }
  //   }
  //   setFoundUser(user);
  // }

  // reply();

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
    let overlay = document.getElementById("overlay");
    if (e.target.className === "fas fa-share-alt") {
      overlay.style.display = "block";
    } else if (e.target.id === "close-modal") {
      overlay.style.display = "none";
    }
  }

  return (
    <>
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
          <div className="reply-container">
            <div className="card">
              <img className="card-img" src={photo} alt="user" />
              <div className="card-main">
                <p className="card-user"></p>
                <p className="card-message"></p>
              </div>
              <div className="card-response-container">
                <span className="card-btn-text">4 hr</span>
              </div>
            </div>
          </div>
        </div>
      )}

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
