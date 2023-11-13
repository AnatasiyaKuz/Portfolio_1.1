import Icons from "../AnimatedIcons/Icons";
import "./styles.scss";
const Footer = () => {

  return (
    <footer className="footer" id="contacts-a">
        <div className="footer-talk">
            <h2>Want to have me in your team ?</h2>
            <a href="/"><button>Contact Me</button></a>
        </div>
        <div className="footer-content">
          <a href="mailto:anastasiya.kuzich@gmail.com">anastasiya.kuzich@gmail.com</a>
        </div>
      <Icons/>
    </footer>
  );
};

export default Footer;
