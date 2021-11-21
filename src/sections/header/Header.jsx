import { useState } from "react";
import "./header.css";

function Header() {
  const [scrolledNav, setScrolledNav] = useState(false);

  const navChange = () => {
    if (window.scrollY >= 100) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  window.addEventListener("scroll", navChange);

  const [menuOpen, setMenuOpen] = useState(false);
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className={scrolledNav ? "header scrolledNav" : "header"}>
      <div className="headcontainer">
        <div>
          <a href="#hero">
            <img className="logo" src="img/mfhlogo.png" alt="logo" />
          </a>
        </div>
        <nav className={"nav " + (menuOpen && "active")}>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <ul className={"navelements " + (menuOpen && "active")}>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#hero">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#myworks">My works</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#about">About</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#myskills">Skills</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
