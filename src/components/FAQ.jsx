import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./FAQ.css";

const translations = {
  en: {
    eyebrow: "GOT QUESTIONS?",
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about creating your CV and cover letter.",
    faqs: [
      {
        question: "What services does 36 Chosen Careers offer?",
        answer:
          "We offer two services: professional CV generation and professional cover letter generation. Choose the document you need to get started.",
      },
      {
        question: "How much does each service cost?",
        answer:
          "A professional CV costs TZS 10,000, while a professional cover letter costs TZS 5,000. Each service is paid for separately.",
      },
      {
        question: "How long does it take to generate my document?",
        answer:
          "Our goal is to let you generate your career document instantly after entering the required information. The exact process depends on the features available in the system.",
      },
      {
        question: "Do I need an account to use the website?",
        answer:
          "You may be asked to log in or create an account before proceeding to the order form. Follow the instructions displayed on the website.",
      },
      {
        question: "Can I create both a CV and a cover letter?",
        answer:
          "Yes. You can use both services. Select the CV service to create your CV, or select the cover letter service to create a letter for the job you want to apply for.",
      },
      {
        question: "How will I get my completed document?",
        answer:
          "The website is being developed to provide access to generated documents for download. The available download process will be shown when the feature is ready.",
      },
    ],
  },

  sw: {
    eyebrow: "UNA MASWALI?",
    title: "Maswali Yanayoulizwa Mara kwa Mara",
    description:
      "Pata majibu ya maswali ya kawaida kuhusu utengenezaji wa CV na barua za maombi ya kazi.",
    faqs: [
      {
        question: "36 Chosen Careers inatoa huduma gani?",
        answer:
          "Tunatoa huduma mbili: utengenezaji wa CV ya kitaalamu na utengenezaji wa barua ya maombi ya kazi. Chagua hati unayohitaji ili kuanza.",
      },
      {
        question: "Kila huduma inagharimu kiasi gani?",
        answer:
          "CV ya kitaalamu inagharimu TZS 10,000, na barua ya maombi ya kazi inagharimu TZS 5,000. Kila huduma inalipiwa kivyake.",
      },
      {
        question: "Inachukua muda gani kutengeneza hati yangu?",
        answer:
          "Lengo letu ni kukuwezesha kutengeneza hati yako ya kazi papo hapo baada ya kujaza taarifa zinazohitajika. Mchakato halisi unategemea vipengele vilivyopo kwenye mfumo.",
      },
      {
        question: "Je, ninahitaji akaunti kutumia website?",
        answer:
          "Unaweza kuhitajika kuingia kwenye akaunti yako au kufungua akaunti kabla ya kuendelea kwenye fomu ya oda. Fuata maelekezo yanayoonyeshwa kwenye website.",
      },
      {
        question: "Je, ninaweza kutengeneza CV na barua ya maombi?",
        answer:
          "Ndiyo. Unaweza kutumia huduma zote mbili. Chagua huduma ya CV kutengeneza CV yako, au chagua huduma ya barua ya maombi ili kutengeneza barua ya kazi unayotaka kuomba.",
      },
      {
        question: "Nitapataje hati yangu iliyotengenezwa?",
        answer:
          "Website inatengenezwa ili kukuwezesha kupata na kupakua hati zako. Utaratibu wa kupakua utaonyeshwa kipengele hicho kitakapokuwa tayari.",
      },
    ],
  },
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { language } = useLanguage();

  const text = translations[language] || translations.en;

  const toggleFAQ = (index) => {
    setOpenIndex((previous) => (previous === index ? null : index));
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-heading">
          <span className="faq-eyebrow">
            <span className="faq-eyebrow-line"></span>
            {text.eyebrow}
          </span>

          <h2 className="faq-title">{text.title}</h2>

          <p className="faq-description">{text.description}</p>
        </div>

        <div className="faq-list">
          {text.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className="faq-item" key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle-icon">
                    <i
                      className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`}
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer" id={answerId}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
