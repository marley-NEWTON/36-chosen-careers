import "./Footer.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    description:
      "Helping you present your professional story with confidence through CVs and cover letters.",
    explore: "Explore",
    home: "Home",
    about: "About Us",
    howItWorks: "How It Works",
    faq: "FAQs",
    ourServices: "Our Services",
    professionalCV: "Professional CV",
    coverLetter: "Cover Letter",
    getInTouch: "Get in Touch",
    contactDescription:
      "Have a question about our services? We would love to hear from you.",
    contactUs: "Contact Us",
    rights: "All rights reserved.",
    tagline: "Your career. Your next chapter.",
  },

  sw: {
    description:
      "Tunakusaidia kuwasilisha uwezo na uzoefu wako kitaalamu kupitia CV na barua za maombi ya kazi.",
    explore: "Gundua",
    home: "Mwanzo",
    about: "Kuhusu Sisi",
    howItWorks: "Jinsi Inavyofanya Kazi",
    faq: "Maswali Yanayoulizwa Mara kwa Mara",
    ourServices: "Huduma Zetu",
    professionalCV: "CV ya Kitaalamu",
    coverLetter: "Barua ya Maombi ya Kazi",
    getInTouch: "Wasiliana Nasi",
    contactDescription:
      "Una swali kuhusu huduma zetu? Tungependa kusikia kutoka kwako.",
    contactUs: "Wasiliana Nasi",
    rights: "Haki zote zimehifadhiwa.",
    tagline: "Safari yako ya kazi. Hatua yako inayofuata.",
  },
};

function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const text = translations[language] || translations.en;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <a
            href="#home"
            className="footer-logo"
            aria-label="36 Chosen Careers Home"
          >
            <span className="footer-logo-mark">36</span>

            <span className="footer-logo-text">
              <strong>CHOSEN</strong>
              <span>CAREERS</span>
            </span>
          </a>

          <p className="footer-description">{text.description}</p>

          <p className="footer-tagline">{text.tagline}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>{text.explore}</h3>

          <ul>
            <li>
              <a href="#home">{text.home}</a>
            </li>
            <li>
              <a href="#about">{text.about}</a>
            </li>
            <li>
              <a href="#how-it-works">{text.howItWorks}</a>
            </li>
            <li>
              <a href="#faq">{text.faq}</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>{text.ourServices}</h3>

          <ul>
            <li>
              <a href="/order?service=professional-cv">{text.professionalCV}</a>
            </li>
            <li>
              <a href="/order?service=cover-letter">{text.coverLetter}</a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div className="footer-column footer-contact">
          <h3>{text.getInTouch}</h3>

          <p>{text.contactDescription}</p>

          <a href="#contact" className="footer-contact-link">
            {text.contactUs}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>

          <div className="footer-socials" aria-label="Social media">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="X">
              <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            &copy; {year} 36 Chosen Careers. {text.rights}
          </p>

          <span className="footer-bottom-brand">36 CHOSEN CAREERS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
