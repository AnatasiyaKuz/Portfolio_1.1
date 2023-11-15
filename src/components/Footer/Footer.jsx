import { Link } from "react-router-dom";
import Icons from "../AnimatedIcons/Icons";
import "./styles.scss";
const Footer = () => {

  return (
    <footer className="footer" id="contacts-a">
        <div className="footer-talk">
            <h2>Want to have me in your team ?</h2>
            <Link to="/contact"><button>Contact Me</button></Link>
        </div>
        <div className="footer-content">
          <a href="mailto:anastasiya.kuzich@gmail.com">anastasiya.kuzich@gmail.com</a>
        </div>
      <Icons/>
    </footer>
  );
};

export default Footer;
