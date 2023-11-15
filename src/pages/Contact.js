import { Link } from "react-router-dom";
import About from "../components/About/About";
import { ContactUs } from "../components/ContactMe/ContactMe";

const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <div className="contact-title">
          <h1>REACH ME</h1>
          <div className="contact-line"></div>
        </div>
        <p className="contact-subtitle">Ask a question, hire me ? This contact form is here for that.</p>
      </div>
      <ContactUs/>
    </section>
  );
};

export default ContactPage;
