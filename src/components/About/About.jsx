import { useEffect, useRef } from "react";
import "./styles.scss";
import Typed from "typed.js";
import Portfolio from "../../assets/portfolio.jpg";

const About = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hi, welcome here !"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="about" id="about-a">
      <div className="about_content">
        <span className="title" ref={el}></span>

        {/* <h2 className="title">Hi, welcome here !</h2> */}
        <div className="delimitation"></div>
        <p className="text">
          Anatasiya Kuzich, 21 years old. I'm passionate young web developer
          with 2.5+ years experience who loves creating, imaginating and coding
          things to make them real and accessible.
          <br />
          <br />I attended 9-month courses of web-development where I learned
          HTML, CSS, JS and React. Also, I taught myself ExpressJS, NodeJs and
          MongoDB by myself to create my own REST API. After completing the
          course, I worked for a year at IBA Group, where I got my first
          commercial experience in React development using Redux and many
          libraries. Afterwards, I moved to Israel where I studied FullStack
          development at Zionet for six months and gained a lot of experience
          working with an excellent team at DeliveApp. <br />
          Talking about my soft skills: I'm creative, responsible and love to
          work in a team. <br /> <br />
          Now I am looking for projects where I can show my skills and be
          helpfull for the team I work with. &#128151;
        </p>
      </div>
      <img src={Portfolio} alt="portfolio" className="about_pic" />
    </section>
  );
};

export default About;
