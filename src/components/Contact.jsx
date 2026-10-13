import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Contact.css";

const translations = {
  en: {
    eyebrow: "LET'S CONNECT",
    title: "Let's Talk About",
    highlight: "Your Career.",
    subtitle:
      "Have a question about creating your CV or cover letter? Send us a message and let us know how we can help.",
    emailLabel: "Email Us",
    emailDescription: "For questions and support",
    serviceLabel: "Our Services",
    serviceDescription: "Professional CVs and cover letters",
    availabilityLabel: "Our Approach",
    availabilityDescription: "Simple, convenient, and career-focused",
    formTitle: "Send Us a Message",
    formDescription: "Fill in the form below. All fields are required.",
    nameLabel: "Full Name",
    namePlaceholder: "Enter your full name",
    emailFieldLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    messageLabel: "Your Message",
    messagePlaceholder: "How can we help you?",
    button: "Send Message",
    sending: "Sending...",
    success: "Your message has been submitted.",
  },
  sw: {
    eyebrow: "WASILIANA NASI",
    title: "Tuongelee",
    highlight: "Safari Yako ya Kazi.",
    subtitle:
      "Una swali kuhusu kutengeneza CV au barua ya maombi ya kazi? Tuandikie ujumbe na utueleze jinsi tunavyoweza kukusaidia.",
    emailLabel: "Barua Pepe",
    emailDescription: "Kwa maswali na msaada",
    serviceLabel: "Huduma Zetu",
    serviceDescription: "CV na barua za maombi ya kazi",
    availabilityLabel: "Namna Yetu ya Kazi",
    availabilityDescription: "Rahisi, inayofaa na inayolenga kazi",
    formTitle: "Tutumie Ujumbe",
    formDescription: "Jaza fomu hapa chini. Sehemu zote zinahitajika.",
    nameLabel: "Jina Kamili",
    namePlaceholder: "Andika jina lako kamili",
    emailFieldLabel: "Anwani ya Barua Pepe",
    emailPlaceholder: "wewe@example.com",
    messageLabel: "Ujumbe Wako",
    messagePlaceholder: "Tunaweza kukusaidiaje?",
    button: "Tuma Ujumbe",
    sending: "Inatuma...",
    success: "Ujumbe wako umewasilishwa.",
  },
};

function Contact() {
  const { language } = useLanguage();
  const text = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Contact form functionality will be connected later.
    console.log("Contact form submitted:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line"></span>
            {text.eyebrow}
          </span>

          <h2 className="contact-title">
            {text.title} <span>{text.highlight}</span>
          </h2>

          <p className="contact-subtitle">{text.subtitle}</p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div className="contact-detail-content">
                <h3>{text.emailLabel}</h3>
                <p>support@36chosencareers.com</p>
                <span>{text.emailDescription}</span>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <i className="fa-solid fa-file-lines"></i>
              </div>

              <div className="contact-detail-content">
                <h3>{text.serviceLabel}</h3>
                <p>{text.serviceDescription}</p>
                <span>{text.availabilityDescription}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <h3>{text.formTitle}</h3>
            <p>{text.formDescription}</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">{text.nameLabel}</label>

              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder={text.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">{text.emailFieldLabel}</label>

              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder={text.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">{text.messageLabel}</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder={text.messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                required
              />
            </div>

            {submitted && (
              <p className="contact-success" role="status">
                {text.success}
              </p>
            )}

            <button type="submit" className="contact-btn">
              <span>{text.button}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
