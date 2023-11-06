import { useEffect, useRef } from "react";
import MyPhoto from "../../assets/me.jpg";
import "./styles.scss";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, World!", "Nice to meet you!"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home">
      <div className="photo_block">
        <img src={MyPhoto} alt="photo" />
      </div>

      <div className="info">
        <div>
          <span className="animated_span" ref={el}></span>
          <p>
            I'm <span>Anastasiya Kuzich</span>, <br /> a front-end developer{" "}
            <br /> I like building beautiful websites and bringing creative
            designs to life!
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
