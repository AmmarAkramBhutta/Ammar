import style from './nav.module.css'
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from 'react';

const Nav = () => {
  let [isSticky, setSticky] = useState(false) 

  window.addEventListener("scroll", function () {
    setSticky(window.scrollY > 3)
  });

  return (
    <>
      <header className={isSticky ? style.sticky : ''}>
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
            <Link style={{border: '0px solid white '}} to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Nav;
