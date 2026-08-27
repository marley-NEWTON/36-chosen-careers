import { Link } from "react-router-dom";
import services from "../data/services.js";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Professional career services designed to help you stand out, get
            noticed, and move closer to your next opportunity.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <i className={service.icon}></i>

              <h3>{service.name}</h3>

              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <i className="fa-solid fa-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="service-meta">
                <span>
                  <i className="fa-regular fa-clock"></i> {service.delivery}
                </span>

                <span className="service-price">{service.price}</span>
              </div>

              <Link
                to={`/order?service=${encodeURIComponent(service.id)}`}
                className="service-btn"
              >
                Order Now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
