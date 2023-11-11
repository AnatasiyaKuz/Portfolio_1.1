import "./App.scss";
import About from "./components/About/About";
import { ContactUs } from "./components/ContactMe/ContactMe";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      {/* <About/>
      <Skills/>
      <Projects/>
      <ContactUs/> */}
    </div>
  );
}

export default App;
