import Portfolio from "../assets/portfolio.jpg";

const Projects = ({
  id,
  img,
  title,
  blog_description,
  technologies,
  link,
  git_link,
}) => {
  console.log(id);
  return (
    <section className="blog-page">
      <div className="blog-author">
        <img src={Portfolio} alt="portfolio" className="about_pic" />
        <p>Anastasiya Kuzich</p>
      </div>

      <div className="blog-content">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-text">{blog_description}</p>
      </div>

      <div className="btn-container">
        <a className="btn-solid" href={link} target="_blank">
          Visit website
        </a>
        <div className="separation">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <a className="btn-light" href={git_link} target="_blank">
          See code
        </a>
      </div>

      <img src={img} className="blog-img" />
      {/* <ProjectSlider/> */}

      <div className="tech-content">
        <h2>Technologies used</h2>
        <ul>
          {technologies.map((technology) => (
            <li>{technology}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
