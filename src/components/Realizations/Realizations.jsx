import React from "react";
import "./styles.scss";
import { realizations } from "../../constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Realizations = () => {
  return (
    <section className="realizations" id="projects">
      <div className="realizations-header">
        <h2 className="title">PROJECTS</h2>
        <div className="line"></div>
      </div>

      {realizations.map((realization) => (
        <Link to={realization.id} className="post-container">
          <article className="post">
            <img src={realization.img} className="post-img" />
            <div className="post-content">
              <div className="title">
                <h3>{realization.title}</h3>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#4356ff" }}
                />{" "}
              </div>
              <p className="text">{realization.description}</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Realizations;
