import { navLinks } from "../../constants";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Logo from '../../assets/logo.svg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onHandleClick = () =>{
    setOpenMenu(!openMenu)
  }

  return (
    <section className="navbar">
      <a href="/">
        <img src={Logo}/>
      </a>

      <ul className="menu">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="menu_burger">
        <button className="burger_button" onClick={onHandleClick}>{openMenu?<FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars}/>}</button>
        
        {openMenu?<ul className={`burger_list ${openMenu?'slide-in':''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={onHandleClick}>{link.title}</a>
            </li>
          ))}
        </ul>:''}
      
      </div>

      {/* <div className={`dropdown_menu ${openMenu?'open':''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href="#">{link.title}</a>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
};

export default Navbar;
