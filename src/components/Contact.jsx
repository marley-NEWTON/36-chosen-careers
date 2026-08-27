import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a question about our services? Reach out and we'll respond
            promptly.
          </p>

          <div className="contact-detail">
            <i className="fa-solid fa-envelope"></i>
            <span>support@36chosencareers.com</span>
          </div>
          <div className="contact-detail">
            <i className="fa-solid fa-phone"></i>
            <span>+254 700 000 000</span>
          </div>
          <div className="contact-detail">
            <i className="fa-solid fa-location-dot"></i>
            <span>Nairobi, Kenya</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
