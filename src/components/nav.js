import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  let [isSticky, setSticky] = useState(false);

  window.addEventListener("scroll", function () {
    setSticky(window.scrollY > 3);
  });

  return (
    <NavStyle>
      <header className={isSticky ? "sticky" : ""}>
        <Link to="/" className="logo">
          <img src={Logo} alt="Ammar Akram" />
        </Link>
        <ul>
          <li>
            <Link to="/">Qualifications</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: 0 }}
              animate={{ width: pathname === "/qualifications" ? "80%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/projects">Projects</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: 0 }}
              animate={{ width: pathname === "/projects" ? "80%" : "0%" }}
            />
          </li>
          <li>
            <Link style={{ border: "0" }} to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </header>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  header {
    top: -3px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000000;
    margin-top: 25px;
    padding-top: 10px;
    background: white;
    opacity: 1;
  }

  .sticky {
    position: fixed;
    padding-top: 10px;
    padding-bottom: 10px;
    background: rgba(255, 255, 255, 1);
    border: solid 1px transparent;
    border-right: 0px;
    margin-top: 0;
    border-left: 0px;
    background-clip: padding-box;
    box-shadow: 0 -200px 0 rgba(46, 54, 68, 0.03);
    opacity: 1;
    transition: margin-top;
    padding-left: 11vw;
    padding-right: 11vw;
  }

  header .logo {
    position: relative;
    text-decoration: none;
    width: 227px;
  }
  header ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  header ul li {
    position: relative;
    list-style: none;
  }
  header ul li a {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    font-size: 17px;
    color: black;
  }

  header ul li a:hover {
    /* border-bottom: 2px solid #9b51e0; */
    opacity: 0.8;
    transition: opacity 0.02s;
  }

  button {
    font-weight: normal;
    font-size: 17px;
    cursor: pointer;
    padding: 11px 30px;
    border: 0;
    border-radius: 150px;
    background: #9b51e0;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: purple;
    }
  }
`;

const Line = styled(motion.span)`
  height: 0.1rem;
  background: #000;
  width: 5%;
  position: absolute;
  bottom: -30%;
  left: 11%;
`;

export default Nav;
