import "./App.scss";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <Home />
      </div>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
