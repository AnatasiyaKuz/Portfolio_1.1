import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  const MyIcon = () => (
    <FontAwesomeIcon icon={faHandSpock} size="2xl" style={{ color: "#4356ff" }} />
  );

  return (
    <section className="hero" id="hero">
      <div>
        <h1 className="hero-title">FRONT-END DEVELOPER</h1>
        <p className="hero-subtitle">
          Anastasiya Kuzich, 21 years old. I'm a passionate young web developer who
          loves creating, imaginating and coding things to make them real and
          accessible.
        </p>
      </div>
      <div className="hero-illustrations">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlLang="en"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
        >
          <title>Circular Text Path</title>
          <defs>
            <path
              id="textcircle"
              d="M250,400
                 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              transform="rotate(12,250,250)"
            />
          </defs>
          <g class="textcircle">
            <text textLength="942">
              <textPath
                xlinkHref="#textcircle"
                aria-label="CSS & SVG are awesome"
                textLength="942"
              >
                React &amp; Front-end Developer | &amp; HTML | CSS | JS |&#160;
              </textPath>
            </text>
            <foreignObject
              className="icon-container"
              width="100%"
              height="100%"
            >
              <div className="icon-wrapper">
                <MyIcon />
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
