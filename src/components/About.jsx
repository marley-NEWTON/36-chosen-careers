import { useLanguage } from "../context/LanguageContext.jsx";
import "./About.css";

function About() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: "fa-solid fa-file-lines",
      number: "10+",
      label: {
        en: "CV Templates",
        sw: "Miundo ya CV",
      },
      description: {
        en: "Professional designs",
        sw: "Miundo ya kitaalamu",
      },
    },
    {
      icon: "fa-solid fa-users",
      number: "5,000+",
      label: {
        en: "Users Helped",
        sw: "Watumiaji Waliosaidiwa",
      },
      description: {
        en: "Built for job seekers",
        sw: "Kwa wanaotafuta kazi",
      },
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      number: "AI",
      label: {
        en: "Smart Suggestions",
        sw: "Mapendekezo Mahiri",
      },
      description: {
        en: "Smarter career documents",
        sw: "Nyaraka bora za kazi",
      },
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-text">
          <span className="about-eyebrow">
            <span className="about-eyebrow-line" />
            {t({
              en: "GET TO KNOW US",
              sw: "TUF AHAMU ZAIDI".replace(" ", ""),
            })}
          </span>

          <h2 className="about-title">
            {t({
              en: "Your Career Deserves",
              sw: "Kazi Unayoitamani",
            })}
            <span className="about-title-highlight">
              {t({
                en: " a Better Beginning.",
                sw: " Inaanza Hapa.",
              })}
            </span>
          </h2>

          <p className="about-description">
            {t({
              en: "36 Chosen Careers helps job seekers create professional CVs and cover letters with the support of AI-powered tools. We bring together thoughtful design and smart content guidance to help you present your skills with confidence.",
              sw: "36 Chosen Careers huwasaidia wanaotafuta kazi kuandaa CV na barua za maombi ya kazi za kitaalamu kwa msaada wa zana za AI. Tunaunganisha muundo mzuri na mwongozo wa maudhui ili kukusaidia kuwasilisha ujuzi wako kwa kujiamini.",
            })}
          </p>

          <div className="about-promise">
            <span className="about-promise-icon">
              <i className="fa-solid fa-check" aria-hidden="true" />
            </span>

            <p>
              {t({
                en: "Helping you present your potential, one document at a time.",
                sw: "Tunakusaidia kuonyesha uwezo wako, hati moja baada ya nyingine.",
              })}
            </p>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
            <article className="about-stat" key={stat.label.en}>
              <div className="about-stat-icon">
                <i className={stat.icon} aria-hidden="true" />
              </div>

              <div className="about-stat-content">
                <h3>{stat.number}</h3>

                <p className="about-stat-label">{t(stat.label)}</p>

                <span className="about-stat-description">
                  {t(stat.description)}
                </span>
              </div>

              <i
                className="fa-solid fa-arrow-up-right-from-square about-stat-arrow"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
