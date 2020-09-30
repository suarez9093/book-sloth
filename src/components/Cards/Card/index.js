import React, { useState } from "react";
import "./card.css";

function Card({ users }) {
  // Destructuring users object passed to the Card components via props.
  const { message, first_name, last_name, photo, likes, replies } = users;

  // Used for the button to toggle replies button image from > to upside down. Consider renaing
  const [isHidden, setIsHidden] = useState(true);

  // Used to update the hearts. Consider moving to context
  const [like, setLike] = useState(likes);

  function toggleReplies(e) {
    // The the button
    const button = e.target;
    // Get the button's parent node which is the card-response-container
    const cardResContainer = button.parentNode;
    // get card response container parent
    const card = cardResContainer.parentNode;
    // get card sibling
    const replyContainer = card.nextSibling;
    // If there is not a reply card container return. If not and you click on a button of a card that does not have a reply you will get a "Cannot read property 'style' of null" error
    if (!replyContainer) {
      return;
      // Otherwise if there is a maxHeigt property set the height to null.
    } else if (replyContainer.style.maxHeight) {
      replyContainer.style.maxHeight = null;
    } else {
      // Else if there is a maxHeight set the scrollHeigt of the container to the property scrollHeight in px;
      replyContainer.style.maxHeight = replyContainer.scrollHeight + "px";
    }
    // Set is hidden to true or false.
    setIsHidden((prevState) => !prevState);
  }

  // Toggle the heart button
  function toggleLike(e) {
    // The current heart button is whichever button the user clicked on.
    const heartBtn = e.target;
    // if there is not a color on the heart button set it to red and increase the size
    if (heartBtn.style.color === "") {
      heartBtn.style.color = "red";
      heartBtn.style.fontSize = "1.25em";
      // Set the value of likes + 1 (Passed from the users.json. In the future would need to be referenced to a certain message and not to the user obj)
      setLike((prevState) => prevState + 1);
    } else {
      // Otherwise if it is already liked set the color to none and set the font size back to original size and subtract 1 from value
      heartBtn.style.color = "";
      heartBtn.style.fontSize = "1em";
      setLike((prevState) => prevState - 1);
    }
  }

  function toggleModal(e) {
    // Selecting the parent div of the modal named overlay.
    let overlay = document.querySelector(".overlay");
    // If the button clicked has a classname of the following (share button on the card) set the display to block
    if (e.target.className === "fas fa-share-alt") {
      overlay.style.display = "block";
      // Otherwise if the button clicked is called modal-button (close button in modal) set the display to none
    } else if (e.target.className === "modal-btn") {
      overlay.style.display = "none";
    }
  }

  return (
    <>
      {/* Message Container
    ===========================================================
    */}
      {/* Only if there is a message that the user has written then generate the following */}
      {message && (
        // The container that holds all three cards
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
