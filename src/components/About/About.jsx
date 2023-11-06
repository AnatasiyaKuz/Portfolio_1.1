import "./styles.scss";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <section className="about">
      <div className="about_block">
        <div className="about_info">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos animi
            impedit nisi saepe doloribus aperiam placeat voluptatibus nam ex
            necessitatibus dolorem, repellendus autem unde exercitationem? Sit
            ab perspiciatis magni expedita.
          </p>
        </div>
        <div className="about_contacts">
            <p><FontAwesomeIcon icon={faLocationDot} style={{color: "#fdb2b7",}} />Israel/Haifa</p>
            <p><FontAwesomeIcon icon={faEnvelope} style={{color: "#fdb2b7",}} />anastasiya.kuzich@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} style={{color: "#fdb2b7",}} />051 586-41-44</p>
        </div>
      </div>
    </section>
  );
};

export default About;
