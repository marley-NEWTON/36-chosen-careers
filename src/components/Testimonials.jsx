import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Testimonials.css";

const translations = {
  en: {
    eyebrow: "SIMPLE PROCESS",
    title: "Your Career Document,",
    highlight: "In Three Easy Steps.",
    description:
      "Create your professional CV or cover letter without a complicated process or unnecessary waiting.",
    steps: [
      {
        number: "01",
        icon: "fa-solid fa-pen-to-square",
        title: "Enter Your Details",
        description:
          "Provide your personal information, education, skills, experience, and the details needed for your document.",
      },
      {
        number: "02",
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "Generate Your Document",
        description:
          "Use our document creation process to turn your information into a professionally formatted career document.",
      },
      {
        number: "03",
        icon: "fa-solid fa-file-arrow-down",
        title: "Pay & Download",
        description:
          "Complete the payment process and download your generated document when it is ready.",
      },
    ],
    cvButton: "Create My CV",
    letterButton: "Create Cover Letter",
    note: "Choose the document you need and get started.",
  },
  sw: {
    eyebrow: "HATUA RAHISI",
    title: "Hati Yako ya Kazi,",
    highlight: "Kwa Hatua Tatu Rahisi.",
    description:
      "Tengeneza CV au barua yako ya maombi ya kazi kwa urahisi, bila mchakato mgumu au kusubiri bila sababu.",
    steps: [
      {
        number: "01",
        icon: "fa-solid fa-pen-to-square",
        title: "Jaza Taarifa Zako",
        description:
          "Weka taarifa zako binafsi, elimu, ujuzi, uzoefu na maelezo yanayohitajika kwenye hati yako.",
      },
      {
        number: "02",
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "Tengeneza Hati Yako",
        description:
          "Tumia mfumo wetu kubadilisha taarifa zako kuwa hati ya kazi yenye mpangilio wa kitaalamu.",
      },
      {
        number: "03",
        icon: "fa-solid fa-file-arrow-down",
        title: "Lipa na Upakue",
        description:
          "Kamilisha malipo kisha pakua hati yako iliyotengenezwa ikiwa tayari.",
      },
    ],
    cvButton: "Tengeneza CV Yangu",
    letterButton: "Tengeneza Barua ya Maombi",
    note: "Chagua hati unayohitaji na uanze.",
  },
};

function Testimonials() {
  const { language } = useLanguage();
  const text = translations[language] || translations.en;

  return (
    <section className="testimonials how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-heading">
          <span className="how-eyebrow">
            <span className="how-eyebrow-line"></span>
            {text.eyebrow}
          </span>

          <h2 className="how-title">
            {text.title} <span>{text.highlight}</span>
          </h2>

          <p className="how-description">{text.description}</p>
        </div>

        <div className="how-steps">
          {text.steps.map((step) => (
            <article className="how-step-card" key={step.number}>
              <div className="how-step-top">
                <span className="how-step-number">{step.number}</span>

                <div className="how-step-icon">
                  <i className={step.icon}></i>
                </div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="how-actions">
          <p>{text.note}</p>

          <div className="how-buttons">
            <Link
              to="/order?service=professional-cv"
              className="how-button how-button-primary"
            >
              {text.cvButton}
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

            <Link
              to="/order?service=cover-letter"
              className="how-button how-button-secondary"
            >
              {text.letterButton}
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
