import { Link } from "react-router-dom";

function HeroSlide({ slide, isActive }) {
  return (
    <div className={`hero-slide ${isActive ? "active" : ""}`}>
      <div
        className="hero-slide-bg"
        style={{ backgroundImage: `url(${slide.image})` }}
      ></div>

      <div className="hero-slide-overlay"></div>

      <div className="container hero-slide-content">
        <span className="hero-badge">
          <i className="fa-solid fa-circle hero-badge-dot"></i>
          {slide.subtitle}
        </span>

        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-subtitle">{slide.description}</p>

        <div className="hero-actions">
          <Link to={slide.primaryBtnLink} className="btn-primary hero-cta">
            {slide.primaryBtnText} <i className="fa-solid fa-arrow-right"></i>
          </Link>

          {slide.secondaryBtnText && (
            <Link to={slide.secondaryBtnLink} className="hero-secondary">
              <i className="fa-solid fa-circle-play"></i>{" "}
              {slide.secondaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
