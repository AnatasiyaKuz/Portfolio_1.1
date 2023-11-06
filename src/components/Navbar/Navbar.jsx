import { navLinks } from "../../constants";
import "./styles.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="navbar">
      <div className="logo">
        <img alt="logo" src={logo} />
        <p>nastasiya</p>
      </div>

      <ul className="menu">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="toggle_btn" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars}/>}
      </div>

      <div className={`dropdown_menu ${openMenu?'open':''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href="#">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
