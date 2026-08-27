import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="about-title">About 36 Chosen Careers</h2>
          <p className="about-description">
            36 Chosen Careers helps job seekers build professional CVs and cover
            letters using AI-powered tools. Our platform combines clean design
            with smart content suggestions to help you stand out and land the
            job you deserve.
          </p>
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <i className="fa-solid fa-file-lines"></i>
            <h3>10+</h3>
            <p>CV Templates</p>
          </div>
          <div className="about-stat">
            <i className="fa-solid fa-users"></i>
            <h3>5,000+</h3>
            <p>Users Helped</p>
          </div>
          <div className="about-stat">
            <i className="fa-solid fa-robot"></i>
            <h3>AI</h3>
            <p>Powered Suggestions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
