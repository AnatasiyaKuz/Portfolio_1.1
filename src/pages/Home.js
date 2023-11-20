import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Realizations from "../components/Realizations/Realizations";
import Skillsd from "../components/Skills/Skills";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Skillsd/>
      <Realizations/>
    </section>
  );
};

export default Home;
