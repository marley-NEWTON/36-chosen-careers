import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import services from "../data/services.js";
import "./Services.css";

const translations = {
  en: {
    eyebrow: "WHAT WE OFFER",
    title: "Your Career Documents,",
    highlight: "Made Simple.",
    description:
      "Create professional career documents in minutes. Choose the service you need, enter your details, and get your document ready to download.",
    cvFeatures: [
      "Professional CV templates",
      "AI-powered writing assistance",
      "Professional formatting",
      "Instant CV generation",
      "Downloadable document",
    ],
    letterFeatures: [
      "Job-focused letter content",
      "AI-powered writing assistance",
      "Professional formatting",
      "Instant letter generation",
      "Downloadable document",
    ],
    cvDescription:
      "Present your skills, education, and experience with a professional CV designed to help you make a strong impression.",
    letterDescription:
      "Introduce yourself professionally with a cover letter tailored to the position you want to apply for.",
    cvButton: "Create My CV",
    letterButton: "Create My Cover Letter",
    instant: "Instant generation",
  },
  sw: {
    eyebrow: "HUDUMA ZETU",
    title: "Nyaraka za Kazi,",
    highlight: "Kwa Urahisi.",
    description:
      "Tengeneza nyaraka za kazi kwa urahisi. Chagua huduma unayohitaji, jaza taarifa zako, kisha pata hati yako tayari kwa kupakua.",
    cvFeatures: [
      "Miundo ya CV ya kitaalamu",
      "Msaada wa uandishi unaotumia AI",
      "Mpangilio wa kitaalamu",
      "Utengenezaji wa CV papo hapo",
      "Hati inayoweza kupakuliwa",
    ],
    letterFeatures: [
      "Maudhui yanayolenga kazi unayoomba",
      "Msaada wa uandishi unaotumia AI",
      "Mpangilio wa kitaalamu",
      "Utengenezaji wa barua papo hapo",
      "Hati inayoweza kupakuliwa",
    ],
    cvDescription:
      "Wasilisha ujuzi, elimu na uzoefu wako kwa CV ya kitaalamu inayokusaidia kujitambulisha vizuri kwa waajiri.",
    letterDescription:
      "Jitambulishe kwa njia ya kitaalamu kwa kutumia barua ya maombi inayolingana na nafasi ya kazi unayoomba.",
    cvButton: "Tengeneza CV Yangu",
    letterButton: "Tengeneza Barua Yangu",
    instant: "Hutengenezwa papo hapo",
  },
};

function Services() {
  const { language } = useLanguage();
  const text = translations[language] || translations.en;

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="services-eyebrow">
            <span className="services-eyebrow-line"></span>
            {text.eyebrow}
          </span>

          <h2>
            {text.title} <span>{text.highlight}</span>
          </h2>

          <p>{text.description}</p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const isCV = service.id === "professional-cv";

            const features = isCV ? text.cvFeatures : text.letterFeatures;
            const description = isCV
              ? text.cvDescription
              : text.letterDescription;
            const buttonText = isCV ? text.cvButton : text.letterButton;

            return (
              <article
                className={`service-card ${isCV ? "service-card-cv" : "service-card-letter"}`}
                key={service.id}
              >
                <div className="service-card-heading">
                  <div className="service-icon-wrap">
                    <i className={service.icon}></i>
                  </div>

                  <span className="service-instant-label">
                    <i className="fa-solid fa-bolt"></i>
                    {text.instant}
                  </span>
                </div>

                <h3>{service.name}</h3>

                <p className="service-description">{description}</p>

                <ul className="service-features">
                  {features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-meta">
                  <span className="service-price">{service.price}</span>
                </div>

                <Link
                  to={`/order?service=${encodeURIComponent(service.id)}`}
                  className="service-btn"
                >
                  {buttonText}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
