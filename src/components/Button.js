import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = () => {
  return (
    <>
      <Link className="abutton" style={{ border: "0" }} to="/contact">
        <button>Contact</button>
      </Link>
    </>
  );
};

const ButtonStyle = styled.div`
  a:hover {
    /* border-bottom: 2px solid #9b51e0; */
    opacity: 0.7;
    transition: opacity 0.3s;
  }

  .abutton {
    margin-right: 0;

    @media (max-width: 768px) {
      margin: 0 10px;
    }
  }

  button {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 11px 30px;
    border: 0;
    border-radius: 150px;
    background: #9b51e0;
    color: white;
    transition: transform 0.2s ease;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      opacity: 1;
      transform: translateY(3px);
    }

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

export default Button;
