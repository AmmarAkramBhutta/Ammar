import styled from "styled-components";
import ContactButton from "./contact-button";

const SayHi = () => {
  return (
    <SayHiStyle id="contact">
      <div className="divider"></div>
      <div className="section">
        <h1>
          Say hi to <span className="purpled">Ammar</span>.
        </h1>
        <p>
          If you want any website related work, send me an email and I'll
          respond as soon as possible.
        </p>
        <div className="button">
          <ContactButton title="Send me an Email" />
        </div>
      </div>
    </SayHiStyle>
  );
};

const SayHiStyle = styled.div`
  position: relative;
  margin: 60px auto 30px;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  max-width: 730px;

  h1 {
    font-size: 60px;
  }

  .button {
    margin-top: 30px;
  }
  a {
    min-width: 220px;
  }

  p {
    display: block;
    max-width: 730px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    line-height: 160%;
  }
  /* 
  button {
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 3px 50px;
    border: 0;
    border-radius: 150px;
    background: #9b51e0;
    color: white;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      opacity: 1;
      transform: translateY(3px);
    }
  } */
`;

export default SayHi;
