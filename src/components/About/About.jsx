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
    <section className="about">
      <div className="about_content">
        <span className="title" ref={el}></span>

        {/* <h2 className="title">Hi, welcome here !</h2> */}
        <div className="delimitation"></div>
        <p className="text">
          Morazzani Sebastian, 20 years old. A passionate young web developer
          that loves creating, imaginating and coding things to make them real,
          accessible.
          <br />
          <br />I did an OpenClassrooms online course where I learned how to
          code websites. It was a 9 months course, I learned Html, Css at first,
          then JavaScript and React. But I wanted to know more, so I went on
          youtube to learn ExpressJS, NodeJS, and MongoDB to create my own REST
          API which runs my portfolio. The entire Porfolio has been designed by
          myself on Figma. <br />
          Talking about my soft skills: I'm creative, autodidact and
          independent. <br /> <br />
          At the end of this course, I had a BTEC Higher National Diploma or Bac
          +2 in France.
        </p>
      </div>
      <img src={Portfolio} alt="portfolio" className="about_pic" />
    </section>
  );
};

export default About;
