import { Link } from "react-router-dom";
import styled from "styled-components";

const SayHi = () => {
  return (
    <SayHiStyle>
      <div className="divider"></div>
      <div className="section">
        <h1>
          Say hi to <span className="purpled">Ammar</span>.
        </h1>
        <p>
          If you want any website related work, send me an email and I'll
          respond as soon as possible.
        </p>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </SayHiStyle>
  );
};

const SayHiStyle = styled.div`
  position: relative;
  margin: 40px auto 30px;
  padding-top: 90px;
  padding-bottom: 120px;
  text-align: center;
  max-width: 730px;

  h1 {
    font-size: 60px;
  }

  p {
    display: block;
    max-width: 730px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    line-height: 160%;
  }

  button {
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 12px 50px;
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
  }
`;

export default SayHi;
