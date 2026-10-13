import { useLanguage } from "../context/LanguageContext.jsx";
import "./Features.css";

function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      number: "01",
      title: {
        en: "AI-Powered Content",
        sw: "Maudhui Yanayotumia AI",
      },
      description: {
        en: "Get smart suggestions for professional summaries, skills, and work experience descriptions.",
        sw: "Pata mapendekezo mahiri ya wasifu wa kitaalamu, ujuzi na maelezo ya uzoefu wako wa kazi.",
      },
    },
    {
      icon: "fa-solid fa-palette",
      number: "02",
      title: {
        en: "Professional Templates",
        sw: "Miundo ya Kitaalamu",
      },
      description: {
        en: "Choose a suitable CV design to present your qualifications and experience professionally.",
        sw: "Chagua muundo wa CV unaofaa ili kuwasilisha sifa na uzoefu wako kwa njia ya kitaalamu.",
      },
    },
    {
      icon: "fa-solid fa-file-pdf",
      number: "03",
      title: {
        en: "PDF Documents",
        sw: "Nyaraka za PDF",
      },
      description: {
        en: "Prepare CVs and cover letters as downloadable PDF documents when the relevant service is available.",
        sw: "Andaa CV na barua za maombi ya kazi katika mfumo wa PDF unaoweza kupakuliwa pale huduma husika inapopatikana.",
      },
    },
    {
      icon: "fa-solid fa-shield-halved",
      number: "04",
      title: {
        en: "Privacy & Security",
        sw: "Faragha na Usalama",
      },
      description: {
        en: "We take the privacy of your career information seriously and work to protect your data.",
        sw: "Tunachukulia faragha ya taarifa zako za kazi kwa uzito na tunajitahidi kulinda data yako.",
      },
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-heading">
          <span className="features-eyebrow">
            <span className="features-eyebrow-line" />
            {t({
              en: "BUILT AROUND YOUR CAREER",
              sw: "IMEJENGWA KWA AJILI YA KAZI YAKO",
            })}
          </span>

          <h2 className="features-title">
            {t({
              en: "Tools That Help You",
              sw: "Zana Zinazokusaidia",
            })}
            <span className="features-title-highlight">
              {t({
                en: " Move Forward",
                sw: " Kusonga Mbele",
              })}
            </span>
          </h2>

          <p className="features-intro">
            {t({
              en: "Discover the tools designed to help you prepare and present your career documents with confidence.",
              sw: "Gundua zana zilizoundwa kukusaidia kuandaa na kuwasilisha nyaraka zako za kazi kwa kujiamini.",
            })}
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top">
                <div className="feature-icon">
                  <i className={feature.icon} aria-hidden="true" />
                </div>

                <span className="feature-number">{feature.number}</span>
              </div>

              <h3>{t(feature.title)}</h3>

              <p>{t(feature.description)}</p>

              <div className="feature-card-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
