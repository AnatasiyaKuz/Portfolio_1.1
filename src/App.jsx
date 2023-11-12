import "./App.scss";
import About from "./components/About/About";
import { ContactUs } from "./components/ContactMe/ContactMe";
import Contacts from "./components/Footer/Footer";
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
      <Contacts/>
      {/* <About/>
      <Skills/>
      <Projects/>
      <ContactUs/> */}
    </div>
  );
}

export default App;
