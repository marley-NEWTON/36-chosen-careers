import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="container hero-container">
        <span className="hero-badge">
          <i className="fa-solid fa-circle hero-badge-dot"></i>
          Professional CV Writing Service
        </span>

        <h1 className="hero-title">
          Get Hired with a <span>Professional CV</span>
        </h1>

        <p className="hero-subtitle">
          We craft ATS-friendly CVs and cover letters that highlight your
          strengths and get you noticed.
        </p>

        <div className="hero-actions">
          <Link to="/services" className="btn-primary hero-cta">
            Order Your CV Now <i className="fa-solid fa-arrow-right"></i>
          </Link>
          <Link to="/samples" className="hero-secondary">
            <i className="fa-solid fa-circle-play"></i> View Samples
          </Link>
        </div>

        <ul className="hero-trust">
          <li>
            <i className="fa-solid fa-circle-check"></i> ATS-Optimized
          </li>
          <li>
            <i className="fa-solid fa-circle-check"></i> Professional Writers
          </li>
          <li>
            <i className="fa-solid fa-circle-check"></i> 100% Satisfaction
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
