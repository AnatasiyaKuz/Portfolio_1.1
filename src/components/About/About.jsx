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
          Anatasiya Kuzich, 21 years old. A passionate young web developer with 2.5+ years experience that
          loves creating, imaginating and coding things to make them real,
          accessible.
          <br />
          <br />I did an TeachMeSkills offline course where I learned how to
          code websites. It was a 9 months course, I learned Html, Css at first,
          then JavaScript and React. But I wanted to know more, so I went on
          youtube to learn ExpressJS, NodeJS, and MongoDB to create my own REST
          API. After completing the course, I worked for a year at IBA Group,
          where I got my first commercial experience in React development using
          Redux and many libraries. Afterwards, I moved to Israel where I
          studied FullStack development at Zionet for six months and then
          gained a lot of experience working with an excellent team at DeliveApp. <br />
          Talking about my soft skills: I'm creative, responsible and love to work in a team. <br /> <br />
          Now I am looking for interesting and useful projects where I can benefit
          and develop myself. &#128151;
        </p>
      </div>
      <img src={Portfolio} alt="portfolio" className="about_pic" />
    </section>
  );
};

export default About;
