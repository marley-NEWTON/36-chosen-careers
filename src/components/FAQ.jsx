import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How does the ordering process work?",
    answer:
      "You choose a service, fill out the order form with your details, and submit payment. Our team writes your CV and uploads it to your account once complete.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on the service selected, ranging from 1 to 4 days as shown on each service card.",
  },
  {
    question: "Do you offer subscriptions?",
    answer:
      "No. Every service is a one-time payment per order — there are no monthly or yearly plans.",
  },
  {
    question: "How do I receive my completed CV?",
    answer:
      "Once your order is complete, log in to your account and download it directly from your dashboard.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes, revision requests can be submitted through your account after delivery.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <i
                  className={`fa-solid ${
                    openIndex === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </button>

              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
