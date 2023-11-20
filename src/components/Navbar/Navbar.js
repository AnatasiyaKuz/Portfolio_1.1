import { navLinks } from "../../constants";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onHandleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section className="navbar">
      <div className="container">
        <Link to="/Portfolio_1.1">
          <img src={Logo} />
        </Link>

        <ul className="menu">
          <li>
            <Link to="/Portfolio_1.1">Home</Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <Link to="/Portfolio_1.1/contact">Contact</Link>
          </li>
        </ul>
        <div className="menu_burger">
          <button className="burger_button" onClick={onHandleClick}>
            {openMenu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          {openMenu ? (
            <ul className={`burger_list ${openMenu ? "slide-in" : ""}`}>
              <li>
                <Link to="/Portfolio_1.1">Home</Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <Link to="/Portfolio_1.1/contact">Contact</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
