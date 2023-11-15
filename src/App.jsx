import "./App.scss";
import About from "./components/About/About";
import { ContactUs } from "./components/ContactMe/ContactMe";
import Contacts from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Portfolio_1.1" element={<Home />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" />
          {/* element={<Error/>} */}
        </Routes>
        <Contacts />
      </BrowserRouter>

      {/* <Navbar />
      <Hero />
      <About/>
      <Contacts/> */}
      {/* <About/>
      <Skills/>
      <Projects/>
      <ContactUs/> */}
    </div>
  );
}

export default App;
