import { navLinks } from "../../constants";
import "./styles.scss";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <img alt="logo" src={logo}/>
        <p>nastasiya</p>
      </div>
        <ul className="menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href="#">{link.title}</a>
            </li>
          ))}
        </ul>
    </section>
  );
};

export default Navbar;
