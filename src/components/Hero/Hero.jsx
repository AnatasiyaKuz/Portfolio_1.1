import { useEffect, useRef } from "react";
import "./styles.scss";
import Typed from "typed.js";

const Hero = () => {
  // const el = useRef(null);
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Hello, World!", "Nice to meet you!"],
  //     startDelay: 300,
  //     typeSpeed: 150,
  //     backSpeed: 150,
  //     backDelay: 150,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: false,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <section className="hero" id="hero">

      <div>
        <h1 className="hero-title">FRONTEND DEVELOPER</h1>
        <p className="hero-subtitle">Anastasiya Kuzich, 21 years old. A passionate young web developer that loves creating, imaginating and coding things to make them real, accessible.</p>
      </div>
          {/* <span className="animated_span" ref={el}></span> */}
    </section>
  );
};

export default Hero;
