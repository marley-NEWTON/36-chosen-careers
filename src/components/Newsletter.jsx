import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container newsletter-container">
        <div className="newsletter-text">
          <h2>Get Career Tips &amp; Updates</h2>
          <p>Subscribe to receive job search tips and service offers.</p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            Subscribe <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
