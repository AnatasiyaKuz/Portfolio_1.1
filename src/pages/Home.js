import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Realizations from "../components/Realizations/Realizations";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Realizations/>
    </section>
  );
};

export default Home;
