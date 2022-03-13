import { useState } from "react";
import styled from "styled-components";

const ContactButton = ({ title }) => {
  const [toggle, setToggle] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <ButtonStyle>
      <div className="popup">
        <div className={`popuptext ${toggle ? "show" : ""}`} id="myPopup">
          Click to Copy
        </div>
        <span
          onMouseOver={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
          onClick={() => {
            navigator.clipboard.writeText("mail@ammarakram.com");
            setIsCopied(true);
            setToggle(false);
            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          }}
          className={isCopied ? "clicked" : ""}
        >
          {title}
        </span>
        {isCopied && <span className="overlay_button">Email Copied</span>}
      </div>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  span {
    width: 100%;
    display: block;
    position: relative;
    min-height: 42px;
    line-height: 42px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 0 30px;
    border: 3px solid;
    border-color: #9b51e0;
    border-radius: 150px;
    background: transparent;
    color: black;
    transition: all 0.2s ease;

    &:hover {
      background: #9b51e0;
      color: white;
    }

    @media (max-width: 768px) {
      margin: 0 10px;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }

  .overlay_button,
  .overlay_button:hover {
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    border-color: #ffc700;
    background: #ffc700;
    padding: 0 15px;
  }

  /* Popup container - can be anything you want */
  .popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* The actual popup */
  .popup .popuptext {
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 1px;
    font-style: normal;
    text-align: center;
    visibility: hidden;
    /* width: 160px; */
    background-color: #ffc700;
    color: #000;
    border-radius: 3px;
    /* padding: 8px 0; */
    position: absolute;
    z-index: 1;
    bottom: -85%;
    left: 45%;
    padding: 2px 6px;
    margin-left: -40px;
    @media (max-width: 768px) {
      bottom: -47%;
    }
  }

  /* Popup arrow */
  .popup .popuptext::after {
    content: "";
    position: absolute;
    top: -30%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #ffc700 transparent transparent transparent;
    -moz-transform: scale(1, -1);
    -webkit-transform: scale(1, -1);
    -o-transform: scale(1, -1);
    -ms-transform: scale(1, -1);
    transform: scale(1, -1);
  }

  /* Toggle this class - hide and show the popup */
  .popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 0.4s;
    animation: fadeIn 0.4s;
  }

  /* Add animation (fade in the popup) */
  @-webkit-keyframes fadeIn {
    from {
      height: 0;
    }
    to {
      height: auto;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export default ContactButton;
