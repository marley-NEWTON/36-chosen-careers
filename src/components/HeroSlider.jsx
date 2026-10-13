import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./HeroSlider.css";

function HeroSlider() {
  const { t } = useLanguage();

  return (
    <section className="hero-slider" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-inner">
        {/* LEFT: HERO CONTENT */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />

            {t({
              en: "YOUR NEXT CHAPTER STARTS HERE",
              sw: "HATUA YAKO INAYOFUATA INAANZA HAPA",
            })}
          </div>

          <h1 id="hero-title" className="hero-title">
            {t({
              en: "Your Dream Job",
              sw: "Kazi Unayoitamani",
            })}
            <br />

            {t({
              en: "Starts With a",
              sw: "Inaanza na",
            })}
            <br />

            <span>
              {t({
                en: "Great CV.",
                sw: "CV Bora.",
              })}
            </span>
          </h1>

          <p className="hero-subtitle">
            {t({
              en: "Create a professional CV or cover letter in minutes. Present your skills with confidence and get ready for your next career opportunity.",
              sw: "Tengeneza CV au barua ya maombi ya kazi ya kitaalamu kwa dakika chache. Wasilisha ujuzi wako kwa kujiamini na jiandae kwa fursa yako inayofuata ya kazi.",
            })}
          </p>

          <div className="hero-actions">
            <Link to="/#services" className="hero-cta">
              {t({
                en: "Create My CV",
                sw: "Tengeneza CV Yangu",
              })}

              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>

            <Link to="/#services" className="hero-secondary">
              <span className="hero-secondary-icon">
                <i className="fa-regular fa-file-lines" aria-hidden="true" />
              </span>

              <span>
                {t({
                  en: "Explore Our Services",
                  sw: "Tazama Huduma Zetu",
                })}
              </span>
            </Link>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <i className="fa-solid fa-bolt" aria-hidden="true" />

              <span>
                {t({
                  en: "Fast Delivery",
                  sw: "Huduma ya Haraka",
                })}
              </span>
            </div>

            <span className="hero-trust-divider" />

            <div className="hero-trust-item">
              <i className="fa-solid fa-shield-halved" aria-hidden="true" />

              <span>
                {t({
                  en: "Secure Payment",
                  sw: "Malipo Salama",
                })}
              </span>
            </div>

            <span className="hero-trust-divider" />

            <div className="hero-trust-item">
              <i className="fa-solid fa-file-circle-check" aria-hidden="true" />

              <span>
                {t({
                  en: "Professional CVs",
                  sw: "CV za Kitaalamu",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: DECORATIVE CV PREVIEW */}
        <div
          className="hero-visual"
          aria-label={t({
            en: "CV design preview",
            sw: "Mfano wa muundo wa CV",
          })}
        >
          <div className="hero-visual-orbit hero-orbit-one" />
          <div className="hero-visual-orbit hero-orbit-two" />

          <div className="hero-floating-label hero-label-top">
            <span className="hero-label-icon">
              <i className="fa-solid fa-award" aria-hidden="true" />
            </span>

            <span>
              <strong>
                {t({
                  en: "Professional",
                  sw: "Kitaalamu",
                })}
              </strong>

              <small>
                {t({
                  en: "CV Templates",
                  sw: "Miundo ya CV",
                })}
              </small>
            </span>
          </div>

          <div className="hero-resume">
            <div className="hero-resume-sidebar">
              <div className="hero-resume-monogram">CV</div>

              <div className="hero-resume-side-line wide" />
              <div className="hero-resume-side-line" />
              <div className="hero-resume-side-line short" />

              <div className="hero-resume-side-heading">
                {t({
                  en: "CONTACT",
                  sw: "MAWASILIANO",
                })}
              </div>

              <div className="hero-resume-side-line wide" />
              <div className="hero-resume-side-line" />

              <div className="hero-resume-side-heading">
                {t({
                  en: "SKILLS",
                  sw: "UJUZI",
                })}
              </div>

              <div className="hero-skill">
                <span />
              </div>

              <div className="hero-skill">
                <span className="skill-two" />
              </div>

              <div className="hero-skill">
                <span className="skill-three" />
              </div>

              <div className="hero-skill">
                <span className="skill-four" />
              </div>
            </div>

            <div className="hero-resume-main">
              <div className="hero-resume-topline">
                <span>
                  {t({
                    en: "CURRICULUM VITAE",
                    sw: "WASIFU BINAFSI",
                  })}
                </span>

                <i className="fa-solid fa-circle-check" aria-hidden="true" />
              </div>

              <div className="hero-resume-profile">
                <div className="hero-resume-avatar">
                  <i className="fa-solid fa-user" aria-hidden="true" />
                </div>

                <div className="hero-resume-name">
                  <div className="hero-resume-name-line" />
                  <div className="hero-resume-role-line" />
                </div>
              </div>

              <div className="hero-resume-section">
                <h3>
                  {t({
                    en: "PROFESSIONAL SUMMARY",
                    sw: "MUHTASARI BINAFSI",
                  })}
                </h3>

                <div className="hero-resume-line" />
                <div className="hero-resume-line" />
                <div className="hero-resume-line short-line" />
              </div>

              <div className="hero-resume-section">
                <h3>
                  {t({
                    en: "WORK EXPERIENCE",
                    sw: "UZOEFU WA KAZI",
                  })}
                </h3>

                <div className="hero-resume-experience">
                  <span className="hero-resume-timeline" />

                  <div className="hero-resume-experience-content">
                    <div className="hero-resume-line medium-line" />
                    <div className="hero-resume-line" />
                    <div className="hero-resume-line short-line" />
                  </div>
                </div>

                <div className="hero-resume-experience">
                  <span className="hero-resume-timeline" />

                  <div className="hero-resume-experience-content">
                    <div className="hero-resume-line medium-line" />
                    <div className="hero-resume-line" />
                  </div>
                </div>
              </div>

              <div className="hero-resume-section">
                <h3>
                  {t({
                    en: "EDUCATION",
                    sw: "ELIMU",
                  })}
                </h3>

                <div className="hero-resume-line medium-line" />
                <div className="hero-resume-line short-line" />
              </div>

              <div className="hero-resume-footer">
                <span>36 CHOSEN CAREERS</span>

                <span>
                  {t({
                    en: "PROFESSIONAL PROFILE",
                    sw: "WASIFU WA KITAALAMU",
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="hero-floating-label hero-label-bottom">
            <span className="hero-label-check">
              <i className="fa-solid fa-check" aria-hidden="true" />
            </span>

            <span>
              <strong>
                {t({
                  en: "Ready for your next step",
                  sw: "Jiandae kwa hatua inayofuata",
                })}
              </strong>

              <small>
                {t({
                  en: "Your career. Our priority.",
                  sw: "Kazi yako. Kipaumbele chetu.",
                })}
              </small>
            </span>
          </div>

          <div className="hero-gold-decoration" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-bottom-border" aria-hidden="true" />
    </section>
  );
}

export default HeroSlider;
