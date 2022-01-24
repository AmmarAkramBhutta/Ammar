import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/logo.svg";

const Nav = () => {
  return (
    <>
      <Header>
        <Link to="/" className="logo">
          <img src={Logo} alt="Ammar Akram" />
        </Link>
        <ul>
          <li>
            <Link to="/">Qualifications</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </Header>
    </>
  );
};

const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000000;
  padding-top: 35px;
  background: white;
  opacity: 1;
  transition: padding-top 0.2s;

  .logo {
    position: relative;
    text-decoration: none;
    width: 227px;
  }
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li {
    position: relative;
    list-style: none;
  }
  ul li a {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    font-size: 17px;
    color: black;
    &:hover {
      border-bottom: 2px solid #9b51e0;
      transition: border-bottom 0.02s;
    }
  }
`;

export default Nav;
