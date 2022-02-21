import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  // let [isSticky, setSticky] = useState(false);

  // window.addEventListener("scroll", function () {
  //   setSticky(window.scrollY > 3);
  // });

  return (
    <NavStyle>
      <div className="section">
        <header className='{isSticky ? "sticky" : ""}'>
          <Link to="/" className="logo">
            <img src={Logo} alt="Ammar Akram" />
          </Link>
          <ul>
            <li>
              <Link to="/">Qualifications</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: 0 }}
                animate={{
                  width: pathname === "/qualifications" ? "80%" : "0%",
                }}
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
              <Link className="abutton" style={{ border: "0" }} to="/contact">
                <button>Contact</button>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  .section {
    @media (max-width: 768px) {
      margin: 0;
    }
  }
  header {
    top: -3px;
    left: 0;
    width: 100%;
    background-clip: padding-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 15px;
    background: #fff;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .sticky {
    position: fixed;
    padding-top: 10px;
    background-clip: padding-box;
    /* box-shadow: 0 -200px 0 rgba(46, 54, 68, 0.03); */
    transition: padding-top;
  }

  header .logo {
    position: relative;
    text-decoration: none;
    width: 227px;
  }
  header ul {
    z-index: 1000000;
    background: #fff;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      padding: 10px 0;
      width: 100%;
      flex-wrap: wrap;
    }
  }
  header ul li {
    position: relative;
    list-style: none;
  }
  header ul li a {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: black;

    @media (max-width: 768px) {
      margin: 0 10px;
    }
  }

  header ul li a:hover {
    /* border-bottom: 2px solid #9b51e0; */
    opacity: 0.8;
    transition: opacity 0.02s;
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
    transition: all 0.2s ease;
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

const Line = styled(motion.span)`
  height: 0.1rem;
  background: #000;
  width: 5%;
  position: absolute;
  bottom: -30%;
  left: 11%;
`;

export default Nav;
