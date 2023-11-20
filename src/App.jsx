import "./App.scss";
import About from "./components/About/About";
import { ContactUs } from "./components/ContactMe/ContactMe";
import Contacts from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { realizations } from "./constants";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/Portfolio_1.1" exact element={<Home />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route
            path="/Portfolio_1.1/contact"
            exact
            element={<ContactPage />}
          />
          {/* <Route path="/projects" element={<Projects/>} /> */}
          {realizations.map((realization) => (
            <Route
              path={realization.id}
              element={<Projects {...realization} />}
            />
          ))}
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
